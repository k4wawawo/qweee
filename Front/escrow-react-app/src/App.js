import React,{useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { AuthState } from './context/authContext/AuthContext'
import Home from './pages';
import './App.css';
import Signin from './pages/signin';
import Signup from './components/Singup';
import PrivateAdminRoute from './utils/PrivateAdminRoute'
import PrivateUserRoute from './utils/PrivateUserRoute'
import Profile from './pages/profile'
import Admin from './pages/admin'
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import AdminTransactions from './pages/adminTransactions';
import AdminUsers from './pages/adminUsers';
import { UsersState } from './context/usersContext/UsersContext';
import { TransactionsState } from './context/transactionsContext/TransactionsContext';
import TransactionCreator from './pages/transaction';
import TransactionDetails from './pages/transactionDetails';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
      setIsOpen(!isOpen);
  };
  return (
    <TransactionsState>
      <AuthState>
        <UsersState>
          <Router>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} /> 
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/signin" component={Signin} exact />
              <Route path="/signup" component={Signup} exact />
              <PrivateUserRoute path="/profile" component={Profile} exact/>
              <PrivateUserRoute path="/transaction" component={TransactionCreator} exact/>
              <PrivateUserRoute path="/transaction/:id" component={TransactionDetails} exact/>
              <PrivateAdminRoute path="/admin" component={Admin} exact/>
              <PrivateAdminRoute path="/admin/transactions" component={AdminTransactions} exact/>
              <PrivateAdminRoute path="/admin/users" component={AdminUsers} exact/>
            </Switch>
          </Router>
        </UsersState>
      </AuthState>
    </TransactionsState>
  );
};

export default App;
