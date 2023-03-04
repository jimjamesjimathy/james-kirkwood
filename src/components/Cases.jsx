import { ReactComponent as CasesPrev } from "../assets/arrow-left.svg";

const caseStudies = [
  {
    id: 1,
    subtitle: "About / Experience",
    title: "A quick synopsis of my journey as a developer.",
    img: "about",
    className: "aboutMe",
  },
  {
    id: 2,
    subtitle: "Skills / Languages",
    title: "Languages and tools that I have learned along the way.",
    img: "coding",
  },
  {
    id: 3,
    subtitle: "Portfolio / Projects",
    title: "Take a look and some of my completed projects.",
    img: "portfolio",
  },
];

const LowBanner = () => {
  return (
    <section className="cases">
      <div className="container-fluid">
        <div className="cases-navigation">
          <div className="cases-arrow prev disabled">
            <CasesPrev />
          </div>
        </div>
        <div className="row">
          {caseStudies.map((caseItem) => (
            <div className="case" key={caseItem.id}>
              <div className="case-details">
                <div className="case-details-wrapper">
                  <span>{caseItem.subtitle}</span>
                  <h2>{caseItem.title}</h2>
                </div>
              </div>
              <div className="case-image">
                <img
                  src={require(`../assets/${caseItem.img}.png`)}
                  alt={caseItem.title}
                  className={caseItem.img === "hero-cartoon" ? "aboutMe" : ""}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LowBanner;
