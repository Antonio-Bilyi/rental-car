import { getCars } from "../../lib/api";
import CatalogItemList from "../../components/CatalogItemList/CatalogItemList";


const Catalog = async () => {
    const response = await getCars();
    

    return (
        <section>
            {response?.cars.length > 0 && <CatalogItemList cars={response.cars} />}
        </section>
        
    );
};

export default Catalog;