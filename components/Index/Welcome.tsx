import React from 'react';

const Welcome = () => {
  return (
    <div className=" space-y-10 p-6 ">
      <div>
        <div className=" border-l-2 border-main-red ">
          <div className="py-1 mx-6 ">
            <p className="text-xl sm:text-3xl font-light text-gray-800">
              San Fernando Auto Collision Repair since 2001
            </p>
            <p className="text-md sm:text-xl text-main-red font-medium pr-4">
              Collision repair service in the City of San Fernando.
            </p>
          </div>
        </div>
        <p className=" mb-3 font-light text-gray-800 dark:text-gray-400 leading-8 mx-7 text-sm">
        We are a family-owned auto collision repair shop located in the city of San Fernando. With over 15 years of experience in the field, we have built a strong reputation and have worked with clients big and small, including Budweiser, Penske, and Public Works. We are proud to serve the city of Los Angeles and the Los Angeles Sheriff Department. We are dedicated to providing the best possible service and look forward to doing business with you.
        </p>
      </div>

      <div className="grid md:grid-cols-2">
        <div>
          <div className=" border-l-2 border-main-red ">
            <div className="py-1 mx-6 ">
              <p className="text-xl sm:text-3xl font-light text-gray-800">
                What general services do you provide?
              </p>
              <p className="text-md sm:text-xl text-main-red font-medium pr-4">
                Collision repair service in the City of San Fernando.
              </p>
            </div>
          </div>
          <p className=" mb-3 font-light text-gray-800 dark:text-gray-400 leading-8 mx-7 text-sm">
            
            At the moment we provide general automotive repair which includes
            collision repair, paint refinishing, auto detailing, upholstery,
            part refurbishing and custom jobs. We take all clients big or small,
            everyone is welcomed to receive a quote. Please don&apos;t hesistate to
            send an email for any questions.
          </p>
        </div>
        <div>
          <div className=" border-l-2 border-main-red ">
            <div className="py-1 mx-6 ">
              <p className="text-xl sm:text-3xl font-light text-gray-800">
                Why you should choose us?
              </p>
              <p className="text-md sm:text-xl text-main-red font-medium pr-4">
                Collision repair service in the City of San Fernando.
              </p>
            </div>
          </div>
          <p className=" mb-3 font-light text-gray-800 dark:text-gray-400 leading-8 mx-7 text-sm">
            
            We&apos;tve been providing automotive repair services to the local
            community and the city LA for over 15 years. We know the trade, and
            always keep a higher standard of quality control because of our
            various contracts with Budweiser, Penske, Public works, and LA
            sheriff. We only strive to provide the best services and materials
            for all customers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
