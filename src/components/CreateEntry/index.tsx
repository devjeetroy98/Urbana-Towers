import React, { FC } from "react";
import { Form, Input, Select, FormInstance, Button } from "antd";
import TextArea from "antd/lib/input/TextArea";

import "./style.css";
import { CheckOutlined, RollbackOutlined } from "@ant-design/icons";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 10 },
};

const formRef = React.createRef<FormInstance>();

const { Option } = Select;

const CreateEntryForm: FC = () => {
  return (
    <div className="create-entry-section">
      <Form {...layout} ref={formRef} name="control-ref">
        <div className="steps-content">
          <div>
            <Form.Item name="name" label="Name">
              <Input placeholder="Property name" />
            </Form.Item>
            <Form.Item name="carpetArea" label="Carpet Area">
              <Input placeholder="Carpet Area in Sqft." />
            </Form.Item>
            <Form.Item name="configuration" label="Configuration">
              <Input placeholder="1 / 2 / 3 or more in BHK" />
            </Form.Item>
            <Form.Item name="furnishingStatus" label="Furnishing Status">
              <Select placeholder="Select a Option" allowClear>
                <Option value="fully-furnished">Fully Furnished</Option>
                <Option value="semi-furnished">Semi Furnished</Option>
                <Option value="unfurnished">Unfurnished</Option>
              </Select>
            </Form.Item>
            <Form.Item label="Description">
              <TextArea
                rows={2}
                placeholder="Write something about the property."
              />
            </Form.Item>

            <Form.Item name="price" label="Price">
              <Input placeholder="Price for Bunglow" />
            </Form.Item>
          </div>
          <div>
            <Form.Item name="location" label="Location">
              <Input placeholder="Property location" />
            </Form.Item>
            <Form.Item name="address" label="Address">
              <Input placeholder="Property address" />
            </Form.Item>
            <Form.Item name="city" label="City">
              <Input placeholder="City in which property is located" />
            </Form.Item>
            <Form.Item name="state" label="State">
              <Input placeholder="State in which property is located" />
            </Form.Item>
            <Form.Item name="floorPlan" label="Floor Plan">
              <input type="file" name="floorPlan" id="floorPlan" />
            </Form.Item>
            <Form.Item name="propertyImage" label="Property Image">
              <input type="file" name="propertyImage" id="propertyImage" />
            </Form.Item>
            <Form.Item name="image360" label="Interior 360 Image">
              <input type="file" name="image360" id="image360" />
            </Form.Item>
          </div>
        </div>
        <div className="steps-action">
          <Button type="primary">
            <CheckOutlined /> Submit
          </Button>
          <Button type="primary" danger>
            <RollbackOutlined /> Reset
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default CreateEntryForm;
