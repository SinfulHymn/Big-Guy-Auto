import React from "react";
import { AiFillEnvironment,AiFillGoogleSquare,AiFillFacebook,AiFillTwitterSquare } from 'react-icons/ai';
import { FaYelp } from 'react-icons/fa';

const AddressHeader = () => {
    return (
        <div className="py-0 sm:py-1 bg-main">
            <div className="container mx-auto px-4 text-sm font-medium text-white">

                <div className="flex items-center justify-between">

                
                <div className="py- flex justify-center items-center">
                    <a href="" className="py-2 flex justify-center items-center">

                    <AiFillEnvironment className="inline-block mr-2 text-main-red text-xl flex-initial " /> <span className="hover:text-main-red">
                        1517 Truman St, San Fernando, CA 91340
                        </span> 
                    </a>

                </div>

                <div className=" flex justify-center items-center">
                    <a href="">
                    <AiFillGoogleSquare className="inline-block mx-2 text-main-red text-4xl flex-initial rounded-3xl" /> 
                    </a>
                    <a href="">
                    <FaYelp className="inline-block mx-2 text-main-red text-3xl flex-initial rounded-3xl" /> 
                    </a>
                    <a href="">
                    <AiFillFacebook className="inline-block mx-2 text-main-red text-4xl flex-initial rounded-3xl" /> 
                    </a>
                    
                </div>

                </div>

            </div>

        </div>
    );
}

export default AddressHeader;