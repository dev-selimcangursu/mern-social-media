import React, { useState } from "react";
import "./Register.css";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Input, Button, Modal, Typography, message } from "antd";
import { createUser } from "../../services/userService";
import Swal from "sweetalert2";

const { Title } = Typography;

function Register({ isOpen, onClose }) {
  // Form Alanındaki State
  const [formData, setFormData] = useState({
    fullname: "",
    username: "",
    email: "",
    phone: "",
    date_of_birth: "",
    password: "",
  });

  // İnput Alanlarındaki Değerleri Yakala
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Gelen Verileri Servise Gönder
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await createUser(formData);
      if (result.success) {
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
      console.log(error);
      message.error("Sunucu hatası!");
    }
  };

  return (
    <Modal open={isOpen} footer={null} onCancel={onClose} centered>
      <form onSubmit={handleSubmit} className="register-form">
        <Title level={3}>Hesabınızı Oluşturun!</Title>
        <Input
          name="fullname"
          value={formData.fullname}
          onChange={handleChange}
          placeholder="İsim Soyisim"
          prefix={<UserOutlined />}
          required
          style={{ marginTop: "10px" }}
        />
        <Input
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Kullanıcı Adı"
          prefix={<UserOutlined />}
          required
          style={{ marginTop: "10px" }}
        />
        <Input
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
          placeholder="E-posta"
          prefix={<UserOutlined />}
          required
          style={{ marginTop: "10px" }}
        />
        <Input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Telefon"
          prefix={<UserOutlined />}
          required
          style={{ marginTop: "10px" }}
        />
        <Input
          name="date_of_birth"
          value={formData.date_of_birth}
          onChange={handleChange}
          type="date"
          placeholder="Doğum Tarihi"
          prefix={<UserOutlined />}
          required
          style={{ marginTop: "10px" }}
        />

        <Input.Password
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Şifre"
          prefix={<LockOutlined />}
          required
          style={{ marginTop: "10px" }}
        />
        <Button
          type="primary"
          style={{ marginTop: "10px" }}
          htmlType="submit"
          block
        >
          Kayıt Ol
        </Button>
      </form>
    </Modal>
  );
}

export default Register;
