import { getCars } from "../../lib/serverApi/getCars";


const Cars = async () => {
    const cars = await getCars();
    console.log('cars', cars);

    return <div>Here must be catalog of cars</div>
};

export default Cars;