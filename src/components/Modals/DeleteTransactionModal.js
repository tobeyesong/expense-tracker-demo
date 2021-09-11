/** @format */

// /** @format */

// /** @format */
import React from "react";
import { useRef, useState, useReducer, useContext } from "react";

import { Redirect, Link } from "react-router-dom";

import DashboardScreen from "../../screens/DashboardScreen";
import StandardModal from "./StandardModal";
import { GlobalContext } from "../../context/GlobalState";

const DeleteTransactionModal = ({ match, history }) => {
  //   const dispatch = useDispatch();
  const transactionId = match.params.id;
  const [open, setOpen] = useState(true);
  const cancelButtonRef = useRef(null);

  const { deleteTransaction } = useContext(GlobalContext);
  const [state, dispatch] = useReducer();
  const { success: successDelete } = deleteTransaction;

  if (!open) {
    return <Redirect to='/' />;
  }

  const deleteHandler = (id) => {
    deleteTransaction(id);
    history.push("/");
  };

  const actions = (
    <React.Fragment>
      <button
        type='button'
        className='inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm'
        onClick={() => deleteHandler(transactionId)}>
        Delete
      </button>
      <Link
        to='/'
        type='button'
        className='inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm'
        onClick={() => setOpen(false)}
        ref={cancelButtonRef}>
        Cancel
      </Link>
    </React.Fragment>
  );

  return (
    <div>
      <DashboardScreen />

      <StandardModal
        title='Delete Transaction'
        content='Are you sure you want to delete this transaction?'
        actions={actions}
      />
    </div>
  );
};

export default DeleteTransactionModal;