import { useMemo } from "react";
import { LoginModel } from "../../../landing/modules/login/model/Login";
import { IRequest } from "../../../providers/request/Request";
import useApiResult from "../useApiResult";

const useGetToken = (loginModel?: LoginModel) => {

    const request = useMemo(() => loginModel ? getToken(loginModel) : undefined, [loginModel]);
    return useApiResult(request);
};


const getToken = (loginModel: LoginModel): IRequest => {
    const urlParams = new URLSearchParams({
        "client_id": process.env.REACT_APP_KEYCLOAK_API_CLIENT_ID!,
        "client_secret": process.env.REACT_APP_KEYCLOAK_API_CLIENT_SECRET!,
        "grant_type": process.env.REACT_APP_KEYCLOAK_API_GRANT_TYPE_PASSWORD!,
        "username": loginModel.username,
        "password": loginModel.password
    });

    return [
        `${process.env.REACT_APP_KEYCLOAK_API_BASE_URL}/auth/realms/${process.env.REACT_APP_KEYCLOAK_API_REALM}/protocol/openid-connect/token`,
        {
            method: "POST",
            body: urlParams
            /*
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            body: [
                `client_id=${process.env.REACT_APP_KEYCLOAK_API_CLIENT_ID}`,
                `client_secret=${process.env.REACT_APP_KEYCLOAK_API_CLIENT_SECRET}`,
                `grant_type=${process.env.REACT_APP_KEYCLOAK_API_GRANT_TYPE_PASSWORD}`,
                `username=${loginModel.username}`,
                `password=${loginModel.password}`,
            ].join("&")
            */
        },
    ];
};

export default useGetToken;