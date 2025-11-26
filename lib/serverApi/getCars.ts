import { nextServer } from "../api";
import { CarListResponse } from "../../types/cars/carListResponse";


export const getCars = async () => {
    const res = await nextServer.get<CarListResponse>('/cars');

    return res.data;
};
