import custom from "../img/custom.png";
import frontBack from "../img/frontBack.png";
import side from "../img/side.png";
import extra from "../img/extra.png";
import headshots from "../img/headshots.png";
import closeup1 from "../img/closeup1.png";
import closeup2 from "../img/closeup2.png";
import accessories from "../img/accessories.png";
import chibi from "../img/chibi.png";

export default [
  {
    images: [custom],
    title: "Custom Design/Redesign: +$20",
    imageCol: "col-md-4",
  },
  {
    images: [frontBack],
    title: "Front View: $60",
    imageCol: "col-md-8",
    subtitle: "- Includes basic info, color palette and colored background.",
    secondTitle: "Back View: $30",
  },
  {
    images: [side],
    imageCol: "col-md-4",
    title: "Side View: $30",
  },
  {
    images: [extra],
    title: "Extra View: $15",
    imageCol: "col-md-4",
    subtitle: "- With clothes, accessories, alternative hair style, etc.",
  },
  {
    images: [headshots],
    title: "Headshots: $10 (each)",
    imageCol: "col-md-8",
    subtitle: "- With different expressions, alternative hair style, etc.",
  },
  {
    images: [closeup1, closeup2],
    title: "Close-up: $5 (each)",
    imageCol: "col-md-3",
    subtitle: "- Mouth, eyes, paws, etc.",
  },
  {
    images: [accessories],
    title: "Accessories / Small Objects: $5 (each)",
    imageCol: "col-md-8",
    secondTitle: "Complex Objects: $10 (each)",
  },
  {
    images: [chibi],
    title: "Chibi: $20 (extra ones: $5)",
    imageCol: "col-md-6",
    secondTitle: "- With clothes, accessories, alternative hair style, etc.",
  },
];
