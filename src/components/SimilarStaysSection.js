import StayCard from "./StayCard";
import PropTypes from "prop-types";
import "./SimilarStaysSection.css";

const SimilarStaysSection = ({ className = "" }) => {
  return (
    <section className={`similar-stays-section ${className}`}>
      <div className="similar-stays-parent">
        <h3 className="similar-stays">Similar stays</h3>
        <b className="button2">View all</b>
      </div>
      <div className="staycard-parent">
        <StayCard
          brightwoodsEstate="Missisuaga Aistream"
          bridlepathOntarioCanada="Missisauga, Ontario, Canada"
        />
        <div className="staycard1">
          <div className="frame-parent25">
            <div className="vector-parent1">
              <img className="vector-icon7" alt="" src="/superhost-icon.svg" />
              <div className="superhost3">Superhost</div>
            </div>
            <div className="wrapper-heart-icon2">
              <img className="heart-icon3" alt="" src="/hearticon-1.svg" />
            </div>
          </div>
          <div className="frame-parent26">
            <div className="frame-parent27">
              <div className="urban-loft-parent">
                <div className="urban-loft">Urban Loft</div>
                <div className="urban-loft1">Urban Loft</div>
              </div>
              <div className="parent4">
                <b className="b5">4.8</b>
                <img className="vector-icon8" alt="" src="/star-icon.svg" />
              </div>
            </div>
            <div className="frame-wrapper2">
              <div className="parent5">
                <b className="b6">$502</b>
                <div className="night3">/night</div>
              </div>
            </div>
          </div>
        </div>
        <StayCard
          brightwoodsEstate="Forestville Cottages"
          bridlepathOntarioCanada="Simcoe, Ontario Canada"
          propBackgroundImage="url('/frame-94@3x.png')"
          propLineHeight="unset"
        />
      </div>
    </section>
  );
};

SimilarStaysSection.propTypes = {
  className: PropTypes.string,
};

export default SimilarStaysSection;
