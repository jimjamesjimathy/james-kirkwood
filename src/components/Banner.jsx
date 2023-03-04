import { useEffect } from "react";

const Banner = () => {
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);

  return (
    <section className="banner-main">
      <div className="container">
        <div className="row">
          <h2>
            <div className="line">
              <span>
                {" "}
                <abbr>Howdy!</abbr> I'm James.
              </span>
            </div>
            <div className="line">
              <span>
                I'm a Full Stack <abbr>Developer</abbr>.
              </span>
            </div>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Banner;
