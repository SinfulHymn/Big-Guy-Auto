import React from 'react';
import Banner from '@components/Common/Banner';
import EmailComponent from './EmailComponent';

const Contact = () => {
  return (
    <>
      <Banner title="Contact Us" />
      <div className="py-5 sm:py-10">
        <div className="container mx-auto grid grid-cols-12 gap-5">
          <div className="col-span-9 space-y-6">

            <div className="text-xl font-light">
              Leave a Message
              <hr className="my-4 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
            </div>
            
            <div>
            <p className=' text-lg font-normal'>
              Get in touch with us!
            </p>
            </div>

            <div>
              <EmailComponent />
            </div>
          
          </div>
          <div className="col-span-3">
            <div className="text-xl font-light">Company Info</div>
            <hr className="my-4 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <div>
              <p>
                If you are in the middle of something and you don’t want to miss
                that important call.
              </p>
              <p className="flex">
                Email: <a className="text-main-red">support@bigguyauto.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
