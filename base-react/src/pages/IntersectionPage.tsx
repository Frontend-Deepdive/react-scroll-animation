import useIntersect from "../hooks/useIntersect";
import ImageCard from "../components/ImageCard";
import useFetchImages from "../hooks/useFetchImages";
import { useCallback } from "react";

const IntersectionPage = () => {
  const { images, isFetching, setPage } = useFetchImages();

  const onIntersect = useCallback(
    (entry: IntersectionObserverEntry) => {
      if (!isFetching && entry.isIntersecting) {
        setPage((prev) => prev + 1);
      }
    },
    [isFetching, setPage]
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
