import React, { FC, useState, useEffect } from "react";
import { Menu } from "antd";
import {
  BarChartOutlined,
  HomeOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import LineChartVertical from "../../components/Analytics/LineChart";
import CreateEntryForm from "../../components/CreateEntry";
import UploadedEstates from "../../components/UploadedEstates";
import ProfileAnalytics from "../../components/ProfileAnalytics";
import RequestList from "../../components/RequestList";
import User from "../../interfaces/User";
import users from "../../api/dummy/profile";
import profileViews from "../../api/dummy/profileViewAnalytics";

import "./style.css";

const Profile: FC = () => {
  const [currentTab, setCurrentTab] = useState("profile");
  const [user, setUser] = useState({} as User);
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: "",
        data: [],
      },
    ],
  } as any);

  useEffect(() => {
    setUser(users[0]);
    if (profileViews) {
      const data = {
        labels: profileViews.map((item: any) => {
          return item?.month;
        }),
        datasets: [
          {
            label: "Profile Views",
            data: profileViews.map((item: any) => {
              return item?.view;
            }),
            fill: false,
            borderColor: "rgb(94, 23, 235)",
            tension: 0.1,
          },
        ],
      };
      setChartData(data);
    }
  }, []);

  return (
    <div className="profile-container">
      <div className="top">
        <Menu mode="horizontal" defaultSelectedKeys={["profile"]}>
          <Menu.Item
            key="profile"
            icon={<UserOutlined />}
            onClick={() => setCurrentTab("profile")}
          >
            Personal Details
          </Menu.Item>
          <Menu.Item
            key="create"
            icon={<UserOutlined />}
            onClick={() => setCurrentTab("create")}
          >
            Create Estate Entry
          </Menu.Item>
          <Menu.Item
            key="estate"
            icon={<HomeOutlined />}
            onClick={() => setCurrentTab("estate")}
          >
            Your Real Estates
          </Menu.Item>
          <Menu.Item
            key="analytics"
            icon={<BarChartOutlined />}
            onClick={() => setCurrentTab("analytics")}
          >
            Analytics
          </Menu.Item>
          <Menu.Item
            key="users"
            icon={<TeamOutlined />}
            onClick={() => setCurrentTab("users")}
          >
            Visit Requests
          </Menu.Item>
        </Menu>
      </div>
      <div className="main">
        {currentTab === "profile" && (
          <div className="profile-section">
            <div className="header">
              <div className="img">
                <img src={user.profilePic} alt="" />
              </div>
              <div className="self">
                <p>
                  <span>{user.firstName} </span>
                  <span>{user.lastName}</span>
                </p>
                <p>&#9734; {user.profileRating}</p>
                <p>{user.address}</p>
              </div>
            </div>
            <div className="profile-view">
              {chartData.labels.length > 0 && (
                <LineChartVertical data={chartData} />
              )}
            </div>
          </div>
        )}
        {currentTab === "create" && <CreateEntryForm />}
        {currentTab === "estate" && <UploadedEstates />}
        {currentTab === "analytics" && <ProfileAnalytics />}
        {currentTab === "users" && <RequestList />}
      </div>
    </div>
  );
};

export default Profile;
