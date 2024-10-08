import { useState } from "react";
import { carMarks } from "../../carMarks";

const Filter = ({ onFilterChange }) => {
  const [make, setMake] = useState("");
  const [price, setPrice] = useState("");
  const [mileage, setMileage] = useState("");

  const handleFilterChange = () => {
    onFilterChange({
      make: make || null,
      price: price || null,
      mileage: mileage || null,
    });
  };

  return (
    <div className="filters">
      <select value={make} onChange={(e) => setMake(e.target.value)}>
        <option value="">Всі марки</option>
        {Object.keys(carMarks).map((category) => (
          <optgroup key={category} label={category}>
            {carMarks[category].map((carMark) => (
              <option key={`${category}-${carMark}`} value={carMark}>
                {carMark}
              </option>
            ))}
          </optgroup>
        ))}
      </select>
      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Ціна за годину"
      />
      <input
        type="number"
        value={mileage}
        onChange={(e) => setMileage(e.target.value)}
        placeholder="Пробіг"
      />
      <button onClick={handleFilterChange}>Застосувати фільтри</button>
    </div>
  );
};

export default Filter;
