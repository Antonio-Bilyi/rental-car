import axios from "axios";
import { CarListResponse } from "../types/cars/carListResponse";
import { Car } from "../types/cars/car";

axios.defaults.baseURL = `${process.env.API_URL}`;


export const getCars = async () => {
    const res = await axios.get<CarListResponse>('/cars');

    return res.data;
};


export const getSingleCar = async (id: string) => {
    const res = await axios.get<Car>(`/cars/${id}`);

    return res.data;
};