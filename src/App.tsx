import { BrowserRouter, Routes, Route } from "react-router-dom";
import FooterComponent from "./components/footer/footer.component";
import NavbarComponent from "./components/navbar/navbar.component";
import Home from "./pages/home/home.page";
import BookPage from "./pages/book/book.page";
import PortfolioPage from "./pages/portfolio/portfolio.page";

function App() {
  return (
    <BrowserRouter>
      <div className="max-w-screen min-h-screen flex flex-col">
        <NavbarComponent />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/services" element={<div>Página Services</div>} />
          <Route path="/book" element={<BookPage />} />
          <Route path="/contact" element={<div>Página Contact</div>} />

          <Route path="*" element={<div>404 - Página no encontrada</div>} />
        </Routes>

        <FooterComponent />
      </div>
    </BrowserRouter>
  );
}

export default App;
