import axios from "axios";

// Takipçi ve Takip Edilen Sayıların Alınması Servis
export const fetchFollowCount = async (userId) => {
  try {
    const response = await axios.post("http://localhost:5000/follows/count", { userId });
    return response.data;
  } catch (error) {
    console.error("Sayı Alınamadı!:", error);
    throw error;
  }
};

