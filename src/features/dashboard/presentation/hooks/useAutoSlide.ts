import { useEffect, useState } from "react";

export function useAutoSlide(length: number, interval: number = 5000) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % length);
    }, interval);

    return () => clearInterval(id); 
  }, [length, interval]);

  const goNext = () => setIndex((prev) => (prev + 1) % length);
  const goPrev = () => setIndex((prev) => (prev - 1 + length) % length);

  return { index, goNext, goPrev };
}

