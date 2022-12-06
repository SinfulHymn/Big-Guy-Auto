import React from 'react';
import Banner from '@components/Common/Banner';

const About = () => {
  return (
    <>
      <Banner title="About Us" />
      <div className="p-6 sm:py-10 ">
        <div className="container mx-auto flex flex-col">
          <div className=" font-normal text-lg ">About Us</div>
          <hr className="my-4 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
          <div className="space-y-8">
            <div className=" space-y-1">
              <p className="text-2xl font-normal text-gray-800">Our mission</p>
              <p className="text-main-red font-medium text-xl">
                Collision repair service in the City of San Fernando.
              </p>
              <div className='space-y-4'>
                <p className=" leading-loose text-gray-800">
                At our family-owned auto collision repair shop, we are dedicated
                to providing the highest quality services to our clients. We are
                committed to providing the highest quality repair to restore
                vehicles to their pre-accident condition, and to providing
                exceptional customer service throughout the repair process. We
                strive to be a trusted partner for individuals and companies in
                the city of San Fernando and beyond, and to be known for our
                expertise, professionalism, and dedication to excellence. </p>
                <p className=" leading-loose text-gray-800">
                In addition to our repair services, we are also dedicated to
                being a responsible and active member of the community. We are
                proud to serve the city of Los Angeles and the Los Angeles
                Sheriff Department, and to support local organizations and
                initiatives. </p>
                <p className=" leading-loose text-gray-800">
                Overall, our mission is to be the premier auto collision repair
                shop in the area, known for our commitment to quality, customer
                satisfaction, and community involvement. </p>
              </div>
            </div>
            <div className=" space-y-1">
              <p className="text-2xl font-normal text-gray-800">About us</p>
              <p className="text-main-red font-medium text-xl">
                Family owned Auto collision shop.
              </p>
              <div className='space-y-4'>
                <p className=" leading-loose text-gray-800">
                  At our family-owned auto collision repair shop in the city of
                  San Fernando, we have been providing high-quality services for
                  over 15 years. Our team of experienced technicians is
                  dedicated to restoring your vehicle to its pre-accident
                  condition, using the latest tools and techniques in the
                  industry.
                </p>

                <p className=" leading-loose text-gray-800">
                  We have built a solid reputation by working with clients of
                  all sizes, including well-known companies such as Budweiser,
                  Penske, and Public Works. We are also proud to serve the city
                  of Los Angeles and the Los Angeles Sheriff Department,
                  providing them with reliable and timely repair services.
                </p>

                <p className=" leading-loose text-gray-800">
                  In addition to our expertise, we are committed to providing
                  exceptional customer service. We understand that being in an
                  accident can be a stressful and overwhelming experience, and
                  we do our best to make the repair process as smooth and
                  hassle-free as possible. We offer free estimates, transparent
                  pricing, and regular updates on the progress of your repair.
                </p>

                <p className=" leading-loose text-gray-800">
                  We are confident in our ability to deliver the best possible
                  service, and we look forward to the opportunity to work with
                  you. Whether you need minor repairs or major collision work,
                  we are ready to help. Contact us today to schedule an
                  appointment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
