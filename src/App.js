import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import RegisterExpert from './LoginnRegister/RegisterExpert';
import Login from './LoginnRegister/Login';
import CustomerDash from './LoginnRegister/CustomerDash';
import { useSelector } from 'react-redux';

import RegisterCustomer from './LoginnRegister/RegisterCustomer';

import ExpertDash from './LoginnRegister/ExpertDash';

function App() {
  const loggedStatus = useSelector(((state) => state.logged.loggedIn))
  return (
    
    <div className="App">
      {!loggedStatus?  
      (<div>
        <Link to='/re'>Register Expert</Link>
        <Link to='/rc'>Register Customer</Link>
        <Link to='/login'>Login</Link>
      </div>):<div></div>}
        <Routes>
          <Route path='/re' element={<RegisterExpert/>}/>
          <Route path='/rc' element={<RegisterCustomer/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/dashboard' element={<CustomerDash/>}/>
          <Route path='/expdash' element={<ExpertDash/>}/>
        </Routes>
    </div>
  );
}

export default App;
