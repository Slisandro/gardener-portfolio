import { BrowserRouter, Routes, Route } from "react-router-dom";
import FooterComponent from "./components/footer/footer.component";
import NavbarComponent from "./components/navbar/navbar.component";
import Home from "./pages/home/home.page";

function App() {
  return (
    <BrowserRouter>
      <div className="max-w-screen min-h-screen flex flex-col">
        <NavbarComponent />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<div>Página About</div>} />
          <Route path="/services" element={<div>Página Services</div>} />
          <Route path="/contact" element={<div>Página Contact</div>} />

          <Route path="*" element={<div>404 - Página no encontrada</div>} />
        </Routes>

        <FooterComponent />
      </div>
    </BrowserRouter>
  );
}

export default App;
