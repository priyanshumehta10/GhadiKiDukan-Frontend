import React, { useEffect, useRef } from "react";
import {
  Carousel,
  Tag,
  Typography,
  Button,
  Space,
  Tooltip,
  Card,
} from "antd";
import { ShareAltOutlined, FireOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../../redux/store";
import { fetchPackageDetailsRequest } from "../slice";
import { useParams } from "react-router-dom";


const { Title, Paragraph, Text } = Typography;

const PackageDetails: React.FC = () => {
  console.log("enter");

  const fetchData = useRef(false);
  const dispatch = useDispatch();
  const { id } = useParams(); // 👈 This will be '68efd5a78a92f99ca6b86dad'
  console.log(id);

  useEffect(() => {
    if (id) {
      fetchData.current = true;
      dispatch(fetchPackageDetailsRequest(id));

    }
  }, []);
  const { PackageDetailsdata, PackageDetailsLoading, PackageDetailsError } = useSelector(
    (state: RootState) => state.packageFront
  );

  // -------------------- Loading --------------------
  if (PackageDetailsLoading) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  // -------------------- Error --------------------
  if (PackageDetailsError) {
    return (
      <div className="h-screen flex items-center justify-center bg-red-100">
        <p className="text-red-600 font-semibold text-lg">
          {PackageDetailsError || "Something went wrong. Please try again."}
        </p>
      </div>
    );
  }

  if (!PackageDetailsdata) {
    return (
      <div className="h-screen flex items-center justify-center bg-[#C6DCFF]">
        <p className="text-[#1a2753] text-lg font-semibold">
          No package data available.
        </p>
      </div>
    );
  }

  const handleShare = () => {
    const phoneNumber = "916397350949";
    const productLink = window.location.href;
    const mainImage = PackageDetailsdata.photos?.[0]?.url || "";

    const message = `Check out this product 👇\n\n Model Name: *${PackageDetailsdata.modelName}*\n💬 Description: ${PackageDetailsdata.description}\n💰 Price: ₹${PackageDetailsdata.finalPrice}\n\n🖼️ Image: ${mainImage}\n🔗 View here: ${productLink}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };



  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-8 px-4">
      {/* -------------------- Carousel -------------------- */}
      <div className="w-full max-w-4xl shadow-md rounded-xl overflow-hidden bg-white">
        <Carousel autoplay className="rounded-xl">
          {PackageDetailsdata.photos.map((photo: any) => (
            <img
              key={photo._id}
              src={photo.url}
              alt={PackageDetailsdata.modelName}
              className="w-full h-[420px] object-cover"
            />
          ))}
        </Carousel>
      </div>

      {/* -------------------- Details -------------------- */}
      <Card
        className="w-full max-w-4xl mt-6 rounded-2xl shadow-sm border-none"
        bodyStyle={{ padding: "24px 32px" }}
      >
        <div className="flex flex-col md:flex-row md:justify-between md:items-start">
          <div className="flex-1 pr-4">
            <div className="flex items-center gap-2">
              <Title level={2} className="!mb-1 !text-gray-900 capitalize">
                {PackageDetailsdata.modelName}
              </Title>
              {PackageDetailsdata.Hot && (
                <Tag
                  icon={<FireOutlined />}
                  color="volcano"
                  style={{ fontWeight: 600 }}
                >
                  Hot Item
                </Tag>
              )}
            </div>

            <Paragraph className="!text-gray-600 !mb-4 leading-relaxed">
              {PackageDetailsdata.description}
            </Paragraph>

            {/* Price Section */}
            <Space size="middle" className="!mb-4">
              <Text strong style={{ fontSize: 24, color: "#1677ff" }}>
                ₹{PackageDetailsdata.finalPrice}
              </Text>
              {PackageDetailsdata.discount > 0 && (
                <>
                  <Text delete type="secondary">
                    ₹{PackageDetailsdata.price}
                  </Text>
                  <Tag color="green">{PackageDetailsdata.discount}% OFF</Tag>
                </>
              )}
            </Space>

            {/* Stock and Sizes */}
            <div className="space-y-1 text-gray-600">
              <Text>
                Stock:{" "}
                {PackageDetailsdata.stockCount > 0 ? (
                  <Text strong className="text-green-600">
                    In Stock
                  </Text>
                ) : (
                  <Text strong className="text-red-500">
                    Out of Stock
                  </Text>
                )}
              </Text>
              <br />
              {PackageDetailsdata.availableSizes && (
                <Text>
                  Sizes:{" "}
                  <Text strong>
                    {PackageDetailsdata.availableSizes.split(",").join(", ")}
                  </Text>
                </Text>
              )}
            </div>
          </div>

          {/* Share Button */}
          <div className="mt-6 md:mt-0">
            <Tooltip title="Share this product">
              <Button
                type="primary"
                icon={<ShareAltOutlined />}
                onClick={handleShare}
                size="large"
                shape="round"
                className="hover:scale-105 transition-transform duration-200"
              >
                Share
              </Button>
            </Tooltip>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PackageDetails;
