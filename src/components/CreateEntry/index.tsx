import React, { FC, useState } from "react";
import { Button, Form, Input, Select, FormInstance, Upload, Steps } from "antd";
import TextArea from "antd/lib/input/TextArea";
import { PlusOutlined } from "@ant-design/icons";
import "./style.css";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 10 },
};

const formRef = React.createRef<FormInstance>();

const { Step } = Steps;

const steps = [
  {
    title: "First",
    content: "First-content",
  },
  {
    title: "Second",
    content: "Second-content",
  },
  {
    title: "Last",
    content: "Last-content",
  },
];

const { Option } = Select;

const CreateEntryForm: FC = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };
  return (
    <div className="create-entry-section">
      <Form {...layout} ref={formRef} name="control-ref">
        <Steps current={current}>
          {steps.map((item) => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <div className="steps-content">
          {current === 0 && (
            <>
              <Form.Item name="name" label="Name" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
              <Form.Item
                name="carpetArea"
                label="Carpet Area"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="configuration"
                label="Configuration"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="furnishingStatus"
                label="Furnishing Status"
                rules={[{ required: true }]}
              >
                <Select placeholder="Select a Option" allowClear>
                  <Option value="fully-furnished">Fully Furnished</Option>
                  <Option value="semi-furnished">Semi Furnished</Option>
                  <Option value="unfurnished">Unfurnished</Option>
                </Select>
              </Form.Item>
              <Form.Item label="Description" rules={[{ required: true }]}>
                <TextArea
                  rows={3}
                  placeholder="Write something about the property."
                />
              </Form.Item>

              <Form.Item
                name="price"
                label="Price"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
            </>
          )}
          {current === 1 && (
            <>
              {" "}
              <Form.Item
                name="location"
                label="Location"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="address"
                label="Address"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item name="city" label="City" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
              <Form.Item
                name="state"
                label="State"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Upload Floor Plan"
                valuePropName="fileList"
                rules={[{ required: true }]}
              >
                <Upload action="/" listType="picture-card">
                  <div>
                    <PlusOutlined />
                    <div style={{ marginTop: 8 }}>Upload</div>
                  </div>
                </Upload>
              </Form.Item>
            </>
          )}
          {current === 2 && (
            <>
              <Form.Item
                label="Upload Bunglow Image"
                valuePropName="fileList"
                rules={[{ required: true }]}
              >
                <Upload action="/" listType="picture-card">
                  <div>
                    <PlusOutlined />
                    <div style={{ marginTop: 8 }}>Upload</div>
                  </div>
                </Upload>
              </Form.Item>
              <Form.Item
                label="Upload 360 Image of interior"
                valuePropName="fileList"
                rules={[{ required: true }]}
              >
                <Upload action="/" listType="picture-card">
                  <div>
                    <PlusOutlined />
                    <div style={{ marginTop: 8 }}>Upload</div>
                  </div>
                </Upload>
              </Form.Item>
            </>
          )}
        </div>
      </Form>
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => alert("Success!")}>
            Submit
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
    </div>
  );
};

export default CreateEntryForm;
