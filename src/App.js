/* Custom Components */
import Navbar from "./components/__shared/Navbar";
import Footer from "./components/__shared/Footer";
import ScrollToTopButton from "./components/__shared/ScrollToTopButton";

/* React Router */
import { BrowserRouter } from "react-router-dom";

/* Animated Routes */
import AnimatedRoutes from "./core/AnimatedRoutes";

/* CSS */
import "./assets/css/base.css";
import "./assets/css/hover.css";

export const BASEURL = "https://panyart-api.herokuapp.com";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
