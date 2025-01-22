import logo from "./mainlogo.png";
import React, { useState } from "react";
import { FaGithub, FaFileAlt, FaLinkedin, FaEnvelope } from "react-icons/fa";
import TypewriterEffect from "./typed";

const BusinessCard = () => {
  const [showPopup, setShowPopup] = useState(true);

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <style>
        {`
          /* Overlay for background */
          .overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 999;
          }

          .popup-container {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            border-radius: 10px;
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
          }

          .business-card-table {
            width: 100%;
            margin: 0;
            border: none;
          }

          .business-card-table img {
            width: 80px;
            height: 80px;
            border-radius: 5px;
            transition: transform 0.3s ease;
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

          .icon-container {
            display: flex;
            flex-direction: row;
            gap: 0px; /* Minimal gap for tightly packed icons */
            justify-content: center;
            margin-top: 10px; /* Adjust spacing from the content above */
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
            padding: 0; /* Ensure no extra padding */
          }

          .icon-circle:hover {
            transform: scale(1.25);
          }

          .icon-circle svg {
            width: 16px;
            height: 16px;
            color: #fff;
          }
        `}
      </style>
      {showPopup && (
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
                      <p>
                        <strong>•</strong>{" "}
                        <a href="sms:+15168169670" style={{ color: "#333" }}>
                          516-816-9670
                        </a>
                        <br />
                        <strong>•</strong>{" "}
                        <a
                          href="mailto:harry.schlechter391@gmail.com"
                          style={{ color: "#333" }}
                        >
                          harry.schlechter391@gmail.com
                        </a>
                      </p>
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
          </div>
        </>
      )}
    </div>
  );
};

export default BusinessCard;
