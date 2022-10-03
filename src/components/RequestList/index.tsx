import React, { FC, useState, useEffect } from "react";
import { Menu } from "antd";
import {
  CheckCircleOutlined,
  CheckOutlined,
  ClockCircleOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import User from "../../interfaces/User";
import "./style.css";

import visitRequest from "../../api/dummy/visitRequest";

const RequestList: FC = () => {
  const [pendingUsers, setPendingUsers] = useState([] as User[]);
  const [approvedUsers, setApprovedUsers] = useState([] as User[]);
  const [currentTab, setCurrentTab] = useState("profile");

  useEffect(() => {
    const pUsers: Array<User> = [];
    const aUsers: Array<User> = [];
    visitRequest.forEach((item: any) => {
      if (item.vistStatus === "PENDING") {
        pUsers.push(item);
      } else {
        aUsers.push(item);
      }
    });

    setPendingUsers(pUsers);
    setApprovedUsers(aUsers);
  });

  return (
    <div className="users-section">
      <div className="top">
        <Menu mode="horizontal" defaultSelectedKeys={["profile"]}>
          <Menu.Item
            key="profile"
            icon={<ClockCircleOutlined />}
            onClick={() => setCurrentTab("profile")}
          >
            Pending Requests
          </Menu.Item>
          <Menu.Item
            key="create"
            icon={<CheckCircleOutlined />}
            onClick={() => setCurrentTab("create")}
          >
            Approved Requests
          </Menu.Item>
        </Menu>
      </div>
      <div className="content">
        {currentTab === "profile" &&
          pendingUsers.map((person: any) => {
            return (
              <div className="parent-long-card">
                <div className="long-card">
                  <div className="left">
                    <img src={person.profilePic} alt="" />
                  </div>
                  <div className="mid">
                    {person.firstName} {person.lastName}
                  </div>
                  <div className="info">{person.phoneNumber}</div>
                </div>
                <div className="request">
                  <p>Bunglow : {person.requestedFor.name}</p>
                  <p>City : {person.requestedFor.city}</p>
                  <p>State : {person.requestedFor.state}</p>
                  <p>Requested Visit Date : {person.visitOn}</p>
                </div>
                <div className="action-buttons">
                  <button type="button">
                    <CheckOutlined />
                  </button>
                  <button type="button">
                    <CloseOutlined />
                  </button>
                </div>
              </div>
            );
          })}
        {currentTab === "create" &&
          approvedUsers.map((person: any) => {
            return (
              <div className="parent-long-card">
                <div className="long-card">
                  <div className="left">
                    <img src={person.profilePic} alt="" />
                  </div>
                  <div className="mid">
                    {person.firstName} {person.lastName}
                  </div>
                  <div className="info">{person.phoneNumber}</div>
                </div>
                <div className="request">
                  <p>Bunglow : {person.requestedFor.name}</p>
                  <p>City : {person.requestedFor.city}</p>
                  <p>State : {person.requestedFor.state}</p>
                  <p>Requested Visit Date : {person.visitOn}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default RequestList;
