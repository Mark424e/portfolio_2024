import Image from 'next/image';
import Skillsets from './skillsets';

const OPTIONS = { loop: true };

export const Hero = () => {
  return (
    <section>
      <div className="container mx-auto pt-56">
        <div className='grid md:grid-cols-2 gap-8'>
          <div className='text-center md:text-start'>
            <h1 className="text-7xl md:text-5xl xl:text-7xl font-bold leading-none">
              Hi, I'm
              <span className="text-primary">
              &nbsp; Mark
              </span>
            </h1>
            <div>
              <h1 className='text-6xl md:text-5xl xl:text-7xl font-bold leading-none'>Creative Frontend</h1>
              <h1 className='text-6xl md:text-5xl xl:text-7xl font-bold leading-none'>Developer</h1>
            </div>
            <div className='mt-10 space-y-10'>
              <p className='text-xl'>
                I develop responsive, user-friendly websites with a focus on clean, modern web design.
              </p>
              <div>
                <Skillsets options={OPTIONS} />
              </div>
            </div>
          </div>
          <div className='flex justify-center'>
            <Image
              className="floatingImage max-h-[500px]"
              src="/hero-image-mark.webp"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>
    </section>
  );
};