const API = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
    headers: {
      "Content-Type": "application/json",
    },
  });
  
  // Add token to headers if available
  API.interceptors.request.use((config) => {
    const token = localStorage.getItem("token"); // Assuming token is stored in localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });
  
  export default API;
  