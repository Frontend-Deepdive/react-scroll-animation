import './Box.css';
import { motion } from 'framer-motion';
import React, { useRef } from 'react';
import { useInView } from 'framer-motion';

interface BoxProps {
  index: number;
}

const boxVisibility = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};

const Box: React.FC<BoxProps> = ({ index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '100px' });

  return (
    <motion.div
      ref={ref}
      initial='hidden'
      animate={isInView ? 'visible' : 'hidden'}
      variants={boxVisibility}
      transition={{
        ease: 'easeInOut',
        duration: 1.2,
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
