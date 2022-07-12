import React,{useState} from "react";
import "./FormScreen.css";
import logo from "../images/logo.svg";

function FormScreen() {
    const [email, setEmail] = useState('');
    const [industry, setIndustry] = useState('');
    const [size, setSize] = useState(null);
  return (
    <div className="main-container">
      <div className="box-rotate-fixed">
        <div className="box-strip box-strip-middle"></div>
        <div className="box-strip box-strip-top-right"></div>
        <div className="box-strip box-strip-bottom-left"></div>
      </div>
      <div className="auth-layout container">
        <div className="auth-header">
          <div className="logo-box">
            <img className="img-fluid" src={logo} alt="logo" />
          </div>
        </div>
        <div className="auth-box-wrapper">
          <div className="content-box">
            <div className="auth-login-layout auth-login">
              <div className="content-header"></div>
              <div className="auth-card">
                <div className="auth-card-padding auth-card-center ">
                  <div className="auth-logo-box">
                    <svg
                      width="52"
                      height="48"
                      viewBox="0 0 52 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="11.0477"
                        height="27.8427"
                        rx="5.52383"
                        transform="matrix(0.854439 -0.519552 0.510535 0.859857 0.499878 24.0586)"
                        fill="#3766E8"
                      ></rect>
                      <rect
                        width="11.0477"
                        height="42.3694"
                        rx="5.52383"
                        transform="matrix(0.854439 -0.519552 0.510535 0.859857 12.3904 8.65234)"
                        fill="#3766E8"
                      ></rect>
                      <rect
                        width="11.0477"
                        height="21.5479"
                        rx="5.52383"
                        transform="matrix(0.854439 -0.519552 0.510535 0.859857 31.0594 5.73828)"
                        fill="#3766E8"
                      ></rect>
                    </svg>
                  </div>
                  <div className="auth-content">
                    <h3 className="auth-title">
                      It's a delight to have you onboard
                    </h3>
                    <div className="auth-des">
                      <p>Help us know you better.</p>
                      <p>
                        (This is how we optimize Wobot as per your business
                        needs)
                      </p>
                    </div>
                    <form className="auth-form-block">
                      <div className="form-group">
                        <label className="form-label">Company name</label>
                        <input
                          className="form-control"
                          placeholder="e.g. Example Inc"
                          value={email}
                          onChange={(e)=> setEmail(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <label>Industry</label>
                        <select className="form-control" value={industry} onChange={(e) => setIndustry(e.target.value)}>
                          <option>Select</option>
                          <option value="IT">IT</option>
                          <option value="Management">Management</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label>Company Size</label>
                        <div>
                            <div className={size===20 ? "select-company-size active" :"select-company-size"} onClick={()=> setSize(20)}>1-20</div>
                            <div className={size===50 ? "select-company-size active" :"select-company-size"} onClick={()=> setSize(50)}>21-50</div>
                            <div className={size===200 ? "select-company-size active" :"select-company-size"} onClick={()=> setSize(200)}>51-200</div>
                            <div className={size===500 ? "select-company-size active" :"select-company-size"} onClick={()=> setSize(500)}>201-500</div>
                            <div className={size===501 ? "select-company-size active" :"select-company-size"} onClick={()=> setSize(501)}>500+</div>
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-block btn-primary btn-xl mt-3"
                      >
                        Get Started
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer">
            <div className="footer-content">Terms of use  |  Privacy policy </div>
        </div>
      </div>
    </div>
  );
}

export default FormScreen;
