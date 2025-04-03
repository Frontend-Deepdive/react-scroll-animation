import { forwardRef } from "react";

interface ImageCardProps {
  imageUrl: string;
  author: string;
}

// eslint-disable-next-line no-undef
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

ImageCard.displayName = "ImageCard";
export default ImageCard;

const cardWrapper = {
  width: "100%",
  maxWidth: "500px",
  marginBottom: "20px",
  backgroundColor: "white",
  borderRadius: "10px",
  overflow: "hidden",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
};

const thumbnailImage = {
  width: "100%",
  height: "50%",
  objectFit: "cover" as const,
};

const cardContent = {
  padding: "16px",
  fontSize: "16px",
  fontWeight: 600,
  color: "#333",
};
