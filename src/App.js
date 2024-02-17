import { Link, Route, Routes } from 'react-router-dom';
import RegisterExpert from './LoginnRegister/RegisterExpert';
import Login from './LoginnRegister/Login';
import CustomerDash from './LoginnRegister/CustomerDash';
import RegisterCustomer from './LoginnRegister/RegisterCustomer';

import { Navbar } from './Navbar/Navbar';
import { About } from './Navbar/About';
import { Register } from './Navbar/Register';
import './BackgroundImg.css';
import CategoryPage from './products/CategoryPage';
import { AdminHome } from './Admin/AdminHome';
import { ViewExpert } from './Admin/ViewExpert';
import { ViewCat } from './Admin/ViewCat';
import { ViewFAQ } from './Admin/ViewFAQ';
import { ViewForum } from './Admin/ViewForum';
import { ViewProd } from './Admin/ViewProd';
import { FaqList } from './FAQs/FaqList';



import ExpertDash from './LoginnRegister/ExpertDash';
import EditProfileExpert from './InsideExpert/EditProfileExpert';
import { useSelector } from 'react-redux';
import ProductFilter from './products/ProductFilter';
function App() {
  const loggedStatus = useSelector(((state) => state.logged.loggedIn))
  const role = useSelector(state=>state.logged.role)
  return (
    <>
    <Navbar/>
    <div className="App" >
      <Link to='/expdashboard'>exp dash</Link>
        <Routes>
          <Route path='/re' element={<RegisterExpert/>}/>
          <Route path='/rc' element={<RegisterCustomer/>}/>
          <Route path='/admin' element={<About/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/dashboard' element={<CustomerDash/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/home' element={<CategoryPage/>}/>
          <Route path='/allProds' element={<ProductFilter/>}/>
          <Route path='/expert_list' element={<ViewExpert/>}/>
          <Route path='/expdashboard' element={<ExpertDash/>}/>
        </Routes>
    </div>
    </>
  );
}

export default App;
