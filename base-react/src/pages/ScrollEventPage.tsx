import { useEffect, useState, useCallback } from "react";
import { imageAPI, ImageResponse } from "../api/imageAPI";

const ScrollEventPage = () => {
  const [images, setImages] = useState<ImageResponse[]>([]);
  const [page, setPage] = useState(1);
  const [isFetching, setIsFetching] = useState(false);

  const fetchImages = useCallback(async (currentPage: number) => {
    setIsFetching(true);

    try {
      const newImages = await imageAPI.getImages({ page: currentPage, limit: 10 });
      setImages((prev) => [...prev, ...newImages]);
    } catch (error) {
      console.error("Failed to fetch images:", error);
    } finally {
      setIsFetching(false);
    }
  }, []);

  useEffect(() => {
    fetchImages(page);
  }, [page, fetchImages]);

  const handleScroll = useCallback(() => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 && !isFetching) {
      setPage((prev) => prev + 1);
    }
  }, [isFetching]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div>
      {images.map((image) => (
        <img
          key={image.id}
          src={image.download_url}
          alt="Fetched content"
          style={{ width: "50%", height: "200px", objectFit: "cover" }}
        />
      ))}
      {isFetching && <p>Loading...</p>}
    </div>
  );
};

export default ScrollEventPage;
