import axios from "axios";
import { CarListResponse } from "../types/cars/carListResponse";

axios.defaults.baseURL = `${process.env.API_URL}`;


export const getCars = async () => {
    const res = await axios.get<CarListResponse>('/cars');

    return res.data;
};