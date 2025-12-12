'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const slides = [
  { id: 1, src: "/assets/hero/sliders/slider-01.jpg.svg", alt: 'Slide 1', heading: "Get the best quality products at the lowest prices" },
  { id: 2, src: "/assets/hero/sliders/elements01.svg", alt: 'Slide 2', heading: "Shopping with us for better quality and the best price" },
  { id: 3, src: "/assets/hero/sliders/slider-03.jpg.svg", alt: 'Slide 2', heading: "Get the best quality products at the lowest prices" },
  // Add more slides as needed
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // const prevSlide = () => {
  //   setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  // };

  // const nextSlide = () => {
  //   setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  // };

   {/*this useEffect function allow animation of the hero components */}
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, []);
  

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full">
      {/* Slides */}
      <div className="relative h-[540px] md:h-full overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute w-full h-full mt-18  lg:mt-6 transition-all duration-6000 ease-in-out ${
              index === currentIndex ? 'block' : 'hidden'
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover"
            />

        <div className='top-18 lg:top-20 left-4 lg:left-14 absolute'>
					<Image src="/assets/hero/sliders/header.svg" alt="Slider Image" width={124.2} height={25} className="w-[84.2px] lg:w-[124.2px] h-[20px] lg:h-[25px] object-cover font-semibold" />
					<h1 className='mt-[9px] w-[300px] lg:w-[500px] font-bold text-[#39245f] text-[26px] lg:text-[42px] lg:leading-[50.4px] tracking-normal'>{slide.heading}</h1>

					<h3 className='mt-[8.39px] w-[250.2px] lg:w-[420.2px] text-[#030712] text-[12px] lg:text-[16px]'>We have prepared special discounts for you on grocery products. Don&#39;t miss these opportunities...</h3>

					<div className='flex flex-cols'>
					<Link href="/shop" >
						<button className='items-center bg-[#634c9f] hover:bg-violet-900 mt-[41px] pt-[8px] lg:pt-[12px] pr-[26.89px] lg:pr-[48.89px] pb-[9px] lg:pb-[13px] pl-[10px] lg:pl-[18px] rounded-lg font-bold text-[#ffffff] text-[12px] lg:text-[14px] hover:text-[#FFFFFF] transition-all duration-100 ease-in cursor-pointer'>
							Shop Now 
						</button>
						</Link>
							<div className='flex flex-col mt-[37px] pl-3 lg:pl-4'>
								<div className='flex flex-row'>
												<p className='top-0 pr-[6px] font-bold text-[#dc2626] text-[22px] lg:text-[28px]'>$27.99</p>
												<p className='pt-2 font-medium text-[#111827] text-[14.8px] lg:text-[19.8px] line-through'>$56.67</p>
								</div>
									<p className='text-[#030712] text-[10px] lg:text-[11px]'>Don&#39;t miss this limited time offer.</p>
							</div>
					</div>
			</div>
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="top-132.5 lg:top-139 left-1/2 z-30 absolute flex space-x-1 bg-[#FFFFFF] p-[7px] rounded-full -translate-x-1/2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-[7px] w-[7px] lg:h-[9px] lg:w-[9px] rounded-full ${
              index === currentIndex ? 'bg-[#634C9F]' : 'bg-[#E5E7EB]'
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Controls */}
       {/* <button
//         onClick={prevSlide}
//         className="top-1/2 left-4 absolute bg-white/60 hover:bg-white shadow-md p-2 rounded-full -translate-y-1/2"
//       >
//         <ChevronLeft className="w-6 h-6 text-[#030712]" />
//       </button>

//       <button
//         onClick={nextSlide}
//         className="top-1/2 right-4 absolute bg-white/60 hover:bg-white shadow-md p-2 rounded-full -translate-y-1/2"
//       >
//         <ChevronRight className="w-6 h-6 text-[#030712]" />
//       </button> */}
    </div>
  );
}



