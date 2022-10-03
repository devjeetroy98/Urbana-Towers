import { BellOutlined } from "@ant-design/icons";
import React, { FC } from "react";
import { cloneDeep } from "lodash";
import Pagination from "rc-pagination";
import notifications from "../../api/dummy/notifications";
import "rc-pagination/assets/index.css";
import "./style.css";

const Notification: FC = () => {
  const countPerPage = 5;
  const [currentPage, setCurrentPage] = React.useState(1);
  const [collection, setCollection] = React.useState(
    cloneDeep(notifications.slice(0, countPerPage)),
  );

  const updatePage = (p: any) => {
    setCurrentPage(p);
    window.scrollTo(0, 0);
    const to = countPerPage * p;
    const from = to - countPerPage;
    setCollection(cloneDeep(notifications.slice(from, to)));
  };

  return (
    <div className="notification-container">
      <div className="header">
        <p>
          Notifications <BellOutlined />
        </p>
      </div>
      <div className="notifications">
        {collection.map((item: any) => {
          return (
            <div
              className="notification"
              style={{ borderLeft: item.seen ? "" : "2px solid #5e17eb" }}
            >
              <div className="top">
                <div className="check">
                  <input type="checkbox" name="notif" id="notif" />
                </div>
                <p>{item.message}</p>
              </div>
              <div className="bottom">
                <p>{item.createdAt}</p>
              </div>
            </div>
          );
        })}
      </div>
      <Pagination
        pageSize={countPerPage}
        onChange={updatePage}
        current={currentPage}
        total={notifications.length}
      />
    </div>
  );
};

export default Notification;
