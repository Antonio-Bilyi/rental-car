'use client';

import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { getSingleCar } from "../../../lib/api";
import Loader from "../../../components/Loader/Loader";


export default function CatalogDetailsClient() {
    const { id } = useParams<{ id: string }>();

    const { data: car, isLoading, error } = useQuery({
        queryKey: ['car', id],
        queryFn: () => getSingleCar(id),
        enabled: !id,
        refetchOnMount: false,
    });

    if (isLoading) return (
        <div style={{ display: "flex", justifyContent: "center", padding: "40px 0" }}>
            <Loader/>
        </div>
    )
        
    if (error || !car) return <p>Some error...</p>;

    return (
        <div>
            <h2>Details for car {car.brand}</h2>
        </div>
    )
};