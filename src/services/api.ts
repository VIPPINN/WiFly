import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthResponse, LoginRequest, RegisterRequest, ForgotPasswordRequest, ResetPasswordRequest } from '../types';

const API_BASE_URL = 'http://localhost:8080/api';

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle token expiration
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      // Token expired or invalid
      await AsyncStorage.removeItem('authToken');
      await AsyncStorage.removeItem('user');
      // You might want to redirect to login screen here
    }
    return Promise.reject(error);
  }
);

// Auth API
export const authAPI = {
  login: async (credentials: LoginRequest): Promise<AuthResponse> => {
    const response = await api.post('/auth/login', credentials);
    return response.data;
  },

  register: async (userData: RegisterRequest): Promise<AuthResponse> => {
    const response = await api.post('/auth/register', userData);
    return response.data;
  },

  forgotPassword: async (data: ForgotPasswordRequest): Promise<{ message: string }> => {
    const response = await api.post('/auth/forgot-password', data);
    return response.data;
  },

  resetPassword: async (data: ResetPasswordRequest): Promise<{ message: string }> => {
    const response = await api.post('/auth/reset-password', data);
    return response.data;
  },
};

// WiFi Networks API
export const wifiAPI = {
  getNetworks: async () => {
    const response = await api.get('/wifi-networks');
    return response.data;
  },

  createNetwork: async (networkData: any) => {
    const response = await api.post('/wifi-networks', networkData);
    return response.data;
  },

  updateNetwork: async (id: number, networkData: any) => {
    const response = await api.put(`/wifi-networks/${id}`, networkData);
    return response.data;
  },

  deleteNetwork: async (id: number) => {
    const response = await api.delete(`/wifi-networks/${id}`);
    return response.data;
  },

  getConnectedDevices: async (networkId: number) => {
    const response = await api.get(`/wifi-networks/${networkId}/devices`);
    return response.data;
  },
};

// Support API
export const supportAPI = {
  getTickets: async () => {
    const response = await api.get('/support/tickets');
    return response.data;
  },

  createTicket: async (ticketData: any) => {
    const response = await api.post('/support/tickets', ticketData);
    return response.data;
  },

  getTicketMessages: async (ticketId: number) => {
    const response = await api.get(`/support/tickets/${ticketId}/messages`);
    return response.data;
  },

  sendMessage: async (ticketId: number, message: string) => {
    const response = await api.post(`/support/tickets/${ticketId}/messages`, { message });
    return response.data;
  },
};

export default api;
