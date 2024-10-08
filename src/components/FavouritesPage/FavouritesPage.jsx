import { useSelector } from "react-redux";
import CarCard from "../CarCard/CarCard.jsx";

const FavoritesPage = () => {
  const favorites = useSelector((state) => state.favorites);

  return (
    <div>
      <h1>Улюблені автомобілі</h1>
      <div className="car-list">
        {favorites.length > 0 ? (
          favorites.map((car) => <CarCard key={car.id} car={car} />)
        ) : (
          <p>Немає улюблених автомобілів.</p>
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;
