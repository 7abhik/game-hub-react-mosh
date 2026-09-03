import { Skeleton, CardBody, SkeletonText, Card } from "@chakra-ui/react";
const GameCardSkeleton = () => {
  return (
    <Card width="400px" borderRadius={10}>
      <Skeleton height="200px"></Skeleton>
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
