import React from "react";
import "./Dashboard.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Content from "../../components/Content/Content";
import StoryHighlight from "../../components/Sidebar/StoryHighlight/StoryHighlight";
import PostCard from "../../components/PostCard/PostCard";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { storiesGet } from "../../features/stories/storieSlice";
import { jwtDecode } from "jwt-decode";
function Dashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    id: "",
    name: "",
    username: "",
    email: "",
    image: "",
    biography: "",
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUser({
          id: decoded.userId || "",
          name: decoded.fullname || "",
          username: decoded.username || "",
          image: decoded.image || "",
          biography: decoded.biography || "",
          email: decoded.email || "",
        });
      } catch (error) {
        console.error("Geçersiz token:", error);
        setUser({
          id: "",
          name: "",
          username: "",
          email: "",
          image: "",
          biography: "",
        });
      }
    } else {
      navigate("/");
    }
  }, [navigate]);

  useEffect(() => {
    if (user.id) {
      dispatch(storiesGet(user.id));
    }
  }, [dispatch, user.id]);

  const getStories = useSelector((state) => state.stories.story);

  console.log(getStories);
  return (
    <div className="dashboard__container">
      <Sidebar />
      <Content>
        <section className="story-highlight-section">
          <h3 className="section-title">Çevrendeki Hikayeler</h3>
          <div className="story-highlight-list">
            <StoryHighlight getStories={getStories} />
          </div>
        </section>
        <section className="post-section">
          <h3 className="section-title">Gönderiler</h3>
          <div className="post-section-list">
            <PostCard
              user={{
                name: "selimcangursu3",
                avatar: "https://randomuser.me/api/portraits/men/45.jpg",
              }}
              image="https://www.open.edu/openlearn/pluginfile.php/3143042/tool_ocwmanage/image/0/dil_1_OLHP_786x400.jpg"
              description="Bugün doğada harika zaman geçirdim 🌲"
            />
            <PostCard
              user={{
                name: "ayse.erdem",
                avatar: "https://randomuser.me/api/portraits/women/44.jpg",
              }}
              image="data:image/png;base64,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"
              description="Şehirde akşam yürüyüşü 🏙️"
            />
            <PostCard
              user={{
                name: "fatih.yildiz",
                avatar: "https://randomuser.me/api/portraits/men/12.jpg",
              }}
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnUKUFc2DH-se3V8fdp11Mh5Epl1FeP6CFMg&s"
              description="Kahvemi aldım, kodlamaya devam ☕💻"
            />
          </div>
        </section>
      </Content>
    </div>
  );
}

export default Dashboard;
