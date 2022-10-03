import React, { FC } from "react";
import { Menu, Avatar, Badge } from "antd";
import { Link } from "react-router-dom";
import {
  UserOutlined,
  HistoryOutlined,
  LogoutOutlined,
  ShoppingOutlined,
  NotificationOutlined,
} from "@ant-design/icons";

const RightMenu: FC<any> = ({ mode }) => {
  return (
    <Menu mode={mode} className="rightmenu">
      <Menu.Item key="wishlist">
        <Link to="wishlist">
          <Badge count={3} size="default" offset={[10, 2]} overflowCount={9}>
            <ShoppingOutlined style={{ fontSize: "22px" }} />
          </Badge>
        </Link>
      </Menu.Item>
      <Menu.Item key="notification">
        <Link to="notification">
          <Badge count={12} size="default" offset={[10, 2]} overflowCount={9}>
            <NotificationOutlined style={{ fontSize: "22px" }} />
          </Badge>
        </Link>
      </Menu.Item>

      <Menu.SubMenu
        className="profile"
        title={
          <>
            <Avatar icon={<UserOutlined />} />
            <span className="username">John Doe</span>
          </>
        }
      >
        <Menu.Item key="order">
          <HistoryOutlined /> Purchase History
        </Menu.Item>
        <Menu.Item key="about-us">
          <Link to="profile">
            <UserOutlined /> Profile
          </Link>
        </Menu.Item>
        <Menu.Item key="log-out">
          <LogoutOutlined /> Logout
        </Menu.Item>
      </Menu.SubMenu>
    </Menu>
  );
};

export default RightMenu;
