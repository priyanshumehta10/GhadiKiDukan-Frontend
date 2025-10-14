import { useEffect, useRef, useState } from "react";
import { Form, Input, Button, Upload, message } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import type { RootState } from "../../../redux/store";
import { createPackageGroupRequest, resetCreatedGroup } from "../slice";

const CreateProductGroup = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const fetchData = useRef(false);
  const [fileList, setFileList] = useState<any[]>([]);

  const { created, loading,tagData } = useSelector(
    (state: RootState) => state.packageGroups
  );

  console.log(tagData);
  

  const dispatch = useDispatch();

  // Handle file upload
  const handleUploadChange = ({ fileList }: { fileList: any[] }) => {
    setFileList(fileList.slice(0, 1)); // Only 1 image allowed
  };

  // Handle form submit
  const onFinish = (values: any) => {
    const formData = new FormData();
    
    // Name
    formData.append("name", values.name);



    // Products (optional)
    if (values.productIds && Array.isArray(values.productIds)) {
      formData.append("productIds", JSON.stringify(values.productIds));
    }

    // Photo
    if (fileList[0]?.originFileObj) {
      formData.append("photo", fileList[0].originFileObj);
    }

    dispatch(createPackageGroupRequest(formData));
  };

  // Redirect after creation
  useEffect(() => {
    if (!fetchData.current && created) {
      fetchData.current = true;
      message.success("Product Group created successfully");
      navigate(-1);
      dispatch(resetCreatedGroup());
    }
  }, [created, dispatch, navigate]);

  return (
    <div className="max-w-2xl mx-auto bg-gray-900 text-white p-8 rounded-xl shadow-lg mt-8">
      <h2 className="text-2xl font-bold mb-6">Create Product Group</h2>
      <Form form={form} layout="vertical" onFinish={onFinish}>
        {/* Group Name */}
        <Form.Item
          label={<span className="text-white">Group Name</span>}
          name="name"
          rules={[{ required: true, message: "Please enter the group name" }]}
        >
          <Input className="bg-gray-800 text-white placeholder-gray-400" />
        </Form.Item>

 

        {/* Photo */}
        <Form.Item
          label={<span className="text-white">Photo</span>}
          required
          rules={[{ required: true, message: "Please upload one photo" }]}
        >
          <Upload
            listType="picture-card"
            fileList={fileList}
            onChange={handleUploadChange}
            beforeUpload={() => false}
            maxCount={1}
            accept="image/*"
          >
            {fileList.length < 1 && (
              <div>
                <PlusOutlined style={{ color: "#fff" }} />
                <div style={{ marginTop: 8, color: "#fff" }}>Upload</div>
              </div>
            )}
          </Upload>
        </Form.Item>

        {/* Submit */}
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
            className="w-full bg-blue-600 hover:bg-blue-700"
          >
            Create Group
          </Button>
        </Form.Item>

        {/* Cancel */}
        <Form.Item>
          <Button className="w-full mt-4" onClick={() => navigate(-1)}>
            Cancel
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateProductGroup;
