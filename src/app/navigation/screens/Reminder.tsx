import { PageWithHeaderLayout } from '@/shared/ui/PageWithHeaderLayout';
import Reminder from '@/shared/ui/Reminder';
import { ScrollView } from 'react-native';
import useColors from '@/shared/hooks/useColors';

export const ReminderScreen = () => {
  const colors = useColors()

  return (
    <PageWithHeaderLayout
      style={{
        flex: 1,
        backgroundColor: colors.background,
      }}
    >
      <ScrollView style={{
        padding: 20,
      }}>
        <Reminder />
      </ScrollView>
    </PageWithHeaderLayout>
  );
}
