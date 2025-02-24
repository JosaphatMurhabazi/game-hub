import { Card } from '@chakra-ui/react';
import { SkeletonText, Skeleton } from './ui/skeleton';

const GameCardSkeleton = () => {
  return (
    <Card.Root>
      <Skeleton height="200px" />
      <Card.Body>
        <SkeletonText />
      </Card.Body>
    </Card.Root>
  );
};

export default GameCardSkeleton;
