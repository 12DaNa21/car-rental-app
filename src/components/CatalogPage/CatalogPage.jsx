import { useEffect, useState } from "react";
import axios from "axios";
import CarCard from "../CarCard/CarCard.jsx";
import Filter from "../Filter/Filter.jsx";

const CatalogPage = () => {
  const [cars, setCars] = useState([]);
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({
    make: null,
    price: null,
    mileage: null,
  });

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const params = {
          page,
          limit: 12,
          make: filters.make || undefined,
          price: filters.price ? { lte: filters.price } : undefined, // фільтр за ціною
          mileage: filters.mileage ? { lte: filters.mileage } : undefined, // фільтр за пробігом
        };
        const response = await axios.get("https://mockapi.io/cars", { params });
        setCars((prevCars) =>
          page === 1 ? response.data : [...prevCars, ...response.data]
        );
      } catch (error) {
        console.error("Помилка завантаження оголошень", error);
      }
    };

    fetchCars();
  }, [page, filters]);

  const loadMore = () => setPage((prevPage) => prevPage + 1);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    setPage(1); // Скидаємо на першу сторінку при зміні фільтрів
  };

  return (
    <div>
      <h1>Каталог автомобілів</h1>
      <Filter onFilterChange={handleFilterChange} />
      <div className="car-list">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
      <button onClick={loadMore}>Load more</button>
    </div>
  );
};

export default CatalogPage;
