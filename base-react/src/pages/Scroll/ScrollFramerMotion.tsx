import Box from '../../components/FramerMotion/Box';

const ScrollFramerMotion = () => {
  return (
    <>
      {Array.from({ length: 5 }, (_, index) => (
        <Box key={index} index={index} />
      ))}
    </>
  );
};

export default ScrollFramerMotion;
