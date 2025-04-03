import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleClickButton = (buttonType: string) => {
    switch (buttonType) {
      case 'intersection-observer':
        navigate('/intersection-observer');
        break;
      case 'framer-motion':
        navigate('/framer-motion');
        break;
      case 'gsap':
        navigate('/gsap');
        break;
      default:
        break;
    }
  };

  return (
    <>
      <button onClick={() => handleClickButton('intersection-observer')}>
        Go to intersection-observer
      </button>
      <button onClick={() => handleClickButton('framer-motion')}>Go to Framer Motion</button>
      <button onClick={() => handleClickButton('gsap')}>Go to GSAP</button>
    </>
  );
};

export default Home;
