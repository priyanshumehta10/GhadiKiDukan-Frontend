import { useEffect, useRef, useState } from "react";
import { Form, Input, Button, Upload, message, Spin } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import type { RootState } from "../../../redux/store";
import { editPackageGroupRequest, resetCreatedGroup } from "../slice";
import type { UploadFile } from "antd/es/upload/interface";

const EditProductGroup = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const fetchData = useRef(false);

  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const { dataPerGroup, loadingPerGroup, error, edited } = useSelector(
    (state: RootState) => state.packageGroups
  );

  useEffect(() => {
    if (dataPerGroup) {
      form.setFieldsValue({
        name: dataPerGroup.name,
        tags: dataPerGroup.tags,
        productIds: dataPerGroup.packages?.map((p: any) => p._id) || [],
      });

      setFileList(
        dataPerGroup.photo
          ? [
            {
              uid: dataPerGroup._id,
              name: dataPerGroup.photo.public_id,
              status: "done",
              url: dataPerGroup.photo.url,
            } as UploadFile,
          ]
          : []
      );
    }
  }, [dataPerGroup, form]);

  const handleUploadChange = ({ fileList }: { fileList: UploadFile[] }) => {
    setFileList(fileList.slice(0, 1)); // only one image allowed
  };

  const onFinish = (values: { name: string; tags: string[]; productIds: string[] }) => {
    if (!dataPerGroup) return;

    const formData = new FormData();

    // Include the group ID
    formData.append("packageIds", dataPerGroup._id); // just the string

    // Name
    formData.append("name", values.name);



    // Products
    if (values.productIds && Array.isArray(values.productIds)) {
      formData.append("productIds", JSON.stringify(values.productIds));
    }

    // Photo handling
    const existingImages: { url: string; public_id: string }[] = [];
    fileList.forEach((file) => {
      if (file.originFileObj) {
        // new image
        formData.append("photo", file.originFileObj as Blob);
      } else if (file.url && file.name) {
        // existing image
        existingImages.push({ url: file.url, public_id: file.name });
      }
    });
    formData.append("existingPhoto", JSON.stringify(existingImages));

    // Dispatch with ID included
    dispatch(editPackageGroupRequest(formData));
  };


  useEffect(() => {
    if (!fetchData.current && edited) {
      fetchData.current = true;
      navigate(-1);
      message.success("Product Group updated successfully");
      dispatch(resetCreatedGroup());
    }
  }, [edited, dispatch, navigate]);

  if (loadingPerGroup) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-900">
        <Spin size="large" />
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-500 mt-8">{error}</div>;
  }

  return (
    <div className="max-w-2xl mx-auto bg-gray-900 text-white p-8 rounded-xl shadow-lg mt-8">
      <h2 className="text-2xl font-bold mb-6">Edit Product Group</h2>
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
        <Form.Item label={<span className="text-white">Photo</span>} required>
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

        {/* Buttons */}
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            loading={loadingPerGroup}
            className="w-full bg-blue-600 hover:bg-blue-700"
          >
            Update Group
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

export default EditProductGroup;
