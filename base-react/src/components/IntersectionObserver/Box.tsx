import React, { useEffect, useRef } from 'react';
import './Box.css';

interface BoxProps {
  index: number;
}

const Box: React.FC<BoxProps> = ({ index }) => {
  const boxRef = useRef<HTMLDivElement>(null);
  const visibilityRatioRef = useRef(0); // 가시성 비율을 ref로 관리

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const ratio = entry.intersectionRatio;

        // 리렌더링 방지
        if (boxRef.current) {
          boxRef.current.style.opacity = String(ratio);
        }

        visibilityRatioRef.current = ratio;
      },
      {
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

  return (
    <div ref={boxRef} className='box'>
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
