import React from "react";
import "./Sidebar.css";
import Logo from "../Logo/Logo";
import {
  HomeOutlined,
  UserOutlined,
  NotificationOutlined,
  MessageOutlined,
  SwapOutlined,
  SettingOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import UserProfile from "./UserProfile/UserProfile";
import ProfileStats from "./ProfileStats/ProfileStats";
import Bio from "./Bio/Bio";
import SidebarMenu from "./SidebarMenu/SidebarMenu";
import StoryHighlight from "./StoryHighlight/StoryHighlight";
import { jwtDecode } from "jwt-decode";
import Swal from "sweetalert2";

function Sidebar() {
  const stats = [
    { value: "22", label: "Post" },
    { value: "12.5K", label: "Takipçi" },
    { value: "1.5K", label: "Takip Edilen" },
  ];

  // Güvenli çıkış fonksiyonu
  const handleLogout = () => {
    Swal.fire({
      title: "Çıkış yapmak istediğinizden emin misiniz?",
      text: "Oturumunuz sonlandırılacak.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Evet, çıkış yap",
      cancelButtonText: "Hayır",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("token");
        window.location.href = "/";
      }
    });
  };

  let user = {
    name: "",
    username: "",
    email: "",
    image: "",
    biography: "",
  };

  const token = localStorage.getItem("token");
  if (token) {
    try {
      const decoded = jwtDecode(token);
      console.log("Decoded JWT Token:", decoded);

      user = {
        name: decoded.fullname,
        username: decoded.username,
        image: decoded.image,
        biography: decoded.biography,
        email: decoded.email,
      };
    } catch (error) {
      console.error("Geçersiz token:", error);
    }
  }

  const menuItems = [
    { icon: HomeOutlined, label: "Anasayfa", href: "#" },
    { icon: UserOutlined, label: "Profilim", href: "#" },
    { icon: NotificationOutlined, label: "Bildirimler", href: "#" },
    { icon: MessageOutlined, label: "Mesajlarım", href: "#" },
    { icon: SwapOutlined, label: "MatchBear", href: "#" },
    { icon: SettingOutlined, label: "Ayarlar", href: "#" },
    { icon: LogoutOutlined, label: "Çıkış", href: "#", onClick: handleLogout },
  ];
  return (
    <section className="profile-sidebar" id="profile-sidebar">
      <div className="sidebar-sidebar-logo-wrapper">
        <Logo image="" />
      </div>
      <UserProfile
        name={user.name}
        username={user.username}
        image={user.image}
        email={user.email}
      />
      <ProfileStats stats={stats} />
      <Bio text={user.biography} />
      <div className="profile-sidebar-story-highlights-wrapper">
        <StoryHighlight name="Öne Çıkan Adı 1" />
        <StoryHighlight name="Öne Çıkan Adı 2" />
        <StoryHighlight name="Öne Çıkan Adı 3" />
        <StoryHighlight name="Öne Çıkan Adı 4" />
      </div>
      <SidebarMenu items={menuItems} />
    </section>
  );
}

export default Sidebar;
