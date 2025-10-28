import { useEffect, useRef, useState } from "react";
import {
    Form,
    Input,
    InputNumber,
    Button,
    Upload,
    message,
    Select,
    Switch,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { editPackageRequest, resetEdited } from "../slice";
import { useNavigate } from "react-router-dom";
import type { RootState } from "../../../redux/store";

const { TextArea } = Input;

interface Photo {
    url: string;
    public_id: string;
    _id?: string;
}

export interface data {
    _id: string;
    modelName: string;
    description: string;
    price: number;
    discount: number;
    specialDiscount: number;
    stockCount: number;
    availableSizes: string[];
    photos: Photo[];
}


const EditProduct = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const fetchRef = useRef(false);

    const { dataPerPck, loading, error, edited } = useSelector(
        (state: RootState) => state.packages as any
    );
    const { tagData } = useSelector((state: RootState) => state.packageGroups);

    console.log(dataPerPck);

    const [fileList, setFileList] = useState<any[]>([]);

    useEffect(() => {
        if (dataPerPck) {


            form.setFieldsValue({
                modelName: dataPerPck.modelName,
                description: dataPerPck.description,
                price: dataPerPck.price,
                discount: dataPerPck.discount,
                specialDiscount: dataPerPck.specialDiscount,
                stockCount: dataPerPck.stockCount,
                availableSizes: dataPerPck.availableSizes,
                tags: dataPerPck.tags,
                Hot: dataPerPck.Hot,
            });


            setFileList(
                (dataPerPck.photos ?? []).map((img: Photo) => ({
                    uid: img._id || img.public_id,
                    name: img.public_id,
                    status: "done",
                    url: img.url,
                }))
            );
        }
    }, [dataPerPck, form]);


    const handleUploadChange = ({ fileList }: { fileList: any[] }) => {
        setFileList(fileList.slice(0, 5));
    };

    const onFinish = (values: any) => {
        if (!dataPerPck) return;

        const formData = new FormData();

        Object.entries(values).forEach(([key, value]) => {
            // Only JSON stringify arrays, including tags
            if (Array.isArray(value)) {
                formData.append(key, JSON.stringify(value));
            } else {
                formData.append(key, value as any);
            }
        });

        // Handle files
        const existingPhotos: { url: string; public_id: string }[] = [];

        fileList.forEach((file) => {
            if (file.originFileObj) {
                formData.append("images", file.originFileObj);
            } else {
                existingPhotos.push({
                    url: file.url,
                    public_id: file.name,
                });
            }
        });

        formData.append("existingPhotos", JSON.stringify(existingPhotos));
        formData.append("_id", dataPerPck._id);

        dispatch(editPackageRequest(formData));
    };


    useEffect(() => {
        if (!fetchRef.current && edited) {
            fetchRef.current = true;
            message.success("Product updated successfully");
            navigate(-1);
            dispatch(resetEdited());
        }
    }, [edited, dispatch]);

    if (loading) {
        return (
            <div className="h-screen flex items-center justify-center bg-gray-900">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-100"></div>
            </div>
        );
    }

    if (error) {
        return <div className="text-center text-red-500 mt-8">{error}</div>;
    }

    return (
        <div className="max-w-2xl mx-auto bg-gray-900 text-white p-8 rounded-xl shadow-lg mt-8">
            <h2 className="text-2xl font-bold mb-6">Edit Product</h2>
            <Form form={form} layout="vertical" onFinish={onFinish}>
                <Form.Item
                    label={<span className="text-white">Hot</span>}
                    name="Hot"
                    rules={[{ required: true, message: "Is this a Hot Package" }]}
                >
                    <Switch
                        checkedChildren="ON"
                        unCheckedChildren="OFF"
                        className="custom-switch"
                    />

                </Form.Item>
                {/* Model Name */}
                <Form.Item
                    label={<span className="text-white">Model Name</span>}
                    name="modelName"
                    rules={[{ required: true, message: "Please enter the model name" }]}
                >
                    <Input className="bg-gray-800 text-white placeholder-gray-400" />
                </Form.Item>

                <Form.Item label={<span className="text-white">Tags</span>} name="tags">
                    <Select
                        mode="multiple"
                        placeholder="Select tags"
                        className="w-full bg-black text-white"
                        options={tagData?.map((tag) => ({ label: tag, value: tag }))}
                    />
                </Form.Item>

                {/* Description */}
                <Form.Item
                    label={<span className="text-white">Description</span>}
                    name="description"
                    rules={[{ required: true, message: "Please enter the description" }]}
                >
                    <TextArea
                        rows={3}
                        className="bg-gray-800 text-white placeholder-gray-400"
                    />
                </Form.Item>

                {/* Price, Discount, Special Discount */}
                <div className="flex gap-4">
                    <Form.Item
                        label={<span className="text-white">Price (₹)</span>}
                        name="price"
                        className="flex-1"
                    >
                        <InputNumber<number>
                            min={0}
                            className="w-full bg-gray-800 text-white"
                            formatter={(value) => (value ? `₹${value}` : "")}
                            parser={(value) =>
                                value ? Number(value.replace(/[₹,\s]/g, "")) : 0
                            }
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
                            formatter={(value) => (value ? `${value}%` : "")}
                            parser={(value) =>
                                value ? Number(value.replace(/%/g, "")) : 0
                            }
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
                            formatter={(value) => (value ? `${value}%` : "")}
                            parser={(value) =>
                                value ? Number(value.replace(/%/g, "")) : 0
                            }
                        />
                    </Form.Item>
                </div>

                {/* Stock Count */}
                <Form.Item
                    label={<span className="text-white">Stock Count</span>}
                    name="stockCount"
                >
                    <InputNumber<number>
                        min={0}
                        className="w-full bg-gray-800 text-white"
                        parser={(value) => (value ? Number(value) : 0)}
                    />
                </Form.Item>


                <Form.Item
                    label={<span className="text-white">Available Sizes</span>}
                    name="availableSizes"
                >
                    <Input
                        placeholder="Type sizes (e.g., S, M, L, XL or custom text)"
                        className="w-full bg-gray-800 text-white placeholder-gray-400"
                    />
                </Form.Item>




                {/* Photos */}
                <Form.Item label={<span className="text-white">Photos</span>}>
                    <Upload
                        listType="picture-card"
                        fileList={fileList}
                        onChange={handleUploadChange}
                        beforeUpload={() => false}
                        multiple
                        maxCount={5}
                        accept="image/*"
                        className="dark"
                    >
                        {fileList.length < 5 && (
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
                        Update Product
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

export default EditProduct;
