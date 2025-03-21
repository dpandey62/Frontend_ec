import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_BACKEND_URL || "https://backend-ecommerce-git-main-dpandey62s-projects.vercel.app";

// Function to send a password reset email
export const selectMailSent = async (email) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/api/Users/reset-password`, { email });
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || "Error sending email");
    }
};

// Function to handle password reset request
export const resetPasswordRequestAsync = async (token, newPassword) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/api/Users/reset-password/${token}`, { newPassword });
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || "Error resetting password");
    }
};
