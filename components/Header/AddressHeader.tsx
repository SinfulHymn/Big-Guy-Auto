import React from "react";
import { AiFillEnvironment,AiFillGoogleSquare,AiFillFacebook,AiFillTwitterSquare } from 'react-icons/ai';

const AddressHeader = () => {
    return (
        <div className="py-1 bg-main">
            <div className="container mx-auto px-4 text-sm font-medium text-white">

                <div className="flex items-center justify-between">

                
                <div className="py-2 flex justify-center items-center">
                    <AiFillEnvironment className="inline-block mr-2 text-red-500 text-lg flex-initial " /> <span className="hover:text-main-red">
                        1517 Truman St, San Fernando, CA 91340
                        </span> 

                </div>

                <div className=" flex justify-center items-center">
                    <AiFillGoogleSquare className="inline-block mx-2 text-red-500 text-4xl flex-initial rounded-3xl" /> 
                    <AiFillTwitterSquare className="inline-block mx-2 text-red-500 text-4xl flex-initial rounded-3xl"/>
                    <AiFillFacebook className="inline-block mx-2 text-red-500 text-4xl flex-initial rounded-3xl"/>
                </div>

                </div>

            </div>

        </div>
    );
}

export default AddressHeader;