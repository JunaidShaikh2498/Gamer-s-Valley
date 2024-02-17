import {  Route, Routes} from 'react-router-dom';
import RegisterExpert from './LoginnRegister/RegisterExpert';
import Login from './LoginnRegister/Login';

import RegisterCustomer from './LoginnRegister/RegisterCustomer';

import { Navbar } from './Navbar/Navbar';
import { About } from './Navbar/About';
import { Register } from './Navbar/Register';
import './BackgroundImg.css';
import { Browse } from './products/Browse';
import CategoryPage from './products/CategoryPage';
import { AdminHome } from './Admin/AdminHome';
import { ViewExpert } from './Admin/ViewExpert';
import { ViewCat } from './Admin/ViewCat';
import { ViewFAQ } from './Admin/ViewFAQ';
import { ViewForum } from './Admin/ViewForum';
import { ViewProd } from './Admin/ViewProd';
import { useSelector } from 'react-redux';
import ExpertDash  from './LoginnRegister/ExpertDash';
import EditProfileExpert from './InsideExpert/EditProfileExpert';
import AddProducts from './Admin/AddProducts';
import EditProfileCustomer from './InsideCustomer/EditProfileCustomer';
import Product from './LoginnRegister/Product';
import UpdateProductPrice from './Admin/UpdateProductPrice';
function App() {
  const loggedStatus = useSelector(((state) => state.logged.loggedIn))
  const role = useSelector(state=>state.logged.role)
  return (
    <>
    
    <Navbar/>
    <div className="App">
        <Routes>
          <Route path='/' element={<Product/>}/>
          <Route path='/re' element={<RegisterExpert/>}/>
          <Route path='/rc' element={<RegisterCustomer/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/custdashboard/editProfile' element={<EditProfileCustomer />} />
          <Route path='/editProfileE' element={<EditProfileExpert/>}/> 
          <Route path='/about' element={<About/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/home' element={<CategoryPage/>}/>
          <Route path='/expdashboard' element={<ExpertDash/>}/>
          <Route path='/browse_cat' element={<Browse/>}/>
          <Route path='/admin' element={<AdminHome/>}/>
          <Route path='/expert_list' element={<ViewExpert/>}/>
          <Route path='/view_cat' element={<ViewCat/>}/>
          <Route path='/view_faq' element={<ViewFAQ/>}/>
          <Route path='/view_forum' element={<ViewForum/>}/>
          <Route path='/view_prod' element={<ViewProd/>}/>
          <Route path ='/addproduct' element={<AddProducts/>}/>
          <Route path='/updatePrice' element ={<UpdateProductPrice/>}/>
        </Routes>
    </div>
    </>
  );
}

export default App;
