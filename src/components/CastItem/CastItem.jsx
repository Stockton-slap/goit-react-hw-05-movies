import { ActorPic, ActorName, MovieCharacter } from './CastItem.styled';

const defaultActorPic =
  'https://upload.wikimedia.org/wikipedia/commons/7/72/Default-welcomer.png';

const CastItem = ({ actor }) => {
  const { profile_path, name, character } = actor;

  return (
    <li>
      <ActorPic
        src={
          profile_path === null
            ? defaultActorPic
            : `https://image.tmdb.org/t/p/w500/${profile_path}`
        }
        alt={name}
        width="200"
      />
      <ActorName>{name}</ActorName>
      <MovieCharacter>Character: {character}</MovieCharacter>
    </li>
  );
};

export default CastItem;
