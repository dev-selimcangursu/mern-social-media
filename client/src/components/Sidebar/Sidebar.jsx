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

function Sidebar() {
  const stats = [
    { value: "472K", label: "Post" },
    { value: "12.5K", label: "Takipçi" },
    { value: "1.5K", label: "Takip Edilen" },
  ];

  const menuItems = [
    { icon: HomeOutlined, label: "Anasayfa", href: "#" },
    { icon: UserOutlined, label: "Profilim", href: "#" },
    { icon: NotificationOutlined, label: "Bildirimler", href: "#" },
    { icon: MessageOutlined, label: "Mesajlarım", href: "#" },
    { icon: SwapOutlined, label: "MatchBear", href: "#" },
    { icon: SettingOutlined, label: "Ayarlar", href: "#" },
    { icon: LogoutOutlined, label: "Çıkış", href: "#" },
  ];

  return (
    <section className="profile-sidebar" id="profile-sidebar">
      <div className="sidebar-sidebar-logo-wrapper">
        <Logo image="" />
      </div>
      <UserProfile
        name="Kullanıcı İsim Soyisin"
        username="Kullanıcı Adı"
        image="https://st3.depositphotos.com/7486768/17806/v/450/depositphotos_178065822-stock-illustration-profile-anonymous-face-icon-gray.jpg"
      />
      <ProfileStats stats={stats} />
      <Bio text="Sosyal medya biyografi alanı" />
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
