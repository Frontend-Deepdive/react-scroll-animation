import React, { useEffect, useRef, useState } from 'react';
import './Box.css';

interface BoxProps {
  index: number;
}

const Box: React.FC<BoxProps> = ({ index }) => {
  const boxRef = useRef<HTMLDivElement>(null);
  const [isAnimated, setisAnimated] = useState<boolean>(false); // 애니매이션 실행 여부를 관리할 상태

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isAnimated) {
          setisAnimated(true);
          boxRef.current!.style.opacity = '1';
          boxRef.current!.style.transform = 'translateY(0)';
        }
      },
      {
        threshold: 0.1, // 임계치 10%에서 트리거되도록 설정
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
  }, [isAnimated]); // isAnimated가 변경되면 다시 호출하도록 의존성 부여

  return (
    <div
      ref={boxRef}
      className='box'
      style={{
        opacity: isAnimated ? 1 : 0,
        transition: 'opacity 0.5s ease, transform 0.5s ease',
      }}
    >
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
