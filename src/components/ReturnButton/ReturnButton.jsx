import { Link, useLocation } from 'react-router-dom';
import { useMemo } from 'react';

import { AiOutlineArrowLeft } from 'react-icons/ai';

import { Btn } from './ReturnButton.styled';

const ReturnButton = () => {
  const location = useLocation();

  const returnPath = useMemo(() => location.state?.from || '/', []);

  console.log(returnPath);
  return (
    <Link to={returnPath} style={{ textDecoration: 'none' }}>
      <Btn>
        <AiOutlineArrowLeft style={{ paddingRight: '5px' }} />
        Go back
      </Btn>
    </Link>
  );
};

export default ReturnButton;
