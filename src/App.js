import { Link, Route, Routes } from 'react-router-dom';
import RegisterExpert from './LoginnRegister/RegisterExpert';
import Login from './LoginnRegister/Login';
import { Provider } from 'react-redux';
import store from './store';
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
import { FaqList } from './FAQs/FaqList';



function App() {
  return (
    <>
    <Navbar/>
    <Provider store={store}>
    <div className="App">
      <Link to='/faq_list'>FaqList</Link>
        <Routes>
          <Route path='/re' element={<RegisterExpert/>}/>
          <Route path='/rc' element={<RegisterCustomer/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/home' element={<CategoryPage/>}/>
          <Route path='/browse_cat' element={<Browse/>}/>
          <Route path='/admin' element={<AdminHome/>}/>
          <Route path='/expert_list' element={<ViewExpert/>}/>
          <Route path='/view_cat' element={<ViewCat/>}/>
          <Route path='/view_faq' element={<ViewFAQ/>}/>
          <Route path='/view_forum' element={<ViewForum/>}/>
          <Route path='/view_prod' element={<ViewProd/>}/>
          <Route path='/faq_list' element={<FaqList/>}/>          


        </Routes>

    </div>
    </Provider>
    </>
  );
}

export default App;
