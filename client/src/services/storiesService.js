import axios from "axios";

export const fetchStories = async (authId) => {
  try {
    const response = await axios.get(`http://localhost:5000/stories/get?authId=${authId}`);
    return response.data;
  } catch (error) {
    console.error("Öne Çıkan Hikayeler Alınamadı! :", error);
    throw error;
  }
};

