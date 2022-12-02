import React from 'react';
import Banner from '@components/Common/Banner';

const About = () => {
  return (
    <>
      <Banner title="About Us" />
      <div className="py-5 sm:py-10 ">
        <div className="container mx-auto flex flex-col">
          <div className=" font-normal text-lg ">About Us</div>
          <hr className="my-4 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
          <div className="space-y-8">
            <div className=' space-y-1'>
              <p className="text-2xl font-normal text-gray-800">Our mission</p>
              <p className="text-main-red font-medium text-xl">
                Collision repair service in the City of San Fernando.
              </p>
              <p className=" leading-loose text-gray-800">
                Big Guy Auto Body strives to always assure great customer
                service, along with building strong and reliable trust in the
                work we accomplish for you. We always aim to thoroughly meet the
                needs of what you want as our customer. Big Guy Auto Body has
                been in business since 1998. With our years of experience, we
                work towards genuine quality. In our years of experience, we
                have worked with many big named companies and brands, such as
                Los Angeles County Sheriff, Valley Crest, Anheuser Bush, Penske
                Truck Leasing, Budweiser, and MT Towing Company. We offer only
                the best craftsmanship and materials to get the job done. As
                dedicated and committed as we are towards are work, we always
                seek to put our customers first. We assure the most affordable
                price for the most outstanding quality work. We, as Big Guy Auto
                Body, proudly serves the San Fernando Area working towards
                quality assurance for our customers and for our community.{' '}
              </p>
            </div>
            <div className=' space-y-1'>
              <p className="text-2xl font-normal text-gray-800">About us</p>
              <p className="text-main-red font-medium text-xl">
                Family owned Auto collision shop.
              </p>
              <p className=" leading-loose text-gray-800">
                The business first started with a passionate man in autos and
                the ability to repair them. He decided to open shop in 1998 due
                to working in the industry for his entire life before that. He
                struggled to get started due to the small space he had, but his
                drive to strive made him work towards his goal. In 2001 he
                decided to relocate to the current location due to the
                overwhelming clientel he was receiving. He received overwhelming
                support and always work towards growing. Since then Big guy auto
                body has only been striving.{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
