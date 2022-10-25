import React from "react";
import Image from 'next/future/image';


type BannerProps = {
    image: string;
    title: string;
    subtitle: string;
};

const Banner = ({ image, title, subtitle }: BannerProps) => {
    return (
        <div>
            {/* <Image src={image} alt={title} /> */}
        </div>
    );
}

export default Banner;