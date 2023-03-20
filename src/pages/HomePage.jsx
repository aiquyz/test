<<<<<<< HEAD
import { useEffect, useState } from "react";
import { Sorting } from "features/Sorting/Sorting";
import Product from "features/Product/Product";
import Filters from "features/Filters/Filters";
import { initialProducts } from "initialProducts";

const HomePage = ({ products, setProducts }) => {
  const [sortKeyword, setSortKeyword] = useState(null); // null | 'asc' | 'desk'

  const [priceRange, setPriceRange] = useState([25, 25000]);

  const [openFilters, setOpenFilters] = useState(false);

  const [brands, setBrands] = useState([
    ...new Set(initialProducts.map(({ brand }) => brand)),
  ]);

  useEffect(() => {
    let copyProducts = [...initialProducts];
    const [minPrice, maxPrice] = priceRange;
    copyProducts = copyProducts.filter(({ price }) => {
      return price >= minPrice && price <= maxPrice;
    });
    if (sortKeyword === "asc") {
      copyProducts = [...copyProducts].sort((a, b) => {
        return a.price - b.price;
      });
    } else if (sortKeyword === "desc") {
      copyProducts = [...copyProducts].sort((a, b) => {
        return b.price - a.price;
      });
    }
    copyProducts = copyProducts.filter(({ brand }) => {
      return brands.includes(brand);
    });
    setProducts(copyProducts);
  }, [sortKeyword, priceRange, brands]);

  return (
    <div className="App">
      <div className="container">
        <Sorting
          openFilters={openFilters}
          onChangeOpenFilters={setOpenFilters}
          value={sortKeyword}
          onChange={setSortKeyword}
        />

        <div className="main">
          <Filters
            openFilters={openFilters}
            onChangeOpenFilters={setOpenFilters}
            priceRange={priceRange}
            onChangePriceRange={setPriceRange}
            brands={brands}
            onChangeBrands={setBrands}
          />

=======
import Header from "features/Header/Header";
import Product from "features/Product/Product";
import Filters from "features/Filters/Filters";

const HomePage = ({products, setProducts}) => {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <div className="main">
          <Filters setProducts={setProducts} />
>>>>>>> 3dc796852617115159451466aadaa6bc7c6391fd
          <div className="list">
            {products.map((product) => (
              <Product key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
