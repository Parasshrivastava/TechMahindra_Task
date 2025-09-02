
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    imageUrl: '    https://images.hdqwalls.com/wallpapers/cityscape-colorful-buildings-2m.jpg',
    // https://images.pexels.com/photos/618079/pexels-photo-618079.jpeg?cs=srgb&dl=city-sky-skyline-618079.jpg&fm=jpg
    title: 'Bridging Business & Capital',
    description: 'We specialize in debt advisory, M&A, and capital raising for businesses at all stages. Our bespoke financial strategies empower you to scale efficiently and sustainably.',
    primaryBtn: { text: 'Explor More', link: '#' },
    secondaryBtn: { text: 'Get In Touch', link: '#' },
  },
  {
    // imageUrl: 'https://tse3.mm.bing.net/th/id/OIP.Hg5hC7sZLY9oXbmwf77YSgHaE-?rs=1&pid=ImgDetMain&o=7&rm=3',
    imageUrl:"https://wallpaperaccess.com/full/1170559.jpg",
    title: 'Fractional CFO Services for Growing',
    description: 'Financial Expertise Without the OverheaAccess top-tier financial leadership without hiring full-time. From cash flow planning to investor readiness-we help you stay ahead',
    primaryBtn: { text: 'Explor More', link: '#' },
    secondaryBtn: { text: 'Get In Touch', link: '#' },
  },
  {
    imageUrl: 'https://images.musement.com/cover/0001/75/thumb_74608_cover_header.jpeg',
    title: 'Strategic Capital, Delivered',
    description: " Whether you're raising working capital or acquiring a business, our experienced team structures and closes high-impact deals backed by strong capital networks.",
    primaryBtn: { text: 'Explor More', link: '#' },
    secondaryBtn: { text: 'Get In Touch', link: '#' },
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.2,
    },
  },
  exit: { opacity: 0, transition: { duration: 0.4 } },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  exit: { y: -20, opacity: 0, transition: { duration: 0.4 } },
};

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setCurrent(c => (c + 1) % slides.length), 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative max-w-screen h-screen overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-out h-full"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className="min-w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url("${slide.imageUrl}")` }}
          >
            <AnimatePresence exitBeforeEnter>
              {idx === current && (
                <motion.div
                  key={current}
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="relative z-10 flex flex-col items-start pl-20 lg:w-1/2 h-full justify-center bg-opacity-20"
                >
                  <motion.h2 variants={itemVariants} className="text-4xl text-white md:text-6xl font-bold mb-4">
                    {slide.title}
                  </motion.h2>
                  <motion.p variants={itemVariants} className="max-w-2xl text-white text-lg md:text-xl mb-8">
                    {slide.description}
                  </motion.p>
                  <motion.div variants={itemVariants} className="space-x-4 flex">
                    <a href={slide.primaryBtn.link} className="px-6 py-3  bg-blue-500 rounded-md">
                      {slide.primaryBtn.text}
                    </a>
                    <a href={slide.secondaryBtn.link} className="px-6 py-3 border border-white bg-amber-500 rounded-md">
                      {slide.secondaryBtn.text}
                    </a>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}