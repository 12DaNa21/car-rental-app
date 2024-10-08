import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleFavorite } from "../../redux/favoritesSlice.js";

const CarCard = ({ car }) => {
  const dispatch = useDispatch();
  const [isFavorite, setIsFavorite] = useState(car.isFavorite);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
    dispatch(toggleFavorite(car.id));
  };

  return (
    <div className="car-card">
      <img src={car.img} alt={car.model} />
      <h2>
        {car.make} {car.model}
      </h2>
      <p>Пробіг: {car.mileage.toLocaleString()} км</p>
      <p>Ціна за годину: ${car.rentalPrice}</p>
      <button onClick={handleFavoriteClick}>{isFavorite ? "💖" : "♡"}</button>
      <button>Learn more</button>
    </div>
  );
};

export default CarCard;
