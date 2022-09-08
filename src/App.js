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
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Navbar/>
        <AnimatedRoutes/>
      </HashRouter>
      <PreFooter/>
      <Footer/>
    </div>
  );
}

export default App;
