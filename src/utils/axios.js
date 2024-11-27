// utils/axios.js
import axios from 'axios';

// Axios instansiyasini yaratish
const instance = axios.create({
  baseURL: 'https://trello.vimlc.uz',  // API bazaviy URL
  timeout: 10000,  // So'rovga kutish vaqti
});

// Faqat GET so'rovlar uchun interseptor
instance.interceptors.request.use(
  (config) => {
    if (config.method === 'get') {
      console.log('GET so\'rovi yuborildi:', config); // Debug maqsadida
    }
    return config;  // So'rovni davom ettirish
  },
  (error) => {
    return Promise.reject(error);  // Xatolikni qayta ishlash
  }
);

// Javobni qayta ishlash
instance.interceptors.response.use(
  (response) => {
    return response.data;  // Javobni qayta ishlash (faqat kerakli ma'lumotni qaytarish)
  },
  (error) => {
    console.error('Xatolik:', error.response ? error.response.data : error.message);
    return Promise.reject(error);  // Xatolikni qayta ishlash
  }
);

// Instansiyani eksport qilish
export default instance;
