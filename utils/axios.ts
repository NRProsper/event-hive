import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const API = axios.create({
    baseURL: API_URL,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    }
})


export default API;