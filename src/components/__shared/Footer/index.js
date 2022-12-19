import { useEffect } from "react";

/* Custom Components */
import SocialIcons from "./SocialIcons";
import PreFooter from "./PreFooter";

function Footer() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <footer className="container-fluid m-0 p-0">
      <PreFooter />
      <div className="row justify-content-center text-center">
        <div className="col-12 col-md-4 patrick-hand color_third">
          <h4>
            Interested in my work?
            <br />
            <strong>Contact me</strong> through my socials:
          </h4>
        </div>
      </div>
      <SocialIcons />
      <div className="row pt-2">
        <div className="col-12 text-center bg-white" id="credits">
          <small>
            © PanYart | All rights reserved | Developed with ♡ by:
            @joseguilherme-dev
          </small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
