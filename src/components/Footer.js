import PropTypes from "prop-types";
import "./Footer.css";

const Footer = ({ className = "" }) => {
  return (
    <footer className={`footer ${className}`}>
      <div className="footer-inner">
        <div className="frame-container">
          <div className="support-parent">
            <b className="support">Support</b>
            <div className="help-centre">Help Centre</div>
            <div className="aircover">AirCover</div>
            <div className="combating-discrimination">
              Combating discrimination
            </div>
            <div className="supporting-people-with">
              Supporting people with disabilities
            </div>
            <div className="cencellation-options">Cencellation options</div>
            <div className="report-neighbourhood-concern">
              Report neighbourhood concern
            </div>
          </div>
          <div className="hosting-parent">
            <b className="hosting">Hosting</b>
            <div className="local-home">Local home</div>
            <div className="cover-for-hosts">Cover for hosts</div>
            <div className="hosting-resources">Hosting resources</div>
            <div className="community-forum">Community forum</div>
            <div className="hosting-responsibly">Hosting responsibly</div>
          </div>
          <div className="localhost-parent">
            <b className="localhost">Localhost</b>
            <div className="newsroom">Newsroom</div>
            <div className="new-features">New Features</div>
            <div className="careers">Careers</div>
            <div className="investres">Investres</div>
            <div className="gift-cards">Gift cards</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
