/** @format */

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DashboardScreen from "./screens/DashboardScreen";
import TrendScreen from "./screens/TrendScreen";

import history from "./history";
import AddTransactionModal from "./components/Modals/AddTransactionModal";
import DeleteTransactionModal from "./components/Modals/DeleteTransactionModal";
import EditTransactionModal from "./components/Modals/EditTransactionModal";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Router history={history}>
        <Switch>
          <Route exact path='/' component={DashboardScreen} />
          <Route path='/transactions/trends' component={TrendScreen} />
          <Route path='/transactions/add' component={AddTransactionModal} />
          <Route
            path='/transactions/:id/delete'
            component={DeleteTransactionModal}
          />
          <Route
            path='/transactions/:id/edit'
            component={EditTransactionModal}
          />{" "}
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
