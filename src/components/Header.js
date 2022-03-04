/** @format */

import React from "react";

import { Link } from "react-router-dom";
import { CheckCircleIcon, OfficeBuildingIcon } from "@heroicons/react/solid";

export const Header = () => {
  return (
    <main className='relative z-0 flex-1 overflow-y-auto'>
      {/* Page header */}
      <div className='bg-white shadow'>
        <div className='px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8'>
          <div className='py-6 md:flex md:items-center md:justify-between lg:border-t lg:border-gray-200'>
            <div className='flex-1 min-w-0'>
              {/* Profile */}
              <div className='flex items-center'>
                <img
                  className='hidden w-16 h-16 rounded-full sm:block'
                  src='https://images.unsplash.com/photo-1621784564114-6eea05b89863?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.6&w=256&h=256&q=80'
                  alt=''
                />
                <div>
                  <div className='flex items-center'>
                    <img
                      className='w-16 h-16 rounded-full sm:hidden'
                      src='https://images.unsplash.com/photo-1621784564114-6eea05b89863?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.6&w=256&h=256&q=80'
                      alt=''
                    />
                    <h1 className='ml-3 text-2xl leading-7 text-gray-900 sm:leading-9 sm:truncate'>
                      Good morning, Emma Bridger
                    </h1>
                  </div>
                  <dl className='flex flex-col mt-6 sm:ml-3 sm:mt-1 sm:flex-row sm:flex-wrap'>
                    <dt className='sr-only'>Company</dt>
                    <dd className='flex items-center text-sm font-medium text-gray-500 capitalize sm:mr-6'>
                      <OfficeBuildingIcon
                        className='flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400'
                        aria-hidden='true'
                      />
                      Los Angeles
                    </dd>
                    <dt className='sr-only'>Account status</dt>
                    <dd className='flex items-center mt-3 text-sm font-medium text-gray-500 capitalize sm:mr-6 sm:mt-0'>
                      <CheckCircleIcon
                        className='flex-shrink-0 mr-1.5 h-5 w-5 text-green-400'
                        aria-hidden='true'
                      />
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div className='flex mt-6 space-x-3 md:mt-0 md:ml-4'>
              <Link
                to='/transactions/add'
                type='button'
                className='inline-flex items-center px-4 py-2 text-sm font-medium text-white transition duration-200 ease-in bg-blue-600 border border-transparent rounded-md shadow hover:shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'>
                Add Transaction
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
