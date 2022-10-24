import React from "react";
import { GoTools } from "react-icons/go";
import Welcome from "./Welcome";
import OurServices from "./OurServices";

const Index = () => {
    return (
        <div className='py-5 sm:py-10'>
            <div className='container mx-auto '>
                <Welcome />
                <OurServices />


            </div>
        </div>

    );
}

export default Index;
