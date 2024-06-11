import { useMemo } from "react";
import PropTypes from "prop-types";
import "./ListingItem.css";

const ListingItem = ({
  className = "",
  listingImage,
  listingTitle,
  listingSubtitle,
  rating,
  price,
  showBestTime,
  propDisplay,
  propMinWidth,
  propDisplay1,
  propMinWidth1,
  propPadding,
  propFlex,
  propDisplay2,
  propMinWidth2,
  onListingItemContainerClick,
  superhostIcon,
  heartIcon,
  starIcon,
  trendIcon,
  listingItemFlex,
}) => {
  const listingTitleStyle = useMemo(() => {
    return {
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propDisplay, propMinWidth]);

  const listingSubtitleStyle = useMemo(() => {
    return {
      display: propDisplay1,
      minWidth: propMinWidth1,
    };
  }, [propDisplay1, propMinWidth1]);

  const bottomContainerStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const pricePerNightStyle = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  const priceChartStyle = useMemo(() => {
    return {
      display: propDisplay2,
      minWidth: propMinWidth2,
    };
  }, [propDisplay2, propMinWidth2]);

  const listingItemStyle = useMemo(() => {
    return {
      flex: listingItemFlex,
    };
  }, [listingItemFlex]);

  return (
    <div
      className={`listing-item ${className}`}
      onClick={onListingItemContainerClick}
      style={listingItemStyle}
    >
      <img className="listing-image-icon" alt="" src={listingImage} />
      <div className="superhost-tag">
        <img className="superhost-icon" alt="" src={superhostIcon} />
        <div className="superhost">Superhost</div>
      </div>
      <div className="wrapper-heart-icon">
        <img className="heart-icon" loading="lazy" alt="" src={heartIcon} />
      </div>
      <div className="item-details">
        <div className="listing-info">
          <div className="listing-cont">
            <b className="listing-title" style={listingTitleStyle}>
              {listingTitle}
            </b>
            <div className="listing-subtitle" style={listingSubtitleStyle}>
              {listingSubtitle}
            </div>
          </div>
          <div className="rating-cont">
            <b className="rating">{rating}</b>
            <img className="star-icon" loading="lazy" alt="" src={starIcon} />
          </div>
        </div>
        <div className="bottom-container" style={bottomContainerStyle}>
          <div className="price-per-night" style={pricePerNightStyle}>
            <b className="price">{price}</b>
            <div className="night">/night</div>
          </div>
          {showBestTime && (
            <div className="best-time">
              <img
                className="trend-icon"
                loading="lazy"
                alt=""
                src={trendIcon}
              />
              <div className="price-chart" style={priceChartStyle}>
                Price chart
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

ListingItem.propTypes = {
  className: PropTypes.string,
  listingImage: PropTypes.string,
  listingTitle: PropTypes.string,
  listingSubtitle: PropTypes.string,
  rating: PropTypes.string,
  price: PropTypes.string,
  showBestTime: PropTypes.bool,
  superhostIcon: PropTypes.string,
  heartIcon: PropTypes.string,
  starIcon: PropTypes.string,
  trendIcon: PropTypes.string,

  /** Style props */
  propDisplay: PropTypes.any,
  propMinWidth: PropTypes.any,
  propDisplay1: PropTypes.any,
  propMinWidth1: PropTypes.any,
  propPadding: PropTypes.any,
  propFlex: PropTypes.any,
  propDisplay2: PropTypes.any,
  propMinWidth2: PropTypes.any,
  listingItemFlex: PropTypes.any,

  /** Action props */
  onListingItemContainerClick: PropTypes.func,
};

export default ListingItem;
