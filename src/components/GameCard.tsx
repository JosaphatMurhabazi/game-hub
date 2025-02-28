import { Card, HStack, Image } from '@chakra-ui/react';
import { Game } from '../hooks/useGames';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import getCroppedImageUrl from '../services/image-url';
import Emoji from './Emoji';

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <Card.Body>
        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Card.Header fontSize="2xl">
          {game.name} <Emoji rating={game.rating_top} />
        </Card.Header>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
