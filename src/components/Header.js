/** @format */

import React from "react";

import { Link } from "react-router-dom";
import { PlusIcon } from "@heroicons/react/solid";

import { numberWithCommas } from "../utils/format";
const user = {
  name: "Emma Bridger",
  credit: "745 Credit Score",

  imageUrl:
    " https://images.unsplash.com/photo-1630672434048-7af9ce04f382?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

export const Header = () => {
  return (
    <main className='relative z-0 flex-1 overflow-y-auto'>
      {/* Page header */}
      <div className='bg-white'>
        <div className='px-4 mx-2 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8 '>
          <div className='overflow-hidden bg-white rounded-lg shadow-xl'>
            <h2 className='sr-only' id='profile-overview-title'>
              Profile Overview
            </h2>
            <div className='p-6 bg-white '>
              <div className='sm:flex sm:items-center sm:justify-between '>
                <div className='sm:flex sm:space-x-5'>
                  <div className='flex-shrink-0'>
                    <img
                      className='w-20 h-20 mx-auto rounded-full'
                      src={user.imageUrl}
                      alt=''
                    />
                  </div>
                  <div className='mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left'>
                    <p className='text-sm font-medium text-gray-600'>
                      Welcome back,
                    </p>
                    <p className='text-xl text-gray-900 sm:text-2xl'>
                      {user.name}
                    </p>

                    <span className='inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800'>
                      {user.credit}
                    </span>
                  </div>
                </div>

                <div className='flex justify-center mt-5 sm:mt-0'>
                  <Link
                    to='/transactions/add'
                    type='button'
                    className='inline-flex items-center px-4 py-2 text-sm font-medium text-white transition duration-200 ease-in bg-blue-600 border border-transparent rounded-md shadow hover:shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'>
                    <PlusIcon className='w-4 h-4 mr-2' /> Add Transaction
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
