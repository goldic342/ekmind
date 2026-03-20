import { ScrollView, Switch, View } from "react-native"
import { Download, Trash, Upload } from "react-native-feather"
import MenuList from "@/shared/ui/MenuList"
import MenuListItem from "@/shared/ui/MenuListItem"
import TextInfo from "@/shared/ui/TextInfo"
import { t } from "@/shared/utils/translation"
import useColors from "@/shared/hooks/useColors"
import { useDatagate } from "@/shared/hooks/useDatagate"
import { RootStackScreenProps } from "@/types"
import { PageWithHeaderLayout } from "@/shared/ui/PageWithHeaderLayout"

export const DataScreen = ({ navigation }: RootStackScreenProps<"Data">) => {
  const colors = useColors()
  const datagate = useDatagate()

  return (
    <PageWithHeaderLayout
      style={{
        flex: 1,
        backgroundColor: colors.background
      }}
    >
      <ScrollView
        style={{
          padding: 20,
          flex: 1
        }}
      >
        <MenuList style={{ marginTop: 16 }}>
          <MenuListItem
            title={t("import")}
            onPress={() => datagate.openImportDialog()}
            iconLeft={<Download width={18} color={colors.text} />}
          />
          {__DEV__ && (
            <MenuListItem
              title={"Dangerously Import Directly To AsyncStorage"}
              onPress={() => datagate.openDangerousImportDirectlyToAsyncStorageDialog()}
              iconLeft={<Download width={18} color={colors.text} />}
            />
          )}
          <MenuListItem
            title={t("export")}
            onPress={() => datagate.openExportDialog()}
            iconLeft={<Upload width={18} color={colors.text} />}
            isLast
          />
        </MenuList>
        <TextInfo>{t("export_help")}</TextInfo>
        <MenuList style={{ marginTop: 16 }}>
          <MenuListItem
            testID="reset-data"
            title={t("reset_data_button")}
            onPress={() => {
              datagate.openResetDialog("data").catch(e => console.log(e))
            }}
            iconLeft={<Trash width={18} color="red" />}
            style={{
              color: "red"
            }}
          />
          <MenuListItem
            testID="reset-factory"
            title={t("reset_factory_button")}
            onPress={() => {
              datagate.openResetDialog("factory").catch(e => console.log(e))
            }}
            iconLeft={<Trash width={18} color="red" />}
            style={{
              color: "red"
            }}
            isLast
          />
        </MenuList>
        <TextInfo>{t("reset_factory_description")}</TextInfo>
      </ScrollView>
    </PageWithHeaderLayout>
  )
}
