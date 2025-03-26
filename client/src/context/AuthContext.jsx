import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const response = await axios.post('http://localhost:4000/api/auth/is-auth', {}, {
        withCredentials: true
      });
      if (response.data.success) {
        setUser(response.data.user);
      }
    } catch (error) {
      console.error('Auth check failed:', error);
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    try {
      console.log('Attempting login with:', { email });
      const response = await axios.post('http://localhost:4000/api/auth/login', {
        email,
        password
      }, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      console.log('Login response:', response.data);
      
      if (response.data.success) {
        setUser(response.data.user);
        return { success: true };
      } else {
        return { success: false, error: response.data.message || 'Login failed' };
      }
    } catch (error) {
      console.error('Login error:', error.response?.data || error);
      return { 
        success: false, 
        error: error.response?.data?.message || error.message || 'Login failed' 
      };
    }
  };

  const register = async (userData) => {
    try {
      const response = await axios.post('http://localhost:4000/api/auth/register', userData);
      return { success: true, message: response.data.message };
    } catch (error) {
      return { success: false, error: error.response?.data?.message || 'Registration failed' };
    }
  };

  const logout = async () => {
    try {
      await axios.post('http://localhost:4000/api/auth/logout', {}, {
        withCredentials: true
      });
      setUser(null);
      return { success: true };
    } catch (error) {
      return { success: false, error: error.response?.data?.message || 'Logout failed' };
    }
  };

  const sendVerifyOtp = async () => {
    try {
      const response = await axios.post('http://localhost:4000/api/auth/send-verify-otp', {}, {
        withCredentials: true
      });
      return { success: true, message: response.data.message };
    } catch (error) {
      return { success: false, error: error.response?.data?.message || 'Failed to send verification OTP' };
    }
  };

  const verifyEmail = async (otp) => {
    try {
      const response = await axios.post('http://localhost:4000/api/auth/verify-account', { otp }, {
        withCredentials: true
      });
      return { success: true, message: response.data.message };
    } catch (error) {
      return { success: false, error: error.response?.data?.message || 'Email verification failed' };
    }
  };

  const sendResetOtp = async (email) => {
    try {
      const response = await axios.post('http://localhost:4000/api/auth/send-reset-otp', { email });
      return { success: true, message: response.data.message };
    } catch (error) {
      return { success: false, error: error.response?.data?.message || 'Failed to send reset OTP' };
    }
  };

  const resetPassword = async (otp, newPassword) => {
    try {
      const response = await axios.post('http://localhost:4000/api/auth/reset-password', {
        otp,
        newPassword
      });
      return { success: true, message: response.data.message };
    } catch (error) {
      return { success: false, error: error.response?.data?.message || 'Password reset failed' };
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        register,
        logout,
        sendVerifyOtp,
        verifyEmail,
        sendResetOtp,
        resetPassword
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}; 