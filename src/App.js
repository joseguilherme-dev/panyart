/* Custom Components */
import Prices from './components/Prices';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Queue from './components/Queue';
import Footer from './components/Footer';

/* React Router */
import { 
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

/* CSS */
import './assets/css/base.css';
import './assets/css/hover.css';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="queue" element={<Queue />}/>
          <Route path="prices" element={<Prices />}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
