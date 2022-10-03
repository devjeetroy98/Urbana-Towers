import React, { FC, useState } from "react";
import { Modal, Button } from "antd";
import "./style.css";

const ImageModal: FC<any> = (props: {
  title: string;
  image: string;
  handleImageModal: any;
}) => {
  const { title, image, handleImageModal } = props;
  const [isOpen, setIsOpen] = useState(true);
  const handleClose = () => {
    setIsOpen(false);
    handleImageModal(false);
  };

  return (
    <div className="container-modal">
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
        <img src={image} alt="" />
      </Modal>
    </div>
  );
};

export default ImageModal;
