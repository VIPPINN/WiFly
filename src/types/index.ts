export interface User {
  id: number;
  username: string;
  email: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  emailVerified: boolean;
}

export interface AuthResponse {
  token: string;
  type: string;
  id: number;
  username: string;
  email: string;
  firstName?: string;
  lastName?: string;
  emailVerified: boolean;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface RegisterRequest {
  username: string;
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
}

export interface ForgotPasswordRequest {
  email: string;
}

export interface ResetPasswordRequest {
  token: string;
  password: string;
}

export interface WiFiNetwork {
  id: number;
  ssid: string;
  password: string;
  userId: number;
  createdAt: string;
  updatedAt: string;
}

export interface ConnectedDevice {
  id: number;
  deviceName: string;
  macAddress: string;
  ipAddress: string;
  wifiNetworkId: number;
  connectedAt: string;
}

export interface SupportTicket {
  id: number;
  subject: string;
  description: string;
  status: 'OPEN' | 'IN_PROGRESS' | 'RESOLVED' | 'CLOSED';
  priority: 'LOW' | 'MEDIUM' | 'HIGH' | 'URGENT';
  userId: number;
  createdAt: string;
  updatedAt: string;
}

export interface TicketMessage {
  id: number;
  message: string;
  timestamp: string;
  sender: 'USER' | 'SUPPORT';
  supportTicketId: number;
}
