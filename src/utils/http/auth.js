import axios from "axios";

const baseUrl = import.meta.env.VITE_BACKEND_HOST_ISE

export const loginUser = (body) => {
    const loginUrl = baseUrl + "/api/auth/login"
    console.log(loginUrl)
    return axios.post(loginUrl, body, {
        headers: {
            'Content-Type': 'application/json',
        },
    })
}