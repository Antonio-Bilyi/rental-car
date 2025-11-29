import { Car } from "../../types/cars/car";
import CatalogItem from "../CatalogItem/CatalogItem";
import Container from "../Container/Container";
import css from './CatalogItemList.module.css'


interface CatalogItemListProps {
    cars: Car[],
};

const CatalogItemList = ({ cars }: CatalogItemListProps) => {
    
    return (

        <Container>
            <ul className={css.catalog_list}>
                {cars.map((car) => (
                    <CatalogItem key={car.id} car={car} />
                ))}
            </ul>
        </Container>
    );
};

export default CatalogItemList;