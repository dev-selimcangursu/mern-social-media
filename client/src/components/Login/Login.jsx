import React, { useState } from "react";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Input, Button, Modal, Typography } from "antd";
import { useNavigate } from "react-router-dom"; 
import Swal from "sweetalert2";
import { login } from "../../services/userService";
import "./Login.css";
import { useEffect } from "react";


const { Title } = Typography;

function Login({ isOpen, onClose }) {
  const navigate = useNavigate();
  // Giriş Info Bilgilerini Tutan State
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  // Input Verilerini Yakala
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // Modali Kapat
  const handleCancel = () => {
    onClose();
  };
  // Login Submit İşlemi
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await login(formData);
      if (result.success) {
        localStorage.setItem("token", result.token);
        localStorage.setItem("user", JSON.stringify(result.user));

        await Swal.fire({
          icon: "success",
          title: "Başarılı!",
          text: result.message,
          timer: 2000,
          timerProgressBar: true,
          showConfirmButton: false,
          position: "top-end",
        });

        onClose(); 
        navigate("/anasayfa"); 
      } else {
        await Swal.fire({
          icon: "error",
          title: "Hata!",
          text: result.message,
          confirmButtonText: "Tamam",
          position: "top-end",
        });
      }
    } catch (error) {
      console.log("Login error:", error);
    }
  };
  // Eğerki Kullanıcı Girişi Varsa Direkt Anasayfaya Yönlendirsin
    useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/anasayfa");
    }
  }, [navigate]);

  return (
    <Modal open={isOpen} onCancel={handleCancel} footer={null} centered>
      <div id="login-space" className="login-wrapper">
        <form className="login-form" onSubmit={handleSubmit}>
          <Title level={3}>Hesabınıza Giriş Yapın</Title>
          <Input
            size="large"
            placeholder="E-Posta Adresinizi Giriniz..."
            onChange={handleChange}
            prefix={<UserOutlined />}
            className="login-input"
            name="email"
            type="email"
            required
          />
          <Input.Password
            size="large"
            placeholder="Şifrenizi Giriniz..."
            onChange={handleChange}
            prefix={<LockOutlined />}
            className="login-input"
            name="password"
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
