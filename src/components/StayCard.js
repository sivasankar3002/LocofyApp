import { useMemo } from "react";
import PropTypes from "prop-types";
import "./StayCard.css";

const StayCard = ({
  className = "",
  brightwoodsEstate,
  bridlepathOntarioCanada,
  propBackgroundImage,
  propLineHeight,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  const bridlepathOntarioCanadaStyle = useMemo(() => {
    return {
      lineHeight: propLineHeight,
    };
  }, [propLineHeight]);

  return (
    <div className={`staycard ${className}`}>
      <div className="frame-parent22" style={frameDivStyle}>
        <div className="vector-container">
          <img className="vector-icon5" alt="" src="/superhost-icon.svg" />
          <div className="superhost2">Superhost</div>
        </div>
        <div className="wrapper-heart-icon1">
          <img className="heart-icon2" alt="" src="/hearticon-1.svg" />
        </div>
      </div>
      <div className="frame-parent23">
        <div className="frame-parent24">
          <div className="brightwoods-estate-parent">
            <b className="brightwoods-estate">{brightwoodsEstate}</b>
            <div
              className="bridlepath-ontario-canada1"
              style={bridlepathOntarioCanadaStyle}
            >
              {bridlepathOntarioCanada}
            </div>
          </div>
          <div className="parent2">
            <b className="b3">4.8</b>
            <img className="vector-icon6" alt="" src="/star-icon.svg" />
          </div>
        </div>
        <div className="frame-wrapper1">
          <div className="parent3">
            <b className="b4">$502</b>
            <div className="night2">/night</div>
          </div>
        </div>
      </div>
    </div>
  );
};

StayCard.propTypes = {
  className: PropTypes.string,
  brightwoodsEstate: PropTypes.string,
  bridlepathOntarioCanada: PropTypes.string,

  /** Style props */
  propBackgroundImage: PropTypes.any,
  propLineHeight: PropTypes.any,
};

export default StayCard;
