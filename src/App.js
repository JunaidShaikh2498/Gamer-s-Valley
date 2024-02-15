import {  Route, Routes } from 'react-router-dom';
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
import ExpertDash from './LoginnRegister/ExpertDash';
<<<<<<< HEAD



=======
import EditProfileExpert from './InsideExpert/EditProfileExpert';
>>>>>>> df2739ff879cb686608788eecc8dad44ffda0e3c
function App() {
  const loggedStatus = useSelector(((state) => state.logged.loggedIn))
  const role = useSelector(state=>state.logged.role)
  return (
    <>
    <Navbar/>
    <div className="App">
        <Routes>
          <Route path='/re' element={<RegisterExpert/>}/>
          <Route path='/rc' element={<RegisterCustomer/>}/>
          <Route path='/login' element={<Login/>}/>
<<<<<<< HEAD
=======
          <Route path='/dashboard' element={<CustomerDash/>}/>
          <Route path='/expdashboard' element={<ExpertDash/>}/>
          <Route path='/expdashboard/editProfile' element={<EditProfileExpert/>}/>
>>>>>>> df2739ff879cb686608788eecc8dad44ffda0e3c
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
        </Routes>
    </div>
    </>
  );
}

export default App;
