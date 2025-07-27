import React from "react";
import { useAutoSlide } from "../hooks/useAutoSlide";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Slide = {
  image: string;
  text: string;
};

type Props = {
  slides: Slide[];
  title: string;
  interval?: number;
};

const AutoCarousel: React.FC<Props> = ({ slides, title, interval = 10000 }) => {
  const { index, goNext, goPrev } = useAutoSlide(slides.length, interval);
  const current = slides[index];

  return (
    <div className="dark:bg-[#011521] border border-slate-300 dark:border-[#105B85] rounded-2xl p-6 w-full h-[290px] mx-auto shadow-xl space-y-6">
      <h2 className="text-center text-[20px] font-bold text-slate-800 dark:text-white">
        {title}
      </h2>

      <div className="flex items-center justify-center gap-6">
        <button
          onClick={goPrev}
          className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition"
        >
          <ChevronLeft className="w-6 h-6 text-slate-600 dark:text-white" />
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-6"
          >
            <img
              src={current.image}
              alt="Slide"
              className="w-52 h-52 object-contain rounded-xl shadow bg-transparent"
              style={{ backgroundColor: "transparent" }}
            />
            <p className="max-w-md text-sm leading-relaxed text-slate-700 dark:text-slate-300 text-center">
              {current.text}
            </p>
          </motion.div>
        </AnimatePresence>

        <button
          onClick={goNext}
          className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition"
        >
          <ChevronRight className="w-6 h-6 text-slate-600 dark:text-white" />
        </button>
      </div>
    </div>
  );
};

export default AutoCarousel;
