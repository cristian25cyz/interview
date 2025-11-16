import type { LoginResponse } from "../types";

export async function loginRequest(email: string, password: string): Promise<LoginResponse> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(email === 'test@example.com' && password === '123456') {
                resolve({
                    accessToken: 'mock_access_token',
                    refreshToken: 'mock_refresh_token',
                    user: {
                        id: "1",
                        email,
                        name: "Test User"
                    },
                });
            } else {
                reject (new Error('Invalid email or password'));
            }
        }, 800);
    });
}