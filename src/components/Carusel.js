import { useState, useEffect } from 'react';

const images = [
  '/images/image1.webp',
  '/images/image2.webp',
  '/images/image3.jpeg',
  '/images/image4.jpeg',
  '/images/image5.webp',
  '/images/image6.jpeg',
  '/images/image7.jpeg',
  '/images/image8.jpeg',

];

export default function Carusel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-96 overflow-hidden">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Slide ${index}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === current ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}
    </div>
  );
}
