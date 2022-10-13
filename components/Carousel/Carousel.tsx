import React, { useState, useEffect, useCallback, useRef } from "react";
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { imagesByIndex } from "./Media";
import Image from "next/image";

const EmblaCarousel = ({ slides, options = {align: "start", loop: true } }) => {
    const autoplay = useRef(
      Autoplay(
        { delay: 6000, stopOnInteraction: false },
        (emblaRoot) => emblaRoot.parentElement
      )
    );
  
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [autoplay.current]);
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  
    const scrollNext = useCallback(() => {
      if (!emblaApi) return;
      emblaApi.scrollNext();
      autoplay.current.reset();
    }, [emblaApi]);
  
    const scrollPrev = useCallback(() => {
      if (!emblaApi) return;
      emblaApi.scrollPrev();
      autoplay.current.reset();
    }, [emblaApi]);
  
    const onSelect = useCallback(() => {
      if (!emblaApi) return;
      setPrevBtnEnabled(emblaApi.canScrollPrev());
      setNextBtnEnabled(emblaApi.canScrollNext());
    }, [emblaApi]);
  
    useEffect(() => {
      if (!emblaApi) return;
      onSelect();
      emblaApi.on("select", onSelect);
    }, [emblaApi, onSelect]);
  
    return (
      <div className="relative max-w-full mx-auto">
        <div className="embla__viewport overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex select-none items-center">
            {slides.map((index) => (
              <div className="relative min-w-full" key={index}>
                <div className="block h-[620px] overflow-hidden">
                  <Image
                    className=""
                    src={imagesByIndex(index)}
                    alt="Big Guy Auto Body"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    
                    
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    );
  };

export default EmblaCarousel;

