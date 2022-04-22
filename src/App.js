/* Custom Components */
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PreFooter from './components/PreFooter';
import AnimatedRoutes from './components/AnimatedRoutes';

/* React Router */
import { 
  BrowserRouter,
  HashRouter,
} from "react-router-dom";

/* CSS */
import './assets/css/base.css';
import './assets/css/hover.css';


function App() {
  return (
    <div className='App'>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Navbar/>
        <AnimatedRoutes/>
      </BrowserRouter>
      <PreFooter/>
      <Footer/>
    </div>
  );
}

export default App;
