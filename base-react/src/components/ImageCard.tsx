import { forwardRef } from "react";

interface ImageCardProps {
  imageUrl: string;
  author: string;
}

const ImageCard = forwardRef<HTMLImageElement, ImageCardProps>(({ imageUrl, author }, ref) => {
  return (
    <div style={cardWrapper}>
      <img src={imageUrl} alt={author} ref={ref} style={thumbnailImage} />
      <div style={cardContent}>
        <p>{author}</p>
      </div>
    </div>
  );
});

export default ImageCard;

export const cardGridWrapper = {
  display: "grid",
  gap: "20px",
  padding: "20px",
};

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
