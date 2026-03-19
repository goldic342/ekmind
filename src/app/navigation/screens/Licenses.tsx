import { PageWithHeaderLayout } from '@/shared/ui/PageWithHeaderLayout';
import { Text, View, VirtualizedList } from 'react-native';
import useColors from '@/shared/hooks/useColors';
export const LicensesScreen = () => {
  const colors = useColors()

  return (
    <PageWithHeaderLayout
      style={{
        flex: 1,
        backgroundColor: colors.background,
      }}
    >
      <Text>
        Placeholder
      </Text>
    </PageWithHeaderLayout>
  );
}
