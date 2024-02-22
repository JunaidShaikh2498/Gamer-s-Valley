
import { Route, Routes } from 'react-router-dom';
import RegisterExpert from './LoginnRegister/RegisterExpert';
import Login from './LoginnRegister/Login';

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
import CustomerDash from './LoginnRegister/CustomerDash'
import EditProfileCustomer from './InsideCustomer/EditProfileCustomer';



import ExpertDash from './LoginnRegister/ExpertDash.jsx';
import EditProfileExpert from './InsideExpert/EditProfileExpert';
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
          <Route path='/custdashboard' element={<CustomerDash/>}/>
          <Route path='/custdashboard/editProfile' element={<EditProfileCustomer />} />
          <Route path='/expdashboard' element={<ExpertDash/>}/>
          <Route path='/expdashboard/editProfile' element={<EditProfileExpert/>}/>
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
