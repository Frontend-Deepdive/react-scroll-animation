import Box from '../../components/GSAP/Box';

const ScrollGSAP = () => {
  return (
    <>
      {Array.from({ length: 5 }, (_, index) => (
        <Box key={index} index={index} />
      ))}
    </>
  );
};

export default ScrollGSAP;
