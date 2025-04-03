import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, forwardRef } from "react";

interface ImageCardProps {
  imageUrl: string;
  author: string;
}

const ImageCard = forwardRef<HTMLImageElement, ImageCardProps>(({ imageUrl, author }, ref) => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0.2, 0.5], [1, 0.5]);
  const translateY = useTransform(scrollYProgress, [0.2, 0.5], [0, 180]);

  return (
    <motion.section ref={sectionRef} style={{ ...cardWrapper, opacity, translateY }}>
      <img src={imageUrl} alt={author} ref={ref} style={thumbnailImage} />
      <div style={cardContent}>
        <p>{author}</p>
      </div>
    </motion.section>
  );
});

export default ImageCard;

const cardWrapper = {
  width: "400px",
  margin: "200px auto",
  backgroundColor: "white",
  borderRadius: "10px",
  overflow: "hidden",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
};

const thumbnailImage = {
  width: "100%",
  height: "50%",
  objectFit: "contain" as const,
};

const cardContent = {
  padding: "16px",
  fontSize: "16px",
  fontWeight: 600,
  color: "#333",
};
