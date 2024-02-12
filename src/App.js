import { Link, Route, Routes } from 'react-router-dom';
import RegisterExpert from './LoginnRegister/RegisterExpert';
import Login from './LoginnRegister/Login';
import CustomerDash from './LoginnRegister/CustomerDash';
import { useSelector } from 'react-redux';

import RegisterCustomer from './LoginnRegister/RegisterCustomer';
import ProductList from './products/ProductList';
import { Navbar } from './Navbar/Navbar';
import { About } from './Navbar/About';
import { Register } from './Navbar/Register';

import ExpertDash from './LoginnRegister/ExpertDash';

function App() {
  const loggedStatus = useSelector(((state) => state.logged.loggedIn))
  return (
    <>
    <Navbar/>
    
    <div className="App">
        
        <Routes>
          <Route path='/re' element={<RegisterExpert/>}/>
          <Route path='/rc' element={<RegisterCustomer/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/dashboard' element={<CustomerDash/>}/>
          <Route path='/prod' element={<ProductList/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/home' element={<ProductList/>}/>
          <Route path ="/expdashboard" element={<ExpertDash/>}/>
        </Routes>

    </div>
    </>
  );
}

export default App;
