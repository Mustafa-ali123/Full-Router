import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nested from './component/Nested';
import Home from './component/Home';
import SignIn from './component/SignIn';
import About from './component/About';
import LogIn from './component/LogIn';
import Product from './component/Product';
import Menu from './component/Menu';
import Company from './component/Company';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/sign' element={<SignIn />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/appbar*' element={<Nested />} >
            <Route path='pro' element={<Product />} />
            <Route path='comp' element={<Company />} />
            <Route path='menu' element={<Menu />} />
          </Route>


        </Routes>
      </Router>


    </>
  );
}

export default App;
