import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { userFollowCount } from "../../features/userFollows/userFollowsSlice";

function Sidebar() {
  const dispatch = useDispatch();
  // Takip verilerini global state'ten alıyoruz
  const followCount = useSelector((state) => state.userFollows.count);
  // Kullanıcı bilgilerini tutacak local state
  const [user, setUser] = useState({
    id: "",
    name: "",
    username: "",
    email: "",
    image: "",
    biography: "",
  });
  // İlk yüklemede localStorage'dan token'ı alır ve decode ederek kullanıcı bilgilerini set eder
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUser({
          id: decoded.userId,
          name: decoded.fullname,
          username: decoded.username,
          image: decoded.image,
          biography: decoded.biography,
          email: decoded.email,
        });
      } catch (error) {
        console.error("Geçersiz token:", error);
      }
    }
  }, []);
  // Kullanıcı ID mevcutsa takip bilgilerini çekmek için Redux action
  useEffect(() => {
    if (user.id) {
      dispatch(userFollowCount(user.id));
    }
  }, [dispatch, user.id]);

  // Profil istatistikleri (Post sayısı sabit, takipçi/takip edilen redux üzerinden gelir)
  const stats = [
    { value: "0", label: "Post" },
    { value: followCount.followingMeCount, label: "Takipçi" },
    { value: followCount.meFollowCount, label: "Takip Edilen" },
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
  // Sidebar menüsünde gösterilecek menü öğeleri
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
