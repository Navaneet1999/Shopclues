
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import ProductPage from './components/ProductPage';
import ProductDetails from './components/ProductDetails'
import { Body } from './components/body/Body';
import { Cart } from './components/Cart';
import { SignUp } from './components/Signup';
import { LogIn } from './components/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Body/>}/>
          <Route path='/product' element={<ProductPage/>}/>
          <Route path='/product/:productId' element={<ProductDetails/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/login' element={<LogIn/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;