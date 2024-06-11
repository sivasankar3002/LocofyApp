import Header from "../components/Header";
import Form from "../components/Form";
import "./SignInPage.css";

const SignInPage = () => {
  return (
    <div className="sign-in-page">
      <Header
        notifications="/notifications1@2x.png"
        avatar="/avatar1@2x.png"
        showLoginSection={false}
      />
      <main className="login-sections1">
        <div className="form-frame">
          <Form />
        </div>
      </main>
      <footer className="band3">
        <div className="band-inner1">
          <div className="localhost-inc-all-rights-res-parent1">
            <div className="localhost-inc-all3">
              © 2023 Localhost, Inc. All Rights Reserved
            </div>
            <div className="privacy-policy-parent1">
              <div className="privacy-policy3">Privacy Policy</div>
              <div className="terms-conditions3">{`Terms & Conditions`}</div>
              <div className="contact-us3">Contact us</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SignInPage;
