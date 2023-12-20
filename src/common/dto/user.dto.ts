export interface ILoginResponse {
    token: string;
    user: {
        username: string;
        role: string;
    }
}