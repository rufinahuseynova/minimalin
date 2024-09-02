// import { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getAllProducts } from '../redux/slices/productSlice';
// import Product from './Product';
// import FilterBar from './FilterBar.jsx';
// import '../css/FilteredProductList.css';


// function FilteredProductList() {
//   const dispatch = useDispatch();
//   const { products } = useSelector((store) => store.product);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [filters, setFilters] = useState({ categories: [], stockStatus: {} });

//   useEffect(() => {
//     dispatch(getAllProducts());
//   }, [dispatch]);

//   useEffect(() => {
//     if (products) {
//       const filtered = products.filter((product) => {
//         const matchesCategory = filters.categories.length
//           ? filters.categories.includes(product.category)
//           : true;
//         const matchesStock = filters.stockStatus.inStock && product.inStock || filters.stockStatus.outOfStock && !product.inStock;
//         return matchesCategory && matchesStock;
//       });
//       setFilteredProducts(filtered);
//     }
//   }, [products, filters]);

//   const handleFilterChange = (newFilters) => {
//     setFilters(newFilters);
//   };

//   return (
//     <div className="productList-container">
//       <FilterBar
//         categories={[...new Set(products.map((product) => product.category))]}
//         onFilterChange={handleFilterChange}
//       />
//       <div className="flex-row">
//         {filteredProducts.map((product) => (
//           <Product key={product.id} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default FilteredProductList;


