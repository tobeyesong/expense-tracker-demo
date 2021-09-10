/** @format */

import React from "react";

const cardStyles = {
  balance: "border border-blue-300",
  income: "border border-green-300",
  expense: "border border-red-300",
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Loader = () => {
  const transactions = [{}, {}, {}, {}];

  return (
    <div className='max-w-6xl px-4 mx-auto sm:px-6 lg:px-8'>
      <div className='flex flex-col mt-2'>
        <div className='min-w-full overflow-hidden overflow-x-auto align-middle shadow sm:rounded-lg'>
          <table className='min-w-full divide-y divide-gray-200 animate-pulse'>
            <thead>
              <tr>
                <th className='w-1/4 h-4 px-6 py-3 bg-gray-400 '></th>
                <th className='h-4 bg-gray-400 '></th>
                <th className='h-4 bg-gray-400 '></th>
                <th className='h-4 bg-gray-400 '></th>
              </tr>
            </thead>
            <tbody className='bg-white divide-y divide-gray-200'>
              {transactions.map((transaction) => (
                <tr key={transaction._id} className='bg-white'>
                  <td className=''>
                    <div className='flex'>
                      <div
                        className='flex-shrink-0 w-5 h-5 text-gray-400 group-hover:text-gray-500'
                        aria-hidden='true'
                      />
                      <div className='w-3/5 h-4 bg-gray-400 rounded'></div>
                    </div>
                  </td>
                  <td className='px-6 py-4 text-sm text-right text-gray-500 whitespace-nowrap'>
                    <div className='hidden w-3/6 h-4 bg-gray-400 rounded sm:block '></div>
                  </td>
                  <td className='hidden px-6 py-4 text-sm text-gray-500 whitespace-nowrap md:block'>
                    <div className='hidden w-2/5 h-4 bg-gray-400 rounded sm:block '></div>
                  </td>

                  <td className='px-6 py-4 text-sm text-right text-gray-500 whitespace-nowrap'>
                    <div className='hidden w-3/5 h-4 bg-gray-400 rounded sm:block '></div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* Pagination */}
          <nav className='flex items-center justify-between px-4 py-3 bg-white border-t border-gray-200 animate-pulse sm:px-6'>
            <div className='hidden w-1/6 h-4 bg-gray-400 rounded sm:block '></div>
            <div className='flex justify-between flex-1 sm:justify-end'>
              <a
                href='#'
                className='relative inline-flex items-center w-1/6 px-4 py-2 bg-gray-400 rounded-lg'></a>
              <a
                href='#'
                className='relative inline-flex items-center w-1/6 px-4 py-2 ml-3 bg-gray-400 rounded-lg'></a>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Loader;
