import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface BoxProps {
  index: number;
}

const Box: React.FC<BoxProps> = ({ index }) => {
  const boxRef = useRef<HTMLDivElement>(null); // 박스의 위치 참조

  useEffect(() => {
    const box = boxRef.current;

    if (box) {
      gsap.set(box, { opacity: 0, y: 100 }); // 초기 위치 설정

      // ScrollTrigger 생성
      const st = ScrollTrigger.create({
        trigger: box,
        start: 'top bottom-=100',
        end: 'top center',
        scrub: 1,
        markers: true, // 디버깅용 설정
        onEnter: () => {
          // 요소가 뷰포트에 들어올 때 실행
          gsap.to(box, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power2.out',
          });
        },
        onLeaveBack: () => {
          // // 요소가 뷰포트를 위쪽으로 빠져나갈 때 실행
          gsap.to(box, {
            opacity: 0,
            y: 100,
            duration: 1,
            ease: 'power2.in',
          });
        },
      });

      return () => {
        // 컴포넌트 언마운트 시 정리
        st.kill();
      };
    }
  }, [index]);

  return (
    <div
      ref={boxRef}
      className='box'
      style={{
        opacity: 0,
        transform: 'translateY(100px)',
        width: '400px',
      }}
    >
      <img
        src={`https://picsum.photos/seed/${index + Date.now()}/400/400`}
        alt={`Random image ${index}`}
        width='400'
        height='400'
      />
    </div>
  );
};

export default Box;
