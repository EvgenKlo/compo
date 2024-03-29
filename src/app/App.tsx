import ProductCard from "../entities/productCard/ProductCard";
import Footer from "../widgets/footer/Footer";
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
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;
