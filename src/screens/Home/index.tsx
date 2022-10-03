import React, { FC } from "react";
import "./style.css";
import {
  PlayCircleOutlined,
  ClockCircleOutlined,
  TeamOutlined,
  LikeOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import HomeCards from "../../components/HomeCards";
import houses from "../../api/dummy/houses";

const Home: FC = () => {
  return (
    <div className="container-fluid">
      <div
        className="bg"
        style={{ backgroundImage: "url(/UrbanaAssets/towers.jpg)" }}
      >
        <div className="shadow">
          <div className="content">
            <div className="header">
              <h1>
                Urbana <span>Towers</span>
              </h1>
              <h2>Let's find the perfect home for you and your family.</h2>
              <h3>
                Browse through the different real estate properties available
                for rent and sale. Find the best deals available in the market.
              </h3>
            </div>
            <div className="bottom">
              <button type="button">
                GET STARTED <PlayCircleOutlined style={{ fontSize: "18px" }} />
              </button>
              <button type="button">
                <ClockCircleOutlined style={{ fontSize: "18px" }} />
                SCHEDULE A DISCOVERY CALL
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="main">
        <div className="top">
          <p>Our New Listings in India</p>
        </div>
        <div className="middle">
          {houses.map((data: any) => {
            return <HomeCards data={data} key={data.id} />;
          })}
        </div>
      </div>
      <div className="expert-section">
        <div className="left-panel">
          <h1>Let's find the right selling option for you.</h1>
          <p>Our expert team is here to help you at every step.</p>
          <button type="button">Start Exploring</button>
        </div>
        <div className="right-panel">
          <img src="/UrbanaAssets/discussion.jpg" alt="Experts" />
        </div>
      </div>
      <div className="customer">
        <div className="top">
          <p>Our Happy Customers</p>
        </div>
        <div
          className="middle-sm"
          style={{ backgroundImage: "url(/UrbanaAssets/home.jpg)" }}
        >
          <div className="shadow-sm">
            <div className="s0">
              <ClockCircleOutlined />
              <p>7+ Years</p>
            </div>
            <div className="s1">
              <TeamOutlined />
              <p>9000+ Happy Customers</p>
            </div>
            <div className="s2">
              <LikeOutlined />
              <p>6500+ Active Users</p>
            </div>
            <div className="s3">
              <HomeOutlined />
              <p>4000+ Houses Sold</p>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default Home;
