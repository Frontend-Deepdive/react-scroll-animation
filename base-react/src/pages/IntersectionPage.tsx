import { useState, useEffect, useCallback } from "react";
import { imageAPI, ImageResponse } from "../api/imageAPI";
import useIntersect from "../hooks/useIntersect";
import ImageCard from "../components/ImageCard";

const IntersectionPage = () => {
  const [images, setImages] = useState<ImageResponse[]>([]);
  const [page, setPage] = useState(1);
  const [isFetching, setIsFetching] = useState(false);

  const fetchImages = async () => {
    if (isFetching) return;
    setIsFetching(true);
    try {
      const newImages = await imageAPI.getImages({ page, limit: 10 });
      setImages((prev) => [...prev, ...newImages]);
    } catch (error) {
      console.error("Failed to fetch images:", error);
    }
    setIsFetching(false);
  };

  useEffect(() => {
    fetchImages();
  }, [page]);

  const onIntersect = useCallback(
    (entry: IntersectionObserverEntry) => {
      if (!isFetching && entry.isIntersecting) {
        setPage((prev) => prev + 1);
      }
    },
    [isFetching, page]
  );

  const lastImageRef = useIntersect(onIntersect, {
    root: null,
    rootMargin: "0px",
    threshold: 0.3,
  });

  return (
    <div>
      {images.map((image, index) => (
        <ImageCard
          key={`${image.id}-${index}`}
          imageUrl={image.download_url}
          author={image.author}
          ref={index === images.length - 1 ? lastImageRef : null}
        />
      ))}
      {isFetching && <p>Loading...</p>}
    </div>
  );
};

export default IntersectionPage;
