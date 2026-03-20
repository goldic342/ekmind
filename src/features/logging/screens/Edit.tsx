import { LoggerEdit } from "@/features/logging/components/logger"
import { RootStackScreenProps } from "@/types"

export const LogEdit = ({ route }: RootStackScreenProps<"LogEdit">) => {
  return <LoggerEdit id={route.params.id} initialStep={route.params.step} />
}
