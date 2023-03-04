import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <div className="container">
        <div className="nav-columns">
          <div className="nav-column">
            <ul className="nav-links">
              <li>
                <NavLink className="links" to="/about" exact>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink className="links" to="/skills" exact>
                  Skills
                </NavLink>
              </li>
              <li>
                <NavLink className="links" to="/portfolio" exact>
                  Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink className="links" to="/contact" exact>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="nav-column">
            <div className="nav-infos">
              <ul className="nav-info">
                <li className="nav-info-label">Email</li>
                <li>
                  <NavLink to="/contact" exact>
                    Get in touch with us
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/resume" exact>
                    have a resume
                  </NavLink>
                </li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">Location</li>
                <li>420 69th street</li>
                <li>Cleveland</li>
                <li>Ohio</li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">Phone</li>
                <li>1(512) 420 - 6969</li>
              </ul>
              <ul className="nav-info">
                <li className="nav-info-label">Copyright</li>
                <li>James Kirkwood 2023</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
