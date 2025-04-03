import React, { useEffect, useRef, useState } from 'react';
import './Box.css';

interface BoxProps {
  index: number;
}

const Box: React.FC<BoxProps> = ({ index }) => {
  const boxRef = useRef<HTMLDivElement>(null);
  const [visibilityRatio, setVisibilityRatio] = useState(0); // 가시성 비율 상태로 관리

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisibilityRatio(entry.intersectionRatio);
      },
      {
        // 임계치 0 -> 1
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
      }
    );

    if (boxRef.current) {
      observer.observe(boxRef.current);
    }

    return () => {
      if (boxRef.current) {
        observer.unobserve(boxRef.current);
      }
    };
  }, []);

  const dynamicStyle = {
    opacity: visibilityRatio,
  };

  return (
    <div ref={boxRef} className='box' style={dynamicStyle}>
      <img
        src={`https://picsum.photos/400?random=${index}`}
        alt={`random ${index}`}
        width='400'
        height='auto'
      />
    </div>
  );
};

export default Box;
