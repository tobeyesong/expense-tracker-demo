/** @format */
/** @format */

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";

import { numberWithCommas } from "../utils/format";

import {
  CashIcon,
  TrashIcon,
  ChevronRightIcon,
} from "@heroicons/react/outline";

const categoryStyles = {
  expense: "border-r-4 pl-2 border-l-4 border-red-600",
  income: "border-r-4 pl-2 mr-4 border-l-4 border-green-600",
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const TransactionList = () => {
  const { transactions, totalTransactionCount } = useContext(GlobalContext);

  return (
    <div className='mt-8'>
      <h2 className='max-w-6xl px-4 mx-auto mt-8 text-lg font-medium leading-6 text-gray-900 sm:px-6 lg:px-8'>
        Recent activity
      </h2>

      <>
        {/* TRASACTION LIST MOBILE ONLY */}
        <div className='shadow sm:hidden'>
          <ul className='mt-2 overflow-hidden divide-y divide-gray-200 shadow sm:hidden'>
            {transactions.map((transaction) => (
              <li key={transaction.id}>
                <a
                  href={transaction.href}
                  className='block px-4 py-4 bg-white hover:bg-gray-50'>
                  <span className='flex items-center space-x-4'>
                    <span className='flex flex-1 space-x-2 truncate'>
                      <CashIcon
                        className='flex-shrink-0 w-5 h-5 text-gray-400'
                        aria-hidden='true'
                      />
                      <span className='flex flex-col text-sm text-gray-500 truncate'>
                        <span className='truncate'>{transaction.name}</span>
                        <span>
                          <span className='font-medium text-gray-900'>
                            ${numberWithCommas(transaction.amount)}
                          </span>
                          {transaction.currency}
                        </span>
                        <time dateTime={transaction.datetime}>
                          {transaction.datetime}
                        </time>
                      </span>
                    </span>
                    <td className='px-6 py-4 text-sm text-gray-500 whitespace-nowrap md:block'>
                      <span className='inline-flex items-center p-1 font-medium '>
                        <Link to={`/transactions/${transaction.id}/delete`}>
                          <TrashIcon
                            className='w-5 h-5 rounded-md hover:bg-red-600 hover:text-gray-100'
                            aria-hidden='true'
                          />{" "}
                        </Link>
                      </span>
                    </td>
                    <ChevronRightIcon
                      className='flex-shrink-0 w-5 h-5 text-gray-400'
                      aria-hidden='true'
                    />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* //TRANSACTION TABLE SMALL AND UP*/}
        <div className='hidden sm:block'>
          <div className='max-w-6xl px-4 mx-auto sm:px-6 lg:px-8'>
            <div className='flex flex-col mt-2'>
              <div className='min-w-full overflow-hidden overflow-x-auto align-middle shadow sm:rounded-lg'>
                <table className='min-w-full divide-y divide-gray-200'>
                  <thead>
                    <tr>
                      <th className='px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase bg-gray-50'>
                        Transaction
                      </th>
                      <th className='px-6 py-3 text-xs font-medium tracking-wider text-right text-gray-500 uppercase bg-gray-50'>
                        Amount
                      </th>
                      <th className='hidden px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase bg-gray-50 md:block'>
                        Action
                      </th>
                      <th className='px-6 py-3 text-xs font-medium tracking-wider text-right text-gray-500 uppercase bg-gray-50'>
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody className='bg-white divide-y divide-gray-200'>
                    {transactions.map((transaction) => (
                      <tr key={transaction.id} className='bg-white'>
                        <td className='w-full px-6 py-4 text-sm text-gray-900 max-w-0 whitespace-nowrap'>
                          <div
                            className={classNames(
                              categoryStyles[transaction.category],
                              "bg-white",
                              "flex"
                            )}>
                            <a
                              href={transaction.href}
                              className='inline-flex space-x-2 text-sm truncate group'>
                              <CashIcon
                                className='flex-shrink-0 w-5 h-5 text-gray-400 group-hover:text-gray-500'
                                aria-hidden='true'
                              />
                              <p className='text-gray-500 truncate group-hover:text-gray-900'>
                                {transaction.name}
                              </p>
                            </a>
                          </div>
                        </td>
                        <td className='px-6 py-4 text-sm text-right text-gray-500 whitespace-nowrap'>
                          <span className='font-medium text-gray-900'>
                            ${numberWithCommas(transaction.amount)}
                          </span>
                          {transaction.currency}
                        </td>
                        <td className='hidden px-6 py-4 text-sm text-gray-500 whitespace-nowrap md:block'>
                          <span className='inline-flex items-center p-1 font-medium '>
                            <Link to={`/transactions/${transaction.id}/delete`}>
                              <TrashIcon
                                className='w-5 h-5 rounded-md hover:bg-red-600 hover:text-gray-100'
                                aria-hidden='true'
                              />{" "}
                            </Link>
                          </span>
                        </td>

                        <td className='px-6 py-4 text-sm text-right text-gray-500 whitespace-nowrap'>
                          <time dateTime={transaction.datetime}>
                            {transaction.datetime}
                          </time>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {/* Pagination */}
                <nav
                  className='flex items-center justify-between px-4 py-3 bg-white border-t border-gray-200 sm:px-6'
                  aria-label='Pagination'>
                  <div className='hidden sm:block'>
                    <p className='text-sm text-gray-700'>
                      Showing{" "}
                      <span className='font-medium'>{`${totalTransactionCount}`}</span>{" "}
                      total result(s)
                    </p>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default TransactionList;
