/** @format */

// /** @format */
import React from "react";
import { Fragment, useState, useContext, useRef } from "react";
import { Form, Field } from "react-final-form";
import { Dialog, Transition } from "@headlessui/react";
import { XCircleIcon, PlusCircleIcon } from "@heroicons/react/solid";

import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";

import expenseCategories from "../../constants/expenseCategories";
import incomeCategories from "../../constants/incomeCategories";

import DashboardScreen from "../../screens/DashboardScreen";
import formatDate from "../../utils/formatDate";

const required = (value) => (value ? undefined : "Required");
const mustBeNumber = (value) => (isNaN(value) ? "Must be a number" : undefined);

const Condition = ({ when, is, children }) => (
  <Field name={when} subscription={{ value: true }}>
    {({ input: { value } }) => (value === is ? children : null)}
  </Field>
);
const CreateTransactionModal = () => {
  const history = useHistory();
  const { addTransaction } = useContext(GlobalContext);
  const [open, setOpen] = useState(true);
  const cancelButtonRef = useRef(null);

  if (!open) {
    return <Redirect to='/' />;
  }
  const onSubmit = (values) => {
    const newTransaction = {
      id: Math.floor(Math.random() * 10000) + "",
      ...values,
      datetime: formatDate(new Date()),
    };

    addTransaction(newTransaction);
    history.push("/");
  };

  return (
    <Fragment>
      <DashboardScreen />
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as='div'
          static
          className='fixed inset-0 z-10 overflow-y-auto'
          initialFocus={cancelButtonRef}
          open={open}
          onClose={setOpen}>
          <div className='flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'>
              <Dialog.Overlay className='fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75 ' />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className='hidden sm:inline-block sm:align-middle sm:h-screen'
              aria-hidden='true'>
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'>
              <div className='inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6'>
                <h3 className='text-xl '>Add new transaction</h3>
                <hr />

                <Form
                  onSubmit={onSubmit}
                  render={({ handleSubmit, submitError }) => (
                    <form
                      className='mt-8 mb-4 space-y-6'
                      onSubmit={handleSubmit}>
                      <div className='p-4 border-2 rounded-md shadow-sm border-black-100'>
                        <Field
                          name='name'
                          component='input'
                          placeholder='Name Transaction'
                          validate={required}>
                          {({ input, meta, placeholder }) => (
                            <div>
                              <input
                                {...input}
                                placeholder={placeholder}
                                className='block w-full px-4 py-2 pl-1 mb-2 border-2 border-gray-300 rounded-md shadow text-l focus:outline-none border-gray focus:border-blue-500'
                              />
                              {meta.error && meta.touched && (
                                <div className='p-1 mt-1 mb-2 transition duration-500 ease-in-out rounded-md bg-red-50'>
                                  <div className='flex'>
                                    <div className='flex-shrink-0'>
                                      <XCircleIcon
                                        className='w-5 h-5 text-red-400'
                                        aria-hidden='true'
                                      />
                                    </div>
                                    <div className='ml-3'>
                                      <h3 className='text-sm font-medium text-red-800'>
                                        {meta.error}
                                      </h3>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          )}
                        </Field>

                        <Field
                          name='amount'
                          component='input'
                          placeholder='Enter Amount'
                          validate={(required, mustBeNumber)}>
                          {({ input, meta, placeholder }) => (
                            <div>
                              <input
                                {...input}
                                placeholder={placeholder}
                                className='block w-full px-4 py-2 pl-1 mb-2 border-2 border-gray-300 rounded-md shadow text-l focus:outline-none border-gray focus:border-blue-500'
                              />
                              {meta.error && meta.touched && (
                                <div className='p-1 mt-1 mb-2 transition duration-500 ease-in-out rounded-md bg-red-50'>
                                  <div className='flex'>
                                    <div className='flex-shrink-0'>
                                      <XCircleIcon
                                        className='w-5 h-5 text-red-400'
                                        aria-hidden='true'
                                      />
                                    </div>
                                    <div className='ml-3'>
                                      <h3 className='text-sm font-medium text-red-800'>
                                        {meta.error}
                                      </h3>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          )}
                        </Field>

                        <Field
                          name='category'
                          component='input'
                          validate={required}>
                          {({ meta }) => (
                            <div className='p-1 mt-1 '>
                              <div className='cursor-pointer'>
                                <label className='pr-3 '>
                                  <Field
                                    name='category'
                                    component='input'
                                    type='radio'
                                    value='income'
                                  />{" "}
                                  Income
                                </label>
                                <label>
                                  <Field
                                    name='category'
                                    component='input'
                                    type='radio'
                                    value='expense'
                                  />{" "}
                                  Expense
                                </label>
                              </div>

                              {meta.error && meta.touched && (
                                <div className='p-1 mt-1 mb-2 transition duration-500 ease-in-out rounded-md bg-red-50'>
                                  <div className='flex'>
                                    <div className='flex-shrink-0'>
                                      <XCircleIcon
                                        className='w-5 h-5 text-red-400'
                                        aria-hidden='true'
                                      />
                                    </div>
                                    <div className='ml-3'>
                                      <h3 className='text-sm font-medium text-red-800'>
                                        {meta.error}
                                      </h3>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          )}
                        </Field>

                        <Condition when='category' is='income'>
                          <Field
                            name='incomeType'
                            component='select'
                            className='p-1 pl-2 bg-green-100 rounded-lg'
                            name='type'
                            validate={required}>
                            <option />$
                            {incomeCategories.map((c) => (
                              <option
                                key={c.type}
                                value={c.type}
                                className='rounded-md'>
                                {c.type}
                              </option>
                            ))}
                          </Field>
                        </Condition>
                        <Condition when='category' is='expense'>
                          <Field
                            name='expenseType'
                            name='type'
                            component='select'
                            className='p-1 pl-2 bg-red-100 rounded-lg '
                            validate={required}>
                            <option />$
                            {expenseCategories.map((c) => (
                              <option key={c.type} value={c.type}>
                                {c.type}
                              </option>
                            ))}
                          </Field>
                        </Condition>
                        {submitError && (
                          <div className='p-1 mt-1 mb-2 transition duration-500 ease-in-out rounded-md bg-red-50'>
                            <div className='flex'>
                              <div className='flex-shrink-0'>
                                <XCircleIcon
                                  className='w-5 h-5 text-red-400'
                                  aria-hidden='true'
                                />
                              </div>
                              <div className='ml-3'>
                                <h3 className='text-sm font-medium text-red-800'>
                                  {submitError}
                                </h3>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      <div>
                        <button
                          type='submit'
                          className='relative flex justify-center w-full px-4 py-2 text-lg text-white bg-indigo-600 border border-transparent rounded-md shadow-lg font-regular group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                          <span className='absolute inset-y-0 left-0 flex items-center pl-3'>
                            <PlusCircleIcon
                              className='w-5 h-5 text-indigo-500 group-hover:text-indigo-400'
                              aria-hidden='true'
                            />
                          </span>
                          Add Transaction
                        </button>
                      </div>
                    </form>
                  )}
                />
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </Fragment>
  );
};

export default CreateTransactionModal;
