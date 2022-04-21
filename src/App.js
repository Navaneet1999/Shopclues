//import logo from './logo.svg';
import './App.css';
//import { Body } from './components/body/Body';
import { Men } from './components/men/men';
import { Navbar } from './components/navbar/navbar';
//import { Women } from './components/women/women';
//import { Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Men/>
    </div>
  );
}

export default App;