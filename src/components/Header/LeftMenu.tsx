import React, { FC } from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

const LeftMenu: FC<any> = ({ mode }) => {
  return (
    <Menu mode={mode} className="left-nav-menu">
      <Menu.Item key="home">
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="apartments">
        <Link to="apartments">Apartments</Link>
      </Menu.Item>
      <Menu.Item key="about">
        <Link to="about">About Us</Link>
      </Menu.Item>
      <Menu.Item key="contact">
        <Link to="contact">Contact Us</Link>
      </Menu.Item>
    </Menu>
  );
};

export default LeftMenu;
