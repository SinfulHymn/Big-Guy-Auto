import React, { useState, useEffect, useCallback, useRef } from "react";
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { imagesByIndex } from "./Media";
import Image from 'next/future/image';

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
      <div className="relative block w-full h-auto">
        <div className="block overflow-hidden w-full h-full" ref={emblaRef}>
          <div className="flex flex-row select-none items-center w-full h-full max-h-[620px] " >
            {slides.map((index) => (
              <div className="block relative min-w-full h-full overflow-hidden object-cover " key={index}>
                <div className="w-full h-auto">
                <Image
                    className="   object-cover w-full h-auto"
                    src={imagesByIndex(index)}
                    alt="Big Guy Auto Body"
                   sizes="100vw"  
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

