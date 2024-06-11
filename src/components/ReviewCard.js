import { useMemo } from "react";
import PropTypes from "prop-types";
import "./ReviewCard.css";

const ReviewCard = ({
  className = "",
  ellipse12,
  johnnyCash,
  june2023,
  prop,
  michellesPlaceWasSoGreatA,
  propMinWidth,
  propMinWidth1,
}) => {
  const johnnyCashStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const june2023Style = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div className={`reviewcard ${className}`}>
      <div className="frame-parent21">
        <div className="ellipse-group">
          <img className="frame-child5" loading="lazy" alt="" src={ellipse12} />
          <div className="johnny-cash-parent">
            <b className="johnny-cash" style={johnnyCashStyle}>
              {johnnyCash}
            </b>
            <div className="june-2023" style={june2023Style}>
              {june2023}
            </div>
          </div>
        </div>
        <div className="parent1">
          <b className="b2">{prop}</b>
          <img className="vector-icon4" alt="" src="/vector-1.svg" />
        </div>
      </div>
      <div className="michelles-place-was">{michellesPlaceWasSoGreatA}</div>
    </div>
  );
};

ReviewCard.propTypes = {
  className: PropTypes.string,
  ellipse12: PropTypes.string,
  johnnyCash: PropTypes.string,
  june2023: PropTypes.string,
  prop: PropTypes.string,
  michellesPlaceWasSoGreatA: PropTypes.string,

  /** Style props */
  propMinWidth: PropTypes.any,
  propMinWidth1: PropTypes.any,
};

export default ReviewCard;
