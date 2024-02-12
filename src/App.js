import { Link, Route, Routes } from 'react-router-dom';
import RegisterExpert from './LoginnRegister/RegisterExpert';
import Login from './LoginnRegister/Login';
import CustomerDash from './LoginnRegister/CustomerDash';
import { Provider } from 'react-redux';
import store from './store';
import RegisterCustomer from './LoginnRegister/RegisterCustomer';
import ProductList from './products/ProductList';
import { Navbar } from './Navbar/Navbar';
import { About } from './Navbar/About';
import { Register } from './Navbar/Register';

function App() {
  return (
    <>
    <Navbar/>
    <Provider store={store}>
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

        </Routes>

    </div>
    </Provider>
    </>
  );
}

export default App;
