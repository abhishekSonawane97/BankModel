import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Outlet/>
    </div>
  );
}

export default App;
