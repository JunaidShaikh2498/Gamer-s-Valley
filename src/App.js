import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import RegisterExpert from './LoginnRegister/RegisterExpert';
import Login from './LoginnRegister/Login';
import CustomerDash from './LoginnRegister/CustomerDash';
import { Provider } from 'react-redux';
import store from './store';
import RegisterCustomer from './LoginnRegister/RegisterCustomer';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
        <Link to='/re'>Register Expert</Link>
        <Link to='/rc'>Register Customer</Link>
        <Link to='/login'>Login</Link>

        <Routes>
          <Route path='/re' element={<RegisterExpert/>}/>
          <Route path='/rc' element={<RegisterCustomer/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/dashboard' element={<CustomerDash/>}/>
        </Routes>
    </div>
    </Provider>
  );
}

export default App;
