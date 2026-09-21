import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
interface Props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: Props) => {
  return (
    <Heading marginY={5}>
      {" "}
      {gameQuery?.platform?.name} {gameQuery?.genre?.name} Game
    </Heading>
  );
};

export default GameHeading;
