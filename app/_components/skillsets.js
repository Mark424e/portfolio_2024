'use client'

import React, { useEffect, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';

const LOGO_URLS = [
  '/logo1.svg',
  '/logo2.svg',
  '/logo3.svg',
  '/logo10.svg',
  '/logo4.svg',
  '/logo12.svg',
  '/logo9.svg',
  '/logo11.svg',
  '/logo5.svg',
  '/logo6.svg',
  '/logo7.svg',
  '/logo8.svg',
];

const EmblaCarousel = ({ options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options || {}, [
    AutoScroll({
      playOnInit: true,
      speed: 1,
      stopOnInteraction: false,
    })
  ]);
  const isPlayingRef = useRef(false);

  useEffect(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll;
    if (!autoScroll) return;

    const handleAutoPlayChange = () => {
      isPlayingRef.current = autoScroll.isPlaying();
    };

    emblaApi
      .on('autoScroll:play', handleAutoPlayChange)
      .on('autoScroll:stop', handleAutoPlayChange)
      .on('reInit', handleAutoPlayChange);

    return () => {
      emblaApi.off('autoScroll:play', handleAutoPlayChange);
      emblaApi.off('autoScroll:stop', handleAutoPlayChange);
      emblaApi.off('reInit', handleAutoPlayChange);
    };
  }, [emblaApi]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {LOGO_URLS.map((logoUrl, index) => (
            <div className="embla__slide" key={index}>
              <img src={logoUrl} alt={`Logo ${index + 1}`} className="embla__slide__number" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;