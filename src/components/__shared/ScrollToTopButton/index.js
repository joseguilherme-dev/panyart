import "./styles.css";
import icon from "./icon.png";

export default function ScrollToTopButton() {
  function handleScroll() {
    console.log(document.querySelector("#root"));
    document.querySelector("#root").scrollIntoView();
  }

  return (
    <button onClick={(e) => handleScroll()} className="scroll-to-top-button">
      <img src={icon} />
    </button>
  );
}
