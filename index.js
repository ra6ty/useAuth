import React, {useEffect, useState} from 'react';

export const useAuth = () => {
    const [token, setToken] = useState("");
    const [isReady, setIsReady] = useState(false)

    useEffect(() => {
        const userData = localStorage.getItem("userData");
        let data;

        if (userData) {
            data = JSON.parse(userData)
        }

        if (data && data.token) {
            login(data.token)
        }
        setIsReady(true)
    }, [])

    const login = (JWTtoken) => {
        setToken(JWTtoken)

        localStorage.setItem("userData", JSON.stringify({
            token: JWTtoken
        }))
    }

    const logout = () => {
        setToken("")
        localStorage.removeItem("userData")
    }
    return {token, isReady, login, logout}
};
