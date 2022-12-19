import "./styles.css";
import icon from "./icon.png";

export default function ScrollToTopButton() {
  function scrollToTop(e) {
    e.preventDefault();
    document.documentElement.scrollTop = 0;
  }

  return (
    <button onClick={(e) => scrollToTop(e)} className="scroll-to-top-button">
      <img src={icon} />
    </button>
  );
}
