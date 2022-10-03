import {
  ArrowUpOutlined,
  FacebookFilled,
  InstagramFilled,
  LinkedinFilled,
  TwitterOutlined,
  YoutubeFilled,
} from "@ant-design/icons";
import React, { FC } from "react";
import "./style.css";

const Footer: FC = () => {
  return (
    <div className="container">
      <div className="top">
        <p>
          Back to top <ArrowUpOutlined />
        </p>
      </div>
      <div className="bottom">
        <div className="s0">
          <h1>URBANA TOWERS</h1>
          <p>© 2022 Hexagon Group, Inc.</p>
        </div>
        <div className="s1">
          <div className="social">
            <FacebookFilled />
            <TwitterOutlined />
            <LinkedinFilled />
            <InstagramFilled />
            <YoutubeFilled />
          </div>
          <div className="email">
            <p>Subscribe to get the latest content</p>
            <input
              type="email"
              name="em"
              id="em"
              placeholder="Enter your Email ID"
            />
            <button type="submit">Submit</button>
          </div>
        </div>
        <hr />
        <div className="s2">
          <div className="footer-box">
            <h2>My Account</h2>
            <div className="con">
              <p>Profile</p>
              <p>Account</p>
              <p>Purchase</p>
              <p>Credit</p>
              <p>Preference</p>
            </div>
          </div>
          <div className="footer-box">
            <h2>Support</h2>
            <div className="con">
              <p>Contact</p>
              <p>FAQs</p>
              <p>Terms</p>
              <p>Privacy</p>
              <p>Feedbacks</p>
            </div>
          </div>
          <div className="footer-box">
            <h2>Urbana Towers</h2>
            <div className="con">
              <p>Home</p>
              <p>Apartments</p>
              <p>Careers</p>
              <p>Contact Us</p>
              <p>About Urbana</p>
            </div>
          </div>
        </div>
        <hr />
        <div className="footer-info">
          <h2>© 1996-2022, Hexagone Group Inc.</h2>
          <p>All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
