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