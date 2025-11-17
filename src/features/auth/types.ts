export interface UserType {
    id: string;
    email: string;
    name: string;
}

export interface LoginResponse {
    accessToken: string;
    refreshToken: string;
    user: UserType;
}

export interface AuthUser {
  id: string;
  email: string;
  name: string;
}

export interface AuthState {
  user: AuthUser | null;
  accessToken: string | null;
  isAuthenticated: boolean;
}