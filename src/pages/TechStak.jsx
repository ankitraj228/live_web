import { useEffect, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const techItems = [
  {
    name: 'MERN Stack',
    image: '/MERN.jpg',
    description: 'We use the powerful MERN Stack — MongoDB, Express, React, and Node.js — to build scalable full-stack applications.',
  },
  {
    name: 'GitHub',
    image: '/github.jpg',
    description: 'Our projects are version-controlled and collaborated on via GitHub for seamless development.',
  },
  {
    name: 'Postman',
    image: '/postman.jpg',
    description: 'Postman helps us test and document APIs efficiently and ensures reliable communication between frontend and backend.',
  },
  {
    name: 'JavaScript',
    image: '/javascript.jpg',   
    description: 'JavaScript is the backbone of our web applications, enabling dynamic and interactive user experiences.',
   
  }
];

const TechStack = () => {
  const [index, setIndex] = useState(0);

  // Auto-slide every 2 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % techItems.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const goToPrev = () => {
    setIndex((prev) => (prev - 1 + techItems.length) % techItems.length);
  };

  const goToNext = () => {
    setIndex((prev) => (prev + 1) % techItems.length);
  };

  const { name, image, description } = techItems[index];

  return (
    <div className="relative h-screen w-full  text-black flex flex-col justify-center items-center px-4 py-8">
      <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">Our Tech Stack</h2>

      <div className="relative w-full max-w-4xl text-black rounded-2xl p-6 md:p-10 shadow-lg text-center transition-all duration-700 ease-in-out">
        <img
          src={image}
          alt={name}
          className="mx-auto h-40 md:h-60 object-contain mb-6 transition-opacity duration-700"
        />
        <h3 className="text-2xl font-semibold mb-3">{name}</h3>
        <p className="text-gray-300">{description}</p>

        {/* Slider Controls */}
        <button
          onClick={goToPrev}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-700 hover:bg-cyan-500 p-2 rounded-full"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={goToNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 hover:bg-cyan-500 p-2 rounded-full"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="flex space-x-2 mt-6">
  {techItems.map((_, i) => (
    <span
      key={i}
      className={`w-3 h-3 rounded-full ${
        i === index ? 'bg-cyan-500' : 'bg-gray-500'
      }`}
    ></span>
  ))}
</div>
    </div>
  );
};

export default TechStack;
