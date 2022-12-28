import { Link } from 'react-router-dom';

import { AiOutlineArrowLeft } from 'react-icons/ai';

import { Btn } from './ReturnButton.styled';

const ReturnButton = ({ path }) => {
  return (
    <Link to={path} style={{ textDecoration: 'none' }}>
      <Btn>
        <AiOutlineArrowLeft style={{ paddingRight: '5px' }} />
        Go back
      </Btn>
    </Link>
  );
};

export default ReturnButton;
