import { useAnonymizer } from '@/shared/hooks/useAnonymizer';
import { LogItem } from '@/features/logging/hooks/useLogs';
import { dummyTagsDistributionData, getTagsDistributionData } from '@/features/statistics/hooks/useStatistics/TagsDistribution';
import { useTagsState } from '@/features/tags/hooks/useTags';
import { TagDistributionContent } from '@/features/statistics/screens/Statistics/TagsDistributionCard';
import { BigCard } from '@/shared/ui/BigCard';
import { NotEnoughDataOverlay } from './NotEnoughDataOverlay';

const MIN_TAGS = 5;

export const TagDistribution = ({
  title,
  subtitle,
  items,
}: {
  title: string
  subtitle: string
  items: LogItem[],
}) => {
  const { anonymizeTag } = useAnonymizer()
  const tagState = useTagsState();

  const data = getTagsDistributionData(items, tagState.tags);

  return (
    <BigCard
      title={title}
      subtitle={subtitle}
      isShareable
      hasFeedback
      analyticsId="tag-distribution"
      analyticsData={
        data.tags.map(tag => ({
          ...tag,
          details: anonymizeTag(tag.details),
        }))
      }
    >
      {data.tags.length < MIN_TAGS && (
        <NotEnoughDataOverlay />
      )}
      {data.tags.length >= MIN_TAGS ? (
        <TagDistributionContent
          data={data}
          limit={10}
        />
      ) : (
        <TagDistributionContent
          data={dummyTagsDistributionData}
          limit={10}
        />
      )}
    </BigCard>
  );
};
