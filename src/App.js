import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import RegisterExpert from './LoginnRegister/RegisterExpert';
import RegisterUser from './LoginnRegister/RegisterUser';
import Login from './LoginnRegister/Login';

function App() {
  return (
    <div className="App">
        <Link to='/re'>Register Expert</Link>
        <Link to='/rc'>Register Customer</Link>
        <Link to='/login'>Login</Link>

        <Routes>
          <Route path='/re' element={<RegisterExpert/>}/>
          <Route path='/rc' element={<RegisterUser/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
    </div>
  );
}

export default App;
