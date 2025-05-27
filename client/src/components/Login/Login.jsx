import React from "react";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Input, Button, Modal, Typography } from "antd";
import "./Login.css";
const { Title } = Typography;

function Login({ isOpen, onClose }) {
  const handleCancel = () => {
    onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submit edildi");
    onClose();
  };

  return (
    <Modal open={isOpen} onCancel={handleCancel} footer={null} centered>
      <div id="login-space" className="login-wrapper">
        <form className="login-form" onSubmit={handleSubmit}>
          <Title level={3}>Hesabınıza Giriş Yapın</Title>
          <Input
            size="large"
            placeholder="E-Posta Adresinizi Giriniz..."
            prefix={<UserOutlined />}
            className="login-input"
            type="email"
            required
          />
          <Input.Password
            size="large"
            placeholder="Şifrenizi Giriniz..."
            prefix={<LockOutlined />}
            className="login-input"
            required
          />
          <Button
            type="primary"
            size="large"
            block
            htmlType="submit"
            className="login-button"
          >
            Giriş Yap
          </Button>
          <p className="login-footer-text">
            Hesabınız yok mu? <a href="/register">Kayıt Olun</a>
          </p>
        </form>
      </div>
    </Modal>
  );
}

export default Login;
