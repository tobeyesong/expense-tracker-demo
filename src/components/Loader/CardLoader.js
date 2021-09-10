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
  const cards = [
    {
      name: "Balance",
      style: "balance",
    },
    {
      name: "Income",
      style: "income",
    },
    {
      name: "Expense",
      style: "expense",
    },
  ];

  return (
    <div className='max-w-6xl px-4 mx-auto sm:px-6 lg:px-8'>
      <div className='grid grid-cols-1 gap-5 mt-2 sm:grid-cols-2 lg:grid-cols-3'>
        {/* Card */}
        {cards.map((card) => (
          <div
            key={card.name}
            className='overflow-hidden transition duration-200 ease-in rounded-lg shadow-lg'>
            <div
              className={classNames(
                cardStyles[card.style],
                "p-3 w-full max-w-sm mx-auto border animate-pulse"
              )}>
              <div className='flex items-center space-x-4 animate-pulse'>
                <div className='w-12 h-12 bg-gray-400 rounded-full'></div>
                <div className='flex-1 py-1 space-y-4'>
                  <div className='w-3/4 h-4 bg-gray-400 rounded'></div>
                  <div className='space-y-2'>
                    <div className='h-4 bg-gray-400 rounded'></div>
                    <div className='w-1/4 h-4 bg-gray-400 rounded'></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loader;
