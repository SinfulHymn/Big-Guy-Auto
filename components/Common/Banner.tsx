import React from "react";
import Image from 'next/future/image';


type BannerProps = {
    image: string;
    title: string;
    subtitle: string;
};

const Banner = ({ image, title, subtitle }: BannerProps) => {
    return (
        <div className=" w-full h-[300px]">

            <div className="h-[400px] w-full">
                <Image
                    
                    alt="big guy"
                    src={image}
                    fill
                    
                    quality={100}
                />
            </div>
        </div>
    );
}

export default Banner;