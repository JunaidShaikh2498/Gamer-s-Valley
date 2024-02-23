
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



import ExpertDash from './LoginnRegister/ExpertDash';
import EditProfileExpert from './InsideExpert/EditProfileExpert';
import ProductFilter from './products/ProductFilter';
import AddProducts from './Admin/AddProducts';
import EditProfileCustomer from './InsideCustomer/EditProfileCustomer';
import Product from './LoginnRegister/Product';
import UpdateProductPrice from './Admin/UpdateProductPrice';
import Home from './Navbar/Home';
import ViewCart from './LoginnRegister/ViewCart';
import OrderPlaced from './LoginnRegister/OrderPlaced';
import CustomerBuying from './LoginnRegister/CustomerBuying';
import CategorizedProd from './products/CategorizedProd';
import AskAQuestion from './Forum/AskAQuestion';
import AddFAQs from './Forum/AddFAQs';
import ForumPage from './Forum/ForumPage';

function App() {
  
  return (
    <>
    <Navbar/>
    <div className="App">
        <Routes>
          <Route path='/' element={<ProductFilter/>}/>
          <Route path='/re' element={<RegisterExpert/>}/>
          <Route path='/rc' element={<RegisterCustomer/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/custdashboard/editProfile' element={<EditProfileCustomer />} />
          <Route path='/editProfileE' element={<EditProfileExpert/>}/> 
          <Route path='/about' element={<About/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/homepage' element={<CategoryPage/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/expdashboard' element={<ExpertDash/>}/>
          <Route path='/admin' element={<AdminHome/>}/>
          <Route path='/expert_list' element={<ViewExpert/>}/>
          <Route path='/view_cat' element={<ViewCat/>}/>
          <Route path='/view_faq' element={<ViewFAQ/>}/>
          <Route path='/view_forum' element={<ViewForum/>}/>
          <Route path='/view_prod' element={<ViewProd/>}/>
          <Route path='/addproduct' element={<AddProducts/>}/>
          <Route path='/updatePrice' element ={<UpdateProductPrice/>}/>
          <Route path='/allProds' element={<ProductFilter/>}/>
          <Route path='/products' element={<Product/>}/>
          <Route path='/custdash' element={<CustomerBuying/>}/>
          <Route path='/view_cart' element={<ViewCart/>}/>
          <Route path='/placeOrder' element={<OrderPlaced/>}/>
          <Route path='/getprods' element={<CategorizedProd/>}/>
          <Route path='/askadvice' element={<AskAQuestion/>}/>
          <Route path = "/faqs" element ={<FaqList/>}/>
          <Route path = "/answerFAQs" element ={<AddFAQs/>}/>
          <Route path='/forums' element ={<ForumPage/>}/>
        </Routes>
    </div>
    </>
  );
}

export default App;
