import { useState, useEffect } from "react";
import { imageAPI, ImageResponse } from "../api/imageAPI";

const useFetchImages = () => {
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

  return { images, isFetching, setPage };
};

export default useFetchImages;
