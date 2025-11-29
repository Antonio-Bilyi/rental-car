import { getSingleCar } from "../../../lib/api";
import { QueryClient, HydrationBoundary, dehydrate } from "@tanstack/react-query";
import CatalogDetailsClient from "./CatalogDetails.client";



interface CatalogDetailsProps {
    params: Promise<{ id: string }>;
};

export default async function CatalogDetails({ params }: CatalogDetailsProps) {
    const { id } = await params;
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: ['car', id],
        queryFn: () => getSingleCar(id),
    });
    
    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <CatalogDetailsClient />
        </HydrationBoundary>
    )
};