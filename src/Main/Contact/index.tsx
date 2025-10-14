import { Form, Input, Button, Card, Alert } from "antd";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { createInquiryRequest, resetCreated } from "./slice";
import type { RootState } from "../../redux/store";

export default function ContactPage() {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const { loadingContact, created, errorContact, InquiryData } = useSelector(
    (state: RootState) => state.Inquiry
  );

  const onFinish = (values: any) => {
    dispatch(createInquiryRequest(values));
  };

  // Reset form fields when inquiry is successfully created
  useEffect(() => {
    if (created) {
      form.resetFields();
    }
  }, [created, form]);

  useEffect(() => {
    if (created && InquiryData) {
      const timer = setTimeout(() => {
        dispatch(resetCreated());
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [created, InquiryData, dispatch]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-xl"
      >
        {errorContact && (
          <Alert
            message={errorContact}
            type="error"
            showIcon
            className="mb-4 rounded-md"
          />
        )}

        {created && InquiryData && (
          <Alert
            message={InquiryData}
            type="success"
            showIcon
            className="mb-4 rounded-md"
          />
        )}

        <Card className="shadow-sm border rounded-xl p-6 bg-white">
          <h1 className="text-2xl font-semibold text-center mb-6 text-gray-800">
            Contact Us
          </h1>

          <Form form={form} layout="vertical" onFinish={onFinish}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Form.Item
                name="firstName"
                label="First Name"
                rules={[{ required: true, message: "Please enter first name" }]}
              >
                <Input className="rounded-md border-gray-300" />
              </Form.Item>

              <Form.Item
                name="lastName"
                label="Last Name"
                rules={[{ required: true, message: "Please enter last name" }]}
              >
                <Input className="rounded-md border-gray-300" />
              </Form.Item>
            </div>

            <Form.Item
              name="email"
              label="Email"
              rules={[{ required: true, type: "email", message: "Enter a valid email" }]}
            >
              <Input className="rounded-md border-gray-300" />
            </Form.Item>

            <Form.Item
              name="mobileNumber"
              label="Mobile Number"
              rules={[{ required: true, message: "Please enter mobile number" }]}
            >
              <Input className="rounded-md border-gray-300" />
            </Form.Item>

            <Form.Item
              name="message"
              label="Message"
              rules={[{ required: true, message: "Please enter your message" }]}
            >
              <Input.TextArea rows={4} className="rounded-md border-gray-300" />
            </Form.Item>

            <div className="flex justify-center">
              <Button
                type="primary"
                htmlType="submit"
                className="px-6 py-2 rounded-full font-medium"
                style={{
                  backgroundColor: "#1a2753",
                  borderColor: "#1a2753",
                }}
              >
                {loadingContact ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  </div>
                ) : (
                  "Send"
                )}
              </Button>
            </div>
          </Form>
        </Card>
      </motion.div>
    </div>
  );
}
