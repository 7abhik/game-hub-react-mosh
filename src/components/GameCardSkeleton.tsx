import { Skeleton, CardBody, SkeletonText, Card } from "@chakra-ui/react";
const GameCardSkeleton = () => {
  return (
    <Card>
      <Skeleton height="200px"></Skeleton>
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
