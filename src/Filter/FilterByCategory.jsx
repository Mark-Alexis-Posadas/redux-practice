import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleCategory,
  selectFilteredProducts,
} from "../features/filter/filterSlice";

export default function FilterByCategory() {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const products = useSelector((state) => state.filterByCategory.products);

  const dispatch = useDispatch();

  const handleToggleCategory = (category) => {
    dispatch(toggleCategory(category));
  };

  const filteredProducts = useSelector(selectFilteredProducts);

  return (
    <div>
      <h1>Product List</h1>
      {products.map((text, idx) => (
        <label key={idx}>
          <input
            type="checkbox"
            className="form-check-input"
            checked={selectedCategories.includes(text.category)}
            onChange={() => {
              const updatedCategories = selectedCategories.includes(
                text.category
              )
                ? selectedCategories.filter((c) => c !== text.category)
                : [...selectedCategories, text.category];

              setSelectedCategories(updatedCategories);
              handleToggleCategory(updatedCategories);
            }}
          />
          {text.category}
        </label>
      ))}
      <ul>
        {filteredProducts.map((product, idx) => (
          <li key={idx}>
            {product.productName} - {product.category} ({product.stock} in
            stock)
          </li>
        ))}
      </ul>
    </div>
  );
}
