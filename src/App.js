/* Custom Components */
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PreFooter from './components/PreFooter';
import AnimatedRoutes from './components/AnimatedRoutes';

/* React Router */
import { 
  BrowserRouter,
} from "react-router-dom";

/* CSS */
import './assets/css/base.css';
import './assets/css/hover.css';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar/>
        <AnimatedRoutes/>
      </BrowserRouter>
      <PreFooter/>
      <Footer/>
    </div>
  );
}

export default App;
