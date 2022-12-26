import { Link, useLocation } from 'react-router-dom';

import { AiOutlineArrowLeft } from 'react-icons/ai';

import { Btn } from './ReturnButton.styled';

const ReturnButton = () => {
  const location = useLocation();

  return (
    <Link to={location.state?.from || '/'} style={{ textDecoration: 'none' }}>
      <Btn>
        <AiOutlineArrowLeft style={{ paddingRight: '5px' }} />
        Go back
      </Btn>
    </Link>
  );
};

export default ReturnButton;
