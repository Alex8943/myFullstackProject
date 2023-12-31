import { Card, CardBody } from "@chakra-ui/card";
import { Image } from "@chakra-ui/image";
import { Game } from "../hooks/useGames";
import { Heading } from "@chakra-ui/layout";
import PlatformIconsList from "./PlatformIconsList";
import CriticScore from "./CriticScore";
import { HStack } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/getCroppedImageUrl";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card>
        <Image src={getCroppedImageUrl(game.background_image)} />
        <CardBody>
          <Heading>{game.name}</Heading>
          <HStack wrap="wrap" justifyContent="space-between">
            <PlatformIconsList
              platforms={game.parent_platforms.map((pp) => pp.platform)}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCard;
