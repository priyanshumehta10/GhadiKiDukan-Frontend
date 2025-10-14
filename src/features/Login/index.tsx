import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { loginRequest, resetLoginError } from "./slice";
import { Input, Button, Modal, message, Typography } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone, CloseCircleFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Text } = Typography;

export default function LoginModal() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state: RootState) => state.login);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validatePassword = (password: string) => {
    if (password === "123") return true;
    return /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
  };

  const handleForgotPassword = () => {
    navigate("/forgetPassword");
    dispatch(resetLoginError());
  };

  const handleSignUp = () => {
    navigate("/signup");
    dispatch(resetLoginError());
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      message.error("Please enter a valid email!");
      return;
    }
    if (!validatePassword(password)) {
      message.error(
        "Password must be at least 8 characters, include 1 uppercase, 1 number, and 1 special character."
      );
      return;
    }
    dispatch(resetLoginError());
    dispatch(loginRequest({ email, password }));
  };

  const handleClose = () => {
    navigate("/");
    dispatch(resetLoginError());
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

      {/* App Name */}
      <h2 style={{ marginBottom: 8, fontWeight: "bold", fontSize: 24, textAlign: "center" }}>
        Ghadi ki Dukan
      </h2>
      <Text style={{ marginBottom: 24, fontSize: 13, color: "#666" }}>
        Login to continue
      </Text>

      <form onSubmit={handleSubmit} style={{ width: "100%" }}>
        <Input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ marginBottom: 12 }}
          className="!border-gray-500 focus:!border-blue-500"
        />

        <Input.Password
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
          style={{ marginBottom: 8 }}
          className="!border-gray-500 focus:!border-blue-500"
        />

        <Text
          onClick={handleForgotPassword}
          style={{
            fontSize: 12,
            color: "#1677ff",
            cursor: "pointer",
            display: "block",
            textAlign: "right",
            marginBottom: 16,
          }}
        >
          Forgot Password?
        </Text>

        {error && (
          <Text type="danger" style={{ display: "block", marginBottom: 8 }}>
            {error}
          </Text>
        )}

        <Button
          type="primary"
          htmlType="submit"
          block
          loading={loading}
          style={{ marginBottom: 12 }}
        >
          Login
        </Button>

        <Text style={{ fontSize: 13 }}>
          Not a member?{" "}
          <span
            onClick={handleSignUp}
            style={{
              color: "#1677ff",
              cursor: "pointer",
              fontWeight: 500,
            }}
          >
            Sign Up
          </span>
        </Text>
      </form>
    </Modal>
  );
}
