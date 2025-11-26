import { getCars } from "../../lib/api";
import CatalogItemList from "../../components/CatalogItemList/CatalogItemList";

const Catalog = async () => {
    const response = await getCars();
    

    return (
        <section>
            <h1>Here your cars</h1>
            {response?.cars.length > 0 && <CatalogItemList cars={response.cars} />}
        </section>
    );
};

export default Catalog;