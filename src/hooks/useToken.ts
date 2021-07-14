import { useState } from "react";

const STORAGE_USER_TOKEN_KEY = "user_token"

export interface UserToken {
    accessToken: string,
    refreshToken: string,
    expiresIn: number,
    refreshExpiresIn: number,
}

export type UserTokenHook = [UserToken, (token: UserToken) => void, () => void];

export const useToken = (): UserTokenHook => {

    const getToken = () => {
        const userToken = localStorage.getItem(STORAGE_USER_TOKEN_KEY);
        return userToken ? JSON.parse(userToken) : undefined;
    }
    const [token, setToken] = useState<UserToken>(getToken);

    const saveToken = (userToken: UserToken) => {
        localStorage.setItem(STORAGE_USER_TOKEN_KEY, JSON.stringify(userToken));
        setToken(userToken)
    }

    const resetToken = () => {
        localStorage.removeItem(STORAGE_USER_TOKEN_KEY);
    }

    return [token, saveToken, resetToken];
}