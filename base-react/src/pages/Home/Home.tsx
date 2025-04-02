import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const handleClickButton = () => {
    const button = 'framer-motion';
    switch (button) {
      case 'framer-motion':
        navigate('/framer-motion');
        break;
      default:
        break;
    }
  };

  return (
    <>
      <button onClick={handleClickButton}>Go to Framer Motion</button>
    </>
  );
};

export default Home;
