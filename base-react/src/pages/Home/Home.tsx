import { useNavigate } from 'react-router-dom';
import './Home.css';

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
    <div className='home-container'>
      <h1 className='title'>React Scroll Animation</h1>
      <p className='subtitle'>프론트엔드 세미나형 스터디 Topic #1 </p>

      <div className='buttons-container'>
        <button
          className='button intersection'
          onClick={() => handleClickButton('intersection-observer')}
        >
          <span className='icon'>👁️</span>
          Intersection Observer
        </button>
        <button className='button framer' onClick={() => handleClickButton('framer-motion')}>
          <span className='icon'>⚡</span>
          Framer Motion
        </button>
        <button className='button gsap' onClick={() => handleClickButton('gsap')}>
          <span className='icon'>💎</span>
          GSAP
        </button>
      </div>

      <footer className='footer'>
        <p>
          <a href='https://github.com/abyss-s/react-scroll-animation'>Github Repo Link</a>
        </p>
      </footer>
    </div>
  );
};

export default Home;
