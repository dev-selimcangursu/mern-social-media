import React from "react";
import "./Register.css";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Input, Button, Modal, Typography } from "antd";
const { Title } = Typography;

function Register({ isOpen, onClose }) {
  const handleCancel = () => {
    onClose();
  };

  return (
    <Modal open={isOpen} footer={null} onCancel={handleCancel} centered>
      <form action="">
        <div id="register-space" className="login-wrapper">
          <form className="register-form">
            <Title level={3}>Hesabınızı Oluşturun!</Title>
            <Input
              size="large"
              placeholder="İsim Soyisim Giriniz..."
              prefix={<UserOutlined />}
              className="register-input"
              type="text"
              required
            />
            <Input
              size="large"
              placeholder="E-Posta Adresinizi Giriniz..."
              prefix={<UserOutlined />}
              className="register-input"
              type="email"
              required
            />
            <Input
              size="large"
              placeholder="Telefon Numaranızı Giriniz..."
              prefix={<UserOutlined />}
              className="register-input"
              type="tel"
              required
            />
            <Input
              size="large"
              placeholder="Doğum Tarihinizi Giriniz..."
              prefix={<UserOutlined />}
              className="register-input"
              type="date"
              required
            />
            <Input.Password
              size="large"
              placeholder="Şifrenizi Giriniz..."
              prefix={<LockOutlined />}
              className="register-input"
              required
            />
            <Button
              type="primary"
              size="large"
              block
              htmlType="submit"
              className="register-button"
            >
              Kayıt Ol
            </Button>
            <p className="register-footer-text">
              Hesabınız var mı ? <a href="/login">Giriş Yap</a>
            </p>
          </form>
        </div>
      </form>
    </Modal>
  );
}

export default Register;
