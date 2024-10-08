import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">Домашня сторінка</NavLink>
      <NavLink to="/catalog">Каталог</NavLink>
      <NavLink to="/favorites">Улюблені</NavLink>
    </nav>
  );
};

export default Navbar;
