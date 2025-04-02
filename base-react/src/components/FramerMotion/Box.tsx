import './Box.css';
import { motion } from 'framer-motion';

const Box = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{
        ease: 'easeInOut',
        duration: 1.2,
        y: { duration: 1 },
      }}
    >
      <img src='https://picsum.photos/400' alt='random' width='400px' height='auto' />
    </motion.div>
  );
};

export default Box;
