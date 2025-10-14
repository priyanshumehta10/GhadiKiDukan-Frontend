import { useEffect, useState } from "react";
import { Input, Button, Modal, message, Alert, Typography } from "antd";
import { CloseCircleFilled, EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { forgetPasswordRequest, resetRequest, resetCreated } from "./slice";
import type { RootState } from "../../redux/store";

const { Text } = Typography;

export default function ForgotPasswordModal() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  const { loading, created, error, reset, loadingReset } = useSelector(
    (state: RootState) => state.forgetPassword
  );

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePassword = (password: string) =>
    /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

  const handleClose = () => {
    navigate(-1);
  };

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      message.error("Please enter a valid email!");
      return;
    }
    dispatch(forgetPasswordRequest({ email }));
    dispatch(resetCreated());
  };

  useEffect(() => {
    if (created) setOtpSent(true);
  }, [created]);

  useEffect(() => {
    dispatch(resetCreated());
  }, [reset]);

  const handleResetPassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (!otp.trim()) {
      message.error("Please enter OTP!");
      return;
    }
    if (!validatePassword(newPassword)) {
      message.error(
        "Password must be at least 8 characters, include 1 uppercase, 1 number, and 1 special character."
      );
      return;
    }
    if (newPassword !== confirmPassword) {
      message.error("Passwords do not match!");
      return;
    }
    dispatch(resetRequest({ email, otp, newPassword }));
    message.success("Password reset successful! Please login with new credentials.");
    navigate("/login");
    dispatch(resetCreated());
  };

  return (
    <Modal
      open={true}
      footer={null}
      closable={false}
      centered
      width={400}
      bodyStyle={{
        padding: "24px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <CloseCircleFilled
        onClick={handleClose}
        style={{
          position: "absolute",
          top: 16,
          right: 16,
          fontSize: 20,
          color: "#999",
          cursor: "pointer",
        }}
      />

      <h2 style={{ marginBottom: 8, fontWeight: "bold", fontSize: 22, textAlign: "center" }}>
        Forgot Password
      </h2>
      <Text style={{ marginBottom: 24, fontSize: 13, color: "#666" }}>
        Reset your account credentials
      </Text>

      {error && (
        <Alert
          message={error}
          type="error"
          showIcon
          style={{ marginBottom: 16, width: "100%" }}
        />
      )}

      {!otpSent ? (
        <form onSubmit={handleSendOtp} style={{ width: "100%" }}>
          <Input
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ marginBottom: 12 }}
            className="!border-gray-500 focus:!border-blue-500"

          />
          <Button
            type="primary"
            htmlType="submit"
            block
            loading={loading}
          >
            Send OTP
          </Button>
        </form>
      ) : (
        <form onSubmit={handleResetPassword} style={{ width: "100%" }}>
          <Input
            placeholder="Email"
            value={email}
            disabled
            style={{ marginBottom: 12 }}
            className="!border-gray-500 focus:!border-blue-500"

          />
          <Input
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            style={{ marginBottom: 12 }}
            className="!border-gray-500 focus:!border-blue-500"

          />
          <Input.Password
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            style={{ marginBottom: 12 }}
            className="!border-gray-500 focus:!border-blue-500"

          />
          <Input.Password
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            style={{ marginBottom: 16 }}
            className="!border-gray-500 focus:!border-blue-500"

          />
          <Button
            type="primary"
            htmlType="submit"
            block
            loading={loadingReset}
          >
            Reset Password
          </Button>
        </form>
      )}
    </Modal>
  );
}
