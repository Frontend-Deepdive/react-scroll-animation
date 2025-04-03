import './Box.css';
import { motion } from 'framer-motion';

interface BoxProps {
  index: number;
}

const boxVisiablity = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};

const Box: React.FC<BoxProps> = ({ index }) => {
  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={{ once: false, amount: 0.4 }}
      variants={boxVisiablity}
      transition={{
        ease: 'easeInOut',
        duration: 1.2,
        y: { duration: 1 },
      }}
    >
      <img
        src={`https://picsum.photos/400?random=${index}`}
        alt={`random ${index}`}
        width='400px'
        height='auto'
      />
    </motion.div>
  );
};

export default Box;
