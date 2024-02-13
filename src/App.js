import { Link, Route, Routes } from 'react-router-dom';
import RegisterExpert from './LoginnRegister/RegisterExpert';
import Login from './LoginnRegister/Login';
import CustomerDash from './LoginnRegister/CustomerDash';
import { useSelector } from 'react-redux';

import RegisterCustomer from './LoginnRegister/RegisterCustomer';
import CategoryList from './products/CategoryList';
import { Navbar } from './Navbar/Navbar';
import { About } from './Navbar/About';
import { Register } from './Navbar/Register';
import pic from './Photos/Dashboard.webp';
import './BackgroundImg.css';

import { Browse } from './products/Browse';
function App() {
  const loggedStatus = useSelector(((state) => state.logged.loggedIn))
  return (
    <>
    <Navbar/>
    <div className="App" style={{background:
    "url(./Photos/Dashboard.webp) no-repeat center center fixed"}}>
        <Routes>
          <Route path='/re' element={<RegisterExpert/>}/>
          <Route path='/rc' element={<RegisterCustomer/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/dashboard' element={<CustomerDash/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/home' element={<CategoryList/>}/>
          <Route path='/browse_cat' element={<Browse/>}/>
        </Routes>

    </div>
    </>
  );
}

export default App;
