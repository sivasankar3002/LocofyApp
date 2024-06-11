import Header from "../components/Header";
import FrameComponent from "../components/FrameComponent";
import ListingDescription from "../components/ListingDescription";
import LocationAmenities from "../components/LocationAmenities";
import ReviewSection from "../components/ReviewSection";
import SimilarStaysSection from "../components/SimilarStaysSection";
import Footer from "../components/Footer";
import "./PropertyDetails.css";

const PropertyDetails = () => {
  return (
    <div className="property-details">
      <Header
        notifications="/notifications@2x.png"
        avatar="/avatar@2x.png"
        showLoginSection
      />
      <main className="frame-parent">
        <FrameComponent />
        <section className="listing-details-section">
          <ListingDescription />
          <LocationAmenities />
        </section>
        <ReviewSection />
        <SimilarStaysSection />
      </main>
      <Footer />
      <div className="band1">
        <div className="band-child">
          <div className="localhost-inc-all-rights-res-group">
            <div className="localhost-inc-all1">
              © 2023 Localhost, Inc. All Rights Reserved
            </div>
            <div className="privacy-policy-group">
              <div className="privacy-policy1">Privacy Policy</div>
              <div className="terms-conditions1">{`Terms & Conditions`}</div>
              <div className="contact-us1">Contact us</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
