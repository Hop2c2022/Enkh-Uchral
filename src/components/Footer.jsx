import "../App.css";
import React from "react";
import { Button } from "react-bootstrap";
import Fb from "../facebook.png";
import Ig from "../instagram.png";
import Tw from "../twitter.png";
import Yt from "../youtube.png";

export const Footer = () => {
  return (
    <div className="tugsgul">
      <footer className="footer">
        <div className="container-ftr">
          <div className="social-links">
            <a href="#">
              <img
                style={{
                  width: "25px",
                  height: "25px",
                  marginTop: "8px",
                }}
                src={Fb}
              />
            </a>
            <a href="#">
              <img
                style={{ width: "25px", height: "25px", marginTop: "8px" }}
                src={Ig}
              />
            </a>
            <a href="#">
              <img
                style={{ width: "25px", height: "25px", marginTop: "8px" }}
                src={Tw}
              />
            </a>
            <a href="#">
              <img
                style={{ width: "25px", height: "25px", marginTop: "8px" }}
                src={Yt}
              />
            </a>
          </div>
          <div className="roww">
            <div className="footer-col">
              <ul>
                <li>
                  <a href="#">Audio Description</a>
                </li>
                <li>
                  <a href="#">Investor Relations</a>
                </li>
                <li>
                  <a href="#">Legal Notices</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <ul>
                <li>
                  <a href="#">Help Center</a>
                </li>
                <li>
                  <a href="#">Jobs</a>
                </li>
                <li>
                  <a href="#">Cookie Preferences</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <ul>
                <li>
                  <a href="#">Gift Cards</a>
                </li>
                <li>
                  <a href="#">Terms of Use</a>
                </li>
                <li>
                  <a href="#">Corporate Information</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <ul>
                <li>
                  <a href="#">Media Center</a>
                </li>
                <li>
                  <a href="#">Privacy</a>
                </li>
                <li>
                  <a href="#">Contact Us Settings</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="btn">
            <Button type="button">Service Code</Button>
          </div>
        </div>
      </footer>
    </div>
  );
};
