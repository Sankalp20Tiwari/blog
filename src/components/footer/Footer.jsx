import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <section className="relative overflow-hidden py-10 bg-gradient-to-r from-gray-900 to-gray ">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 inline-flex items-center">
                <h1 className='text-white text-3xl text-center'>.blog</h1>
              </div>
              <div>
                <p className="text-sm text-gray-400">
                  &copy; Copyright 2024. All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
          {/* Uncomment and update sections as needed */}
          {/* <div className="w-full p-6 md:w-1/2 lg:w-2/12"> ... </div> */}
        </div>
      </div>
    </section>
  );
}

export default Footer;
