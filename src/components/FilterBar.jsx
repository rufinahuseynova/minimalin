
// import  { useState } from 'react';
// import '../css/FilteredProductList.css';

// function FilterBar({ categories, onFilterChange }) {
//   const [selectedCategories, setSelectedCategories] = useState([]);
//   const [stockStatus, setStockStatus] = useState({ inStock: false, outOfStock: false });

//   const handleCategoryChange = (category) => {
//     const updatedCategories = selectedCategories.includes(category)
//       ? selectedCategories.filter((c) => c !== category)
//       : [...selectedCategories, category];
//     setSelectedCategories(updatedCategories);
//     onFilterChange({ categories: updatedCategories, stockStatus });
//   };

//   const handleStockChange = (status) => {
//     const updatedStockStatus = { ...stockStatus, [status]: !stockStatus[status] };
//     setStockStatus(updatedStockStatus);
//     onFilterChange({ categories: selectedCategories, stockStatus: updatedStockStatus });
//   };

//   return (
//     <div className="filter-bar">
//       <h3>Categories</h3>
//       <div>
//         {categories.map((category) => (
//           <div key={category}>
//             <input
//               type="checkbox"
//               id={category}
//               checked={selectedCategories.includes(category)}
//               onChange={() => handleCategoryChange(category)}
//             />
//             <label htmlFor={category}>{category}</label>
//           </div>
//         ))}
//       </div>

//       <h3>Availability</h3>
//       <div>
//         <input
//           type="checkbox"
//           id="in-stock"
//           checked={stockStatus.inStock}
//           onChange={() => handleStockChange('inStock')}
//         />
//         <label htmlFor="in-stock">In Stock</label>

//         <input
//           type="checkbox"
//           id="out-of-stock"
//           checked={stockStatus.outOfStock}
//           onChange={() => handleStockChange('outOfStock')}
//         />
//         <label htmlFor="out-of-stock">Out of Stock</label>
//       </div>
//     </div>
//   );
// }

// export default FilterBar;



