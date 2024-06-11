import { Button } from "@mui/material";
import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <section className={`frame-section ${className}`}>
      <div className="frame-parent1">
        <img
          className="frame-item"
          loading="lazy"
          alt=""
          src="/frame-9@2x.png"
        />
        <div className="frame-parent2">
          <img
            className="frame-inner"
            loading="lazy"
            alt=""
            src="/frame-46@2x.png"
          />
          <img
            className="frame-icon"
            loading="lazy"
            alt=""
            src="/frame-47@2x.png"
          />
          <img
            className="frame-child1"
            loading="lazy"
            alt=""
            src="/frame-48@2x.png"
          />
          <img
            className="frame-child2"
            loading="lazy"
            alt=""
            src="/frame-49@2x.png"
          />
          <div className="frame-parent3">
            <img className="frame-child3" alt="" src="/frame-50@2x.png" />
            <img
              className="vector-icon"
              loading="lazy"
              alt=""
              src="/vector.svg"
            />
          </div>
        </div>
      </div>
      <div className="frame-parent4">
        <div className="frame-parent5">
          <div className="frame-parent6">
            <div className="frame-parent7">
              <div className="brightwoods-cabin-parent">
                <b className="brightwoods-cabin">Brightwoods Cabin</b>
                <div className="bridlepath-ontario-canada">
                  Bridlepath, Ontario, Canada
                </div>
              </div>
              <img
                className="heart-icon1"
                loading="lazy"
                alt=""
                src="/hearticon.svg"
              />
            </div>
            <div className="frame-parent8">
              <div className="parent">
                <b className="b">5.0</b>
                <img className="vector-icon1" alt="" src="/vector-1.svg" />
              </div>
              <div className="reviews-wrapper">
                <u className="reviews">200 Reviews</u>
              </div>
            </div>
          </div>
          <div className="welcome-to-our">{`Welcome to our cozy cabin retreat nestled in the heart of Bridlepath, Ontario! Surrounded by lush landscapes and tranquil trails, this charming getaway offers the perfect blend of rustic elegance and modern comfort. `}</div>
        </div>
        <div className="frame-parent9">
          <div className="frame-parent10">
            <div className="group">
              <b className="b1">$658</b>
              <div className="night-wrapper">
                <div className="night1">/night</div>
              </div>
            </div>
            <div className="frame-wrapper">
              <div className="icontrend-parent">
                <div className="icontrend">
                  <div className="icon-parent">
                    <img className="icon" alt="" src="/icon.svg" />
                    <div className="rectangle-div" />
                  </div>
                </div>
                <div className="best-time-to-book-wrapper">
                  <div className="best-time-to">Best time to Book</div>
                </div>
              </div>
            </div>
          </div>
          <Button
            className="search-flights-button1"
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "16",
              background: "#00c29f",
              borderRadius: "6px",
              "&:hover": { background: "#00c29f" },
              height: 58,
            }}
          >
            Book this home
          </Button>
        </div>
        <div className="hosted-by-parent">
          <div className="hosted-by">Hosted by:</div>
          <div className="ellipse-parent">
            <img
              className="ellipse-icon"
              loading="lazy"
              alt=""
              src="/ellipse-2@2x.png"
            />
            <div className="michelle-ward-parent">
              <b className="michelle-ward">Michelle Ward</b>
              <div className="joined-in-may">Joined in May 2021</div>
            </div>
            <button className="vector-parent">
              <img className="vector-icon2" alt="" src="/vector-2.svg" />
              <div className="superhost1">Superhost</div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
