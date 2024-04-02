import "./App.css";
import ProductDetails from "./components/ProductDetails";
import ProductFilter from "./components/ProductFilter";
import ProductCatalog from "./components/ProductCatalog";

function App() {
  return (
    <div className="backgroundApp">
      <ProductFilter />
      <div className="productContainer">
        <ProductCatalog />
        <ProductDetails />
      </div>
    </div>
  );
}

export default App;
