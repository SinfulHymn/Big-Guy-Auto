import Image from 'next/image';

const Banner = ({ title }) => {
  return (
    <div className="relative h-32 sm:h-48  w-full">
      <Image
        src={'/images/banner.jpg'}
        alt="Banner Image"
        fill
        className="absolute object-cover w-full h-full"
      ></Image>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">\
        
        <h1 className="text-2xl sm:text-5xl font-light text-main-red bg-white bg-opacity-80 p-4 ">{title}</h1>
        
      </div>
    </div>
  );
};

export default Banner;
