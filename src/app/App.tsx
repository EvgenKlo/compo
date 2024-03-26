import ProductCard from "../entities/productCard/ProductCard";
import Header from "../widgets/header/Header";

const App = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="container">
        <ProductCard />
      </main>
    </>
  );
};

export default App;
