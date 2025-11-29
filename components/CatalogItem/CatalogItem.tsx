import Image from "next/image";
import { Car } from "../../types/cars/car";
import css from './CatalogItem.module.css'
import Link from "next/link";


interface CatalogItemProps {
    car: Car,
};


const CatalogItem = ({ car }: CatalogItemProps) => {
    const address = car.address;
    const parts = address.split(',').map(p => p.trim());
    const city = parts.at(-2);
    const country = parts.at(-1);

    const mileage = car.mileage;
    const formattedMileage = mileage.toLocaleString('uk-UA');

    return (
        <li className={css.catalog_card}>
            <div className={css.card_content}>
                <Image
                    src={car.img}
                    alt="car-image"
                    width='276'
                    height='268'
                    className={css.card_image}> 
                </Image>

                <div className={css.content_info}>
                    <p className={css.car_name}>{car.brand} <span className={css.name_span}>{car.model}</span>, {car.year}</p>
                    <p className={css.car_price}>${car.rentalPrice}</p>
                </div>

                <div className={css.content_address}>
                    <p className={css.car_city}>{city}</p>
                    <p className={css.car_country}>{country}</p>
                    <p className={css.car_company}>{car.rentalCompany}</p>
                </div>

                <div className={css.content_type}>
                    <p className={css.car_type}>{car.type}</p>
                    <p className={css.car_mileage}>{formattedMileage} km</p>
                </div>

            </div>

            <Link href={`/catalog/${car.id}`} className={css.card_button}>Read more</Link>
        </li>
    );
};

export default CatalogItem;