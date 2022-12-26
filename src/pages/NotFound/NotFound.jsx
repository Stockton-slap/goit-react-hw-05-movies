import { Error, Message, Container } from './NotFound.styled';

const NotFound = () => {
  return (
    <Container>
      <Error>404</Error>
      <Message>The page is not found</Message>
    </Container>
  );
};
export default NotFound;
