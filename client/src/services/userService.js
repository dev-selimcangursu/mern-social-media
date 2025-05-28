import axios from "axios";

export const createUser = async (userData) => {
  try {
    const response = await axios.post("http://localhost:5000/user/store", userData);
    return response.data;
  } catch (error) {
    console.error("Kullanıcı Oluşturulamadı!:", error);
    throw error; 
  }
};
export const login = async (loginData) => {
  try {
    const response = await axios.post("http://localhost:5000/user/login", loginData);
    return response.data;
  } catch (error) {
    console.error("Giriş Yapılamadı!:", error);
    throw error; 
  }
};
