/** @format */

import React from "react";

import { Header } from "../components/Header";

import Cards from "../components/Cards";
import TransactionList from "../components/TransactionList";

const Dashboard = () => {
  return (
    <div className='mt-8'>
      <Header />
      <Cards />
      <TransactionList />
    </div>
  );
};

export default Dashboard;
