import dayjs from 'dayjs';
import { Dimensions, View } from 'react-native';
import { Card } from '@/features/statistics/components/Statistics/Card';
import { t } from '@/shared/utils/translation';
import { useLogState } from '@/features/logging/hooks/useLogs';
import { getRatingDistributionForXDays } from '@/features/statistics/hooks/useStatistics/RatingDistribution';

import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import { RatingChart } from '@/shared/ui/RatingChart';

dayjs.extend(isSameOrAfter);

export const MoodChart = ({
  title,
  startDate,
}: {
  title: string,
  startDate?: string,
}) => {
  const logState = useLogState();

  const items = logState.items.filter(item => {
    return dayjs(item.dateTime).isSameOrAfter(startDate)
  })

  const data = getRatingDistributionForXDays(items, startDate, 14)

  const width = Dimensions.get('window').width - 80;
  const height = width / 2.5;

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
        <RatingChart
          data={data}
          height={height}
          width={width}
        />

      </View>
    </Card>
  );
};
