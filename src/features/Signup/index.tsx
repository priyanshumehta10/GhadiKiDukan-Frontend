import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { signupRequest, signupReset } from "./slice";
import { Input, Button, Modal, message } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export default function SignUpModal() {
    const dispatch = useDispatch();
    const { loading, error, signupConfirmation } = useSelector(
        (state: RootState) => state.signup
    );
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const validateEmail = (email: string) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const validatePassword = (password: string) =>
        /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(password);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name.trim()) return message.error("Enter your full name!");
        if (!validateEmail(email)) return message.error("Enter a valid email!");
        if (!validatePassword(password))
            return message.error(
                "Password must have 8+ chars, 1 uppercase, 1 number & 1 symbol."
            );
        if (password !== confirmPassword)
            return message.error("Passwords do not match!");

        dispatch(signupRequest({ name, email, password }));
    };

    useEffect(() => {
        if (signupConfirmation) {
            message.success("Account created! Please log in.");
            navigate("/login");
            dispatch(signupReset());
        }
    }, [signupConfirmation]);

    const handleClose = () => {
        navigate("/");
        dispatch(signupReset());
    };

    const handleLogin = () => {
        navigate("/login");
        dispatch(signupReset());
    };

    return (
        <Modal
            open
            footer={null}
            closable={false}
            centered
            width={400}
            className="rounded-xl"
            bodyStyle={{ padding: "2rem" }}
        >
            <h2 className="text-center text-xl font-semibold mb-6">Sign Up</h2>

            <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                    <Input
                        placeholder="Full Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="!border-gray-500 focus:!border-blue-500"

                    />
                </div>
                <div>
                    <Input
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="!border-gray-500 focus:!border-blue-500"

                    />
                </div>
                <div>
                    <Input.Password
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="!border-gray-500 focus:!border-blue-500"

                        iconRender={(visible) =>
                            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                        }
                    />
                </div>
                <Input.Password
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="!border-gray-500 focus:!border-blue-500"

                    iconRender={(visible) =>
                        visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                    }
                />

                {error && <p className="text-red-500 text-sm">{error}</p>}

                <Button
                    type="primary"
                    htmlType="submit"
                    block
                    loading={loading}
                    className="font-semibold"
                >
                    Sign Up
                </Button>

                <p className="text-center text-sm mt-2">
                    Already a member?{" "}
                    <span
                        onClick={handleLogin}
                        className="text-blue-600 cursor-pointer hover:underline"
                    >
                        Login
                    </span>
                </p>
            </form>

            <Button
                type="text"
                block
                onClick={handleClose}
                className="mt-4 text-gray-500"
            >
                Cancel
            </Button>
        </Modal>
    );
}
