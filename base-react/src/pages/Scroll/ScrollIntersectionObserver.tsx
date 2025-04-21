import React from 'react';
import Box from '../../components/IntersectionObserver/Box';

const ScrollIntersectionObserver: React.FC = () => {
  return (
    <>
      {Array.from({ length: 5 }, (_, index) => (
        <div key={`box-container-${index}`}>
          <Box index={index} />
        </div>
      ))}
    </>
  );
};

export default ScrollIntersectionObserver;
