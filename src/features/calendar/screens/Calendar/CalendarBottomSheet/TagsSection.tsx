import { View } from "react-native"
import Tag from "@/shared/ui/Tag"
import TextHeadline from "@/shared/ui/TextHeadline"
import { Tag as ITag } from "@/features/tags/hooks/useTags"

export const TagsSection = ({
  tags,
  selectedTags,
  onSelect
}: {
  tags: ITag[]
  selectedTags: ITag[]
  onSelect: (tag: ITag) => void
}) => {
  return (
    <View>
      <TextHeadline style={{ marginBottom: 12 }}>Tags</TextHeadline>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          flexWrap: "wrap"
        }}
      >
        {tags?.map(tag => (
          <Tag
            selected={selectedTags.map(d => d.id).includes(tag.id)}
            onPress={() => onSelect(tag)}
            key={tag.id}
            colorName={tag.color}
            title={tag.title}
          />
        ))}
      </View>
    </View>
  )
}
