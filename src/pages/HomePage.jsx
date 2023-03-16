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
