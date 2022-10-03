import React, { FC, useState } from "react";
import { Modal, Button } from "antd";
import { ReactPhotoSphereViewer } from "react-photo-sphere-viewer";
import "./style.css";

const Modal360: FC<any> = (props: {
  title: string;
  image: string;
  handle360Modal: any;
}) => {
  const { title, image, handle360Modal } = props;
  const [isOpen, setIsOpen] = useState(true);
  const handleClose = () => {
    setIsOpen(false);
    handle360Modal(false);
  };

  const photoSphereRef: any = React.useRef();

  const handleClick = () => {
    photoSphereRef.current.animate({
      latitude: 0,
      longitude: 0,
      zoom: 55,
      speed: "10rpm",
    });
  };

  return (
    <div className="container-modal-360">
      <Modal
        title={title}
        open={isOpen}
        onCancel={() => handleClose()}
        footer={[
          <Button
            key="back"
            type="primary"
            danger
            onClick={() => handleClose()}
          >
            Close
          </Button>,
        ]}
        width={550}
      >
        <div className="holder">
          <ReactPhotoSphereViewer
            ref={photoSphereRef}
            src={image}
            height={300}
            width={600}
            onClick={handleClick}
            container="holder"
          />
        </div>
      </Modal>
    </div>
  );
};

export default Modal360;
