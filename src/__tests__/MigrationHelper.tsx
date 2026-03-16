import _ from "lodash";
import { ImportData } from "../shared/utils/Import";
import { migrateImportData } from "../shared/utils/migration";
import { INITIAL_STATE } from "@/features/settings/hooks/useSettings";
import { Tag } from "@/features/tags/hooks/useTags";
import { _generateItem } from "./utils";

const testTags: Tag[] = [
  {
    id: "1",
    title: "test1",
    color: "red",
  },
  {
    id: "2",
    title: "test2",
    color: "lime",
  },
];

const testItems = {
  '2022-01-01': _generateItem({
    date: '2022-01-01',
    rating: 'neutral',
    message: 'test message',
    tags: [...testTags],
  }),
  '2022-01-02': _generateItem({
    date: '2022-01-02',
    rating: 'neutral',
    message: '🦄',
    tags: [...testTags],
  }),
}

const testImportData: ImportData = {
  version: "1.0.0",
  settings: { ...INITIAL_STATE },
  tags: [...testTags],
  items: { ...testItems },
}

describe("MigrationHelper", () => {

  test("should `migrateImportData`", async () => {
    const newData = migrateImportData(testImportData);

    expect(newData).toEqual({
      ...testImportData,
      items: Object.values(testImportData.items),
    });
  });

  test("migrate `tags` in `settings`", async () => {
    const items = {
      '2022-01-01': _generateItem({
        date: '2022-01-01',
        rating: 'neutral',
        message: 'test message',
        tags: [...testTags],
      }),
      '2022-01-02': _generateItem({
        date: '2022-01-02',
        rating: 'neutral',
        message: '🦄',
        tags: [...testTags],
      }),
    }

    const settings = {
      ...INITIAL_STATE,
      tags: [
        {
          id: "1",
          title: "test1",
          color: "red",
        },
        {
          id: "2",
          title: "test2",
          color: "lime",
        },
      ],
    }

    const testImportData: ImportData = {
      version: "1.0.0",
      settings,
      items,
    }

    const newData = migrateImportData(testImportData);

    expect(newData).toEqual({
      version: "1.0.0",
      items: Object.values(testImportData.items).map(item => ({
        ...item,
      })),
      settings: _.omit(testImportData.settings, "tags"),
      tags: testTags,
    });
  });

  test("should `migrateImportData` from settings tags", async () => {
    const newData = migrateImportData(_.omit({
      ...testImportData,
      settings: {
        ...INITIAL_STATE,
        tags: [...testTags],
      },
    }, 'tags'));

    expect(newData).toEqual({
      ...testImportData,
      items: Object.values(testImportData.items),
    });
  })

});
