'use client'
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "react-feather"
import { useState, useEffect } from "react";

export default function Slide({
  slides = [
    { id: 1, img: "/img/slide1.png" },
    { id: 2, img: "/img/slide2.jpg" },
    { id: 3, img: "/img/slide3.jpg" },
  ],
  auto = false,
  autoInterval = 3000,
}) {
  const [current, setCurrent] = useState(0);
  const previous = () => setCurrent((current) => (current === 0 ? slides.length - 1 : current - 1));
  const next = () => setCurrent((current) => (current === slides.length - 1 ? 0 : current + 1));

  useEffect(() => {
    if (!auto) return;
    const slideInterval = setInterval(next, autoInterval);
    return () => clearInterval(slideInterval);
  }, [auto, autoInterval, next]);

  return (
    <div className="overflow-hidden relative bg-white dark:bg-gray-900 mx-auto w-full max-w-screen-xl p-0 py-6 lg:py-8">
      <div
        className="flex transition-transform ease-out duration-500 h-full"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((image) => (
          <div key={image.id} className="relative w-full h-64 md:h-96 lg:h-[700px] flex-shrink-0">
            <Image
              src={image.img}
              className="object-cover rounded-lg w-full h-full"
              alt={`Slide ${image.id}`}
              layout="fill"
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={previous}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <ChevronLeft size={40} />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <ChevronRight size={40} />
        </button>
      </div>

      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((image) => (
            <div
              key={image.id}
              className={`transition-all w-3 h-3 bg-slate-400 rounded-full ${current === image.id - 1 ? "p-2" : "bg-opacity-50"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
