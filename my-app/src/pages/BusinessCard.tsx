import logo from "./mainlogo.png";
import { FaGithub, FaFileAlt, FaLinkedin, FaEnvelope, FaAngleRight } from "react-icons/fa";
import TypewriterEffect from "./typed";
import { Link, useNavigate } from "react-router-dom";
import Home from "./Home";

const BusinessCard = () => { 

  const navigate = useNavigate();
  
  const closePopup = () => {
      navigate("/");
    };

  return (
    <div>
      <Home />
      <style>
        {`
          /* Overlay for background */
          .overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(2, 21, 38, 1);
            z-index: 999;
          }

          .popup-container {
            position: fixed;
            top: 45%;
            left: 50%;
            transform: translate(-50%, -50%);
            border-radius: 10px 10px 20px 20px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            z-index: 1000;
            width: 90%;
            max-width: 400px;
            overflow: hidden; /* Ensure border-radius applies */
          }

          .popup-header {
            background-color: #619EE5; /* Light blue */
            padding: 15px;
            text-align: center;
            color: #fff;
            font-size: 18px;
            font-weight: bold;
          }

          .popup-close {
            position: absolute;
            top: 10px;
            right: 10px;
            background: none;
            border: none;
            font-size: 20px;
            font-weight: bold;
            color: #fff;
            cursor: pointer;
          }

          .popup-content {
            background-color: #fff; /* White background */
            padding: 15px;
            border-radius: 0px 0px 20px 20px;
          }

          .business-card-table {
            width: 100%;
            margin: 0;
            border: none;
            max-width: 400px;
            border-radius: 100px;
          }

          .business-card-table img {
            width: 65px;
            height: 65px;
            border-radius: 5px;
            transition: transform 0.3s ease;
            margin-left: -20px; /* Adjust margin as needed */
          }

          .business-card-table img:hover {
            transform: scale(1.25);
          }

          .business-card-table h2 {
            font-size: 18px;
            margin: 0;
            color: #333;
          }

          .business-card-table em {
            font-size: 14px;
            color: #666;
          }

          .business-card-table p {
            font-size: 14px;
            margin: 5px 0;
            color: #333;
          }

          .business-card-table p a {
            text-decoration: none;
            color: #333;
            transition: color 0.3s ease;
          }

          .business-card-table p a:hover {
            color: #619EE5; /* Light blue on hover */
          }

          .icon-container {
            display: flex;
            flex-direction: row;
            justify-content: center;
            margin-top: 10px;
            margin-left: -10px;
          }

          .icon-circle {
            width: 30px;
            height: 30px;
            background-color: #619EE5;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: transform 0.3s ease;
            margin-left: -15px;
          }

          .icon-circle:hover {
            transform: scale(1.25);
          }

          .icon-circle svg {
            width: 16px;
            height: 16px;
            color: #fff;
          }

          .continue-button {
            display: block;
            margin: 20px auto 0;
            padding: 10px 20px;
            background-color: #619EE5; /* Light blue */
            color: #fff;
            border: none;
            border-radius: 5px;
            font-size: 16px;
            cursor: pointer;
            text-align: center;
            transition: background-color 0.3s ease;
          }

          .continue-button:hover {
            background-color: #507dbf; /* Slightly darker blue */
          }
        `}
      </style>
      {(
        <>
          <div className="overlay" onClick={closePopup}></div>
          <div className="popup-container">
            <div className="popup-header">
              <button className="popup-close" onClick={closePopup}>
                &times;
              </button>
              <TypewriterEffect />
            </div>
            <div className="popup-content">
              <table className="business-card-table">
                <tbody>
                  <tr>
                    <td style={{ textAlign: "center" }}>
                      <a href="https://harryschlechter.netlify.app/">
                        <img src={logo} alt="Logo" />
                      </a>
                    </td>
                    <td>
                      <h2>Harry Schlechter</h2>
                      <em>Software Engineer • BNY | HealFast</em>
                      <hr
                        style={{
                          border: "0",
                          borderTop: "2px solid #619EE5",
                          margin: "8px 0",
                        }}
                      />
                      <div>
                        <p>
                          <a href="sms:+15168169670">516-816-9670</a>
                          <br />
                          <a href="mailto:harry.schlechter391@gmail.com">
                            harry.schlechter391@gmail.com
                          </a>
                        </p>
                      </div>
                      <div className="icon-container">
                        <a href="https://github.com/Harry-Schlechter">
                          <div className="icon-circle">
                            <FaGithub />
                          </div>
                        </a>
                        <a href="https://drive.google.com/file/d/1hQRMWD1toqAyb3wLDcLScXcfzv52i9Ee/view">
                          <div className="icon-circle">
                            <FaFileAlt />
                          </div>
                        </a>
                        <a href="https://www.linkedin.com/in/harryschlechter/">
                          <div className="icon-circle">
                            <FaLinkedin />
                          </div>
                        </a>
                        <a href="mailto:harry.schlechter391@gmail.com">
                          <div className="icon-circle">
                            <FaEnvelope />
                          </div>
                        </a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="linkBox">
                <Link to="/"><FaAngleRight size={20} color="white"/>
                        <p className="linkT">Continue to Site</p></Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default BusinessCard;
