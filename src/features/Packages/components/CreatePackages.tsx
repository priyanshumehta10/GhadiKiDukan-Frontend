import { useState, useEffect, useRef } from "react";
import { Form, Input, InputNumber, Button, Upload, message, Select, Switch } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createPackageRequest, resetCreated } from "../slice"; // ✅ same slice/saga name
import type { RootState } from "../../../redux/store";

const { TextArea } = Input;

const CreateProduct = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fetchData = useRef(false);
  const [fileList, setFileList] = useState<any[]>([]);

  const { tagData } = useSelector(
    (state: RootState) => state.packageGroups
  );

  const { created, loading } = useSelector((state: RootState) => state.packages); // ✅ same slice

  const handleUploadChange = ({ fileList }: { fileList: any[] }) => {
    if (fileList.length > 5) {
      message.warning("Exactly 5 images are required");
      return;
    }
    setFileList(fileList);
  };

  const onFinish = (values: any) => {
    if (fileList.length !== 5) {
      message.error("Please upload exactly 5 photos");
      return;
    }

    const formData = new FormData();



    Object.entries(values).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        formData.append(key, JSON.stringify(value));
      } else {
        formData.append(key, value as any);
      }
    });

    fileList.forEach((file) => {
      if (file.originFileObj) {
        formData.append("images", file.originFileObj);
      }
    });

    dispatch(createPackageRequest(formData));
  };

  useEffect(() => {
    if (!fetchData.current && created) {
      fetchData.current = true;
      message.success("Product created successfully");
      dispatch(resetCreated());
      navigate(-1);
    }
  }, [created, dispatch, navigate]);

  return (
    <div className="max-w-2xl mx-auto bg-gray-900 text-white p-8 rounded-xl shadow-lg mt-8">
      <h2 className="text-2xl font-bold mb-6">Create Product</h2>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        initialValues={{
          discount: 0,
          specialDiscount: 0,
          price: 0,
          stockCount: 0,
        }}
      >
        <Form.Item
          label={<span className="text-white">Hot</span>}
          name="Hot"
          initialValue={false}
        >
          <Switch
            checkedChildren="ON"
            unCheckedChildren="OFF"
            className="custom-switch"

          />

        </Form.Item>
        <Form.Item
          label={<span className="text-white">Model Name</span>}
          name="modelName"
          rules={[{ required: true, message: "Please enter model name" }]}
        >
          <Input className="bg-gray-800 text-white placeholder-gray-400" />
        </Form.Item>
        {/* Tags */}
        <Form.Item label={<span className="text-white">Tags</span>} name="tags">
          <Select
            mode="multiple"
            placeholder="Select tags"
            className="w-full bg-black text-white"
            options={tagData?.map((tag: { label: string; value: string }) => ({
              label: tag,
              value: tag,
            }))}
          />
        </Form.Item>

        <Form.Item
          label={<span className="text-white">Description</span>}
          name="description"
        >
          <TextArea rows={3} className="bg-gray-800 text-white placeholder-gray-400" />
        </Form.Item>

        <div className="flex gap-4">
          <Form.Item
            label={<span className="text-white">Price (₹)</span>}
            name="price"
            className="flex-1"
            rules={[{ required: true, message: "Please enter price" }]}
          >
            <InputNumber<number>
              min={0}
              className="w-full bg-gray-800 text-white"
              formatter={(value) => (value !== undefined && value !== null ? `₹${value}` : "")}
              parser={(value) => (value ? Number(value.replace(/[₹,\s]/g, "")) : 0)}
            />
          </Form.Item>

          <Form.Item
            label={<span className="text-white">Discount (%)</span>}
            name="discount"
            className="flex-1"
          >
            <InputNumber<number>
              min={0}
              max={100}
              className="w-full bg-gray-800 text-white"
              formatter={(value) => (value !== undefined && value !== null ? `${value}%` : "")}
              parser={(value) => (value ? Number(value.replace(/%/g, "")) : 0)}
            />
          </Form.Item>

          <Form.Item
            label={<span className="text-white">Special Discount (%)</span>}
            name="specialDiscount"
            className="flex-1"
          >
            <InputNumber<number>
              min={0}
              max={100}
              className="w-full bg-gray-800 text-white"
              formatter={(value) => (value !== undefined && value !== null ? `${value}%` : "")}
              parser={(value) => (value ? Number(value.replace(/%/g, "")) : 0)}
            />
          </Form.Item>
        </div>

        <Form.Item
          label={<span className="text-white">Stock Count</span>}
          name="stockCount"
          rules={[{ required: true, message: "Please enter stock count" }]}
        >
          <InputNumber min={0} className="w-full bg-gray-800 text-white" />
        </Form.Item>

        <Form.Item
          label={<span className="text-white">Available Sizes</span>}
          name="availableSizes"
        >
          <Input
            placeholder="Type available sizes (e.g., S,M,L,XL or any text)"
            className="w-full bg-gray-800 text-white placeholder-gray-400"
          />
        </Form.Item>


        <Form.Item
          label={<span className="text-white">Photos (exactly 5)</span>}
          required
        >
          <Upload
            listType="picture-card"
            fileList={fileList}
            onChange={handleUploadChange}
            beforeUpload={() => false}
            multiple
            accept="image/*"
            className="dark"
          >
            <div>
              <PlusOutlined style={{ color: "#fff" }} />
              <div style={{ marginTop: 8, color: "#fff" }}>Upload</div>
            </div>

          </Upload>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
            className="w-full bg-blue-600 hover:bg-blue-700"
          >
            Create Product
          </Button>
        </Form.Item>

        <Form.Item>
          <Button className="w-full mt-4" onClick={() => navigate(-1)}>
            Cancel
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateProduct;
