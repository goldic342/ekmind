import { Card } from '@/features/statistics/components/Statistics/Card';
import { t } from '@/shared/utils/translation';
import dayjs from 'dayjs';
import { Dimensions, View } from 'react-native';
import { useLogState } from '@/features/logging/hooks/useLogs';

import { SleepQualityChart } from '@/shared/ui/SleepQualityChart';
import { getSleepQualityDistributionForXDays } from '@/features/statistics/hooks/useStatistics/SleepQualityDistribution';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';

dayjs.extend(isSameOrAfter);

export const SleepQualityChartCard = ({
  title,
  startDate,
}: {
  title: string,
  startDate: string,
}) => {
  const logState = useLogState();

  const items = logState.items.filter(item => {
    return dayjs(item.dateTime).isSameOrAfter(startDate)
  })

  const data = getSleepQualityDistributionForXDays(items, startDate, 14)

  const width = Dimensions.get('window').width - 80;
  const height = width / 3;

  return (
    <Card
      subtitle={t('mood')}
      title={title}
    >
      <View
        style={{
          justifyContent: 'flex-start',
        }}
      >
        <SleepQualityChart
          data={data}
          height={height}
          width={width}
        />

      </View>
    </Card>
  );
};
