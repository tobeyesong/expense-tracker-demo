/** @format */

import React from "react";
import DashboardScreen from "./screens/DashboardScreen";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AddTransactionModal from "./components/Modals/AddTransactionModal";
import DeleteTransactionModal from "./components/Modals/DeleteTransactionModal";

import { GlobalProvider } from "./context/GlobalState";

const App = () => {
  return (
    <GlobalProvider>
      <Router>
        <Routes>
          <Route path='/' element={<DashboardScreen />} />
          <Route path='/transactions/add' element={<AddTransactionModal />} />
          <Route
            path='/transactions/:id/delete'
            element={<DeleteTransactionModal />}
          />
        </Routes>
      </Router>
    </GlobalProvider>
  );
};

export default App;
