import { Link, useLocation } from 'react-router-dom';

const ReturnButton = () => {
  const location = useLocation();

  return (
    <Link to={location.state?.from || '/'}>
      <button>-- Go back</button>
    </Link>
  );
};

export default ReturnButton;
