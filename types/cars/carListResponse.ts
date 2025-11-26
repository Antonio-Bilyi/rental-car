import { Car } from "./car";

export type CarListResponse = {
    cars: Car[],
    totalCars: number,
    page: number,
    totalPages: number,
};