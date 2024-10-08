import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomePage from "../HomePage/HomePage.jsx";
import CatalogPage from "../CatalogPage/CatalogPage.jsx";
import FavoritesPage from "../FavouritesPage/FavouritesPage.jsx";
import Navbar from "../NavBar/NavBar.jsx";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
