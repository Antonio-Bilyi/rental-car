import { Car } from "../../types/cars/car";
import CatalogItem from "../CatalogItem/CatalogItem";

interface CatalogItemListProps {
    cars: Car[],
};

const CatalogItemList = ({ cars }: CatalogItemListProps) => {
    
    return (

        <ul>
            {cars.map((car) => (
                <CatalogItem key={car.id} car={car} />
            
            ))}
        </ul>
    );
};

export default CatalogItemList;