import React from "react";
import { Button, Typography, Space } from "antd";
import "./Home.css";
const { Title, Text } = Typography;
import { useState } from "react";
import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";
function Home() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const showLoginModal = () => {
    setIsLoginModalOpen(true);
  };
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const showRegisterModal = () => {
    setIsRegisterModalOpen(true);
  };

  return (
    <>
      <div className="home-container">
        <div className="home-container-logo">
          <img src="" alt="metBear-logo" />
        </div>
        <div className="home-container-content">
          <Space
            direction="vertical"
            id="home-space"
            size="middle"
            style={{ width: "100%" }}
          >
            <Title level={2}>MetBear | Tanışmanın En Doğal Hali</Title>
            <Text type="secondary" style={{ fontSize: 16 }}>
              Hemen Topluluğa Katıl !
            </Text>
            <Button
              type="primary"
              size="large"
              onClick={showRegisterModal}
              block
            >
              Hesap Oluştur
            </Button>
            <Text type="secondary" style={{ fontSize: 12 }}>
              Kaydolduğunuzda Çerez Kullanımı da Dahil Olmak Üzere Hizmet
              Şartları ve Gizlilik Politikasını Kabul Etmiş Oluyorsunuz.
            </Text>
            <Title level={4}>Zaten bir hesabın var mı?</Title>
            <Button type="default" size="large" block onClick={showLoginModal}>
              Giriş Yap
            </Button>
          </Space>
          <Login
            isOpen={isLoginModalOpen}
            onClose={() => setIsLoginModalOpen(false)}
          />
          <Register
            isOpen={isRegisterModalOpen}
            onClose={() => setIsRegisterModalOpen(false)}
          />
        </div>
      </div>
    </>
  );
}

export default Home;
