import { Car } from "../../types/cars/car";

interface CatalogItemProps {
    car: Car,
};

const CatalogItem = ({ car }: CatalogItemProps) => {
    

    return (

        <li>
            <p>{car.brand}</p>
        </li>
    );
};

export default CatalogItem;