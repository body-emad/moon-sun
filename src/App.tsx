import { Route, Routes } from "react-router-dom";
import Navbar from "./components/ui/Navbar";
import Bracelets from "./pages/Products/Bracelets";
import Necklaces from "./pages/Products/Necklaces";
import Bangles from "./pages/Products/Bangles";
import Home from "./pages/Home/Home";
import LikedProducts from "./pages/LikedProducts";
import LikesProvider from "./context/LikesContext";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import Footer from "./components/ui/Footer";

const App = () => {
  return (
    <ShoppingCartProvider>
      <LikesProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bracelets" element={<Bracelets />} />
          <Route path="/necklaces" element={<Necklaces />} />
          <Route path="/Bangles" element={<Bangles />} />
          <Route path="/LikedProducts" element={<LikedProducts />} />
        </Routes>
        <Footer />
      </LikesProvider>
    </ShoppingCartProvider>
  );
};

export default App;
