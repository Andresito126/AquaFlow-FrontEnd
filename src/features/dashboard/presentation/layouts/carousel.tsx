import React from "react";
import { useAutoSlide } from "../hooks/useAutoSlide";


type Slide = {
  image: string;
  text: string;
};

type Props = {
  slides: Slide[];
  title: string;
  interval?: number;
};

const AutoCarousel: React.FC<Props> = ({ slides, title, interval = 5000 }) => {
  const { index, goNext, goPrev } = useAutoSlide(slides.length, interval);
  const current = slides[index];

  return (
    <div className="bg-[#011521] rounded-2xl p-6 w-full  mx-auto text-white shadow-lg space-y-6">
      <h2 className="text-center text-xl font-semibold">{title}</h2>

      <div className="flex items-center justify-center gap-6">
        {/* Botón Izquierda */}
        <button onClick={goPrev} className="hover:text-gray-300 transition">
         
        </button>

        {/* Imagen + Texto */}
        <div className="flex items-center gap-6">
          <img
            src={current.image}
            alt="Slide image"
            className="w-28 h-28 object-contain"
          />
          <p className="max-w-md text-sm leading-relaxed text-white">
            {current.text}
          </p>
        </div>

        {/* Botón Derecha */}
        <button onClick={goNext} className="hover:text-gray-300 transition">
         
        </button>
      </div>
    </div>
  );
};

export default AutoCarousel;
