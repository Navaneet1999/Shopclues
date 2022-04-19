//import logo from './logo.svg';
import './App.css';
import { Body } from './components/body/Body';
import { Navbar } from './components/navbar/navbar';
//import { Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Body/>
    </div>
  );
}

export default App;