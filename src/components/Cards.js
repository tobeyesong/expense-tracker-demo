/** @format */

// /** @format */

import React, { useContext } from "react";

import { numberWithCommas } from "../utils/format";
import { GlobalContext } from "../context/GlobalState";
// import useTransactions from "../useTransactions";

import {
  ScaleIcon,
  CurrencyDollarIcon,
  TrendingDownIcon,
} from "@heroicons/react/outline";
const cardStyles = {
  balance: "border border-blue-300",
  income: "border border-green-300",
  expense: "border border-red-300",
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Cards = () => {
  const { transactions } = useContext(GlobalContext);

  const expenseTransactions = transactions.filter(
    (t) => t.category === "expense"
  );
  const incomeTransactions = transactions.filter(
    (t) => t.category === "income"
  );

  // const { total, chartData } = useTransactions(title);

  //BALANCE
  const balance = transactions
    .reduce(
      (acc, currVal) =>
        currVal.category === "expense"
          ? acc - currVal.amount
          : acc + currVal.amount,
      0
    )
    .toFixed(2);
  //INCOME
  const income = incomeTransactions
    .reduce((acc, currVal) => (acc += +currVal.amount), 0)
    .toFixed(2);

  //EXPENSE
  const expense = expenseTransactions
    .reduce((acc, currVal) => (acc += +currVal.amount), 0)
    .toFixed(2);

  const cards = [
    {
      name: "Balance",
      href: "#",
      icon: ScaleIcon,
      amount: balance,
      style: "balance",
    },
    {
      name: "Income",
      href: "#",
      icon: CurrencyDollarIcon,
      amount: income,
      style: "income",
    },
    {
      name: "Expense",
      href: "#",
      icon: TrendingDownIcon,
      amount: expense,
      style: "expense",
    },
  ];

  return (
    <div className='mt-8'>
      <div className='max-w-6xl px-4 mx-auto sm:px-6 lg:px-8'>
        <h2 className='text-lg font-medium leading-6 text-gray-900'>
          Overview
        </h2>
        <>
          <div className='p-4 bg-gray-700 rounded-lg'>
            <div className='grid grid-cols-1 gap-5 mt-2 text-gray-50 sm:grid-cols-2 lg:grid-cols-3'>
              {/* Card */}
              {cards.map((card) => (
                <div
                  key={card.name}
                  className='overflow-hidden transition duration-200 ease-in transform rounded-lg hover:bg-gray-600 hover:-translate-y-2 hover:shadow-lg'>
                  <div className={classNames(cardStyles[card.style], "p-3")}>
                    <div className='flex items-center '>
                      <div className='flex-shrink-0'>
                        <card.icon
                          className='w-6 h-6 text-gray-400'
                          aria-hidden='true'
                        />
                      </div>
                      <div className='flex-1 w-0 ml-5'>
                        <dl>
                          <dt className='text-sm font-medium truncate '>
                            {card.name}
                          </dt>
                          <dd>
                            <div className='text-lg font-medium text-gray-50'>
                              $ {numberWithCommas(card.amount)}
                            </div>
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                  <div className='px-5 py-3 bg-gray-600 shadow-md'>
                    <div className='text-sm'>
                      <a
                        href={card.href}
                        className='font-mediumover:text-cyan-900'>
                        View all
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default Cards;
