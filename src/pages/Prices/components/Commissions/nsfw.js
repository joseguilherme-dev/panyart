import nsfw from "./assets/img/nsfw.png";

export default function Nsfw() {
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-12 col-md-6">
          <img src={nsfw} className="img-thumbnail" width="100%" alt="" />
        </div>
      </div>
      <h4 className="mt-5">
        <strong>
          <small>Sexualized Content: +$10</small>
          <br />
        </strong>
        <small>or</small>
        <br />
        <strong>NSFW: +$20</strong>
        <br />
      </h4>
      <h4>
        - Check out more examples on my
        <a
          className="ps-1 color_bluedy"
          href="https://twitter.com/Bluedy_X"
          target="_blank"
        >
          NSFW twitter
        </a>
        .
      </h4>
    </div>
  );
}
