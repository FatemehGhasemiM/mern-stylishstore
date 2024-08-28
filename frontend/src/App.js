import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Link to="/">stylish</Link>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:slug" element={<ProductPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
