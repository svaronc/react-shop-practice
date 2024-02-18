import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import { BsCart4 } from "react-icons/bs";

export const Navbar = () => {
  const activeStyle = "underline underline-offset-4";
  const context = useContext(ShoppingCartContext);
  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-zinc-500 text-white">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink to="/" onClick={() => context.setCategory()}>Shopi</NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            onClick={() => context.setCategory()}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/clothes"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => context.setCategory("clothes")}
          >
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/electronics"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => context.setCategory("electronics")}
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/furniture"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => context.setCategory("furniture")}
          >
            Furniture
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/toys"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => context.setCategory("toys")}
          >
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/others"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => context.setCategory("others")}
          >
            Others
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        <li className="text-white/60">sebastianvaron96@gmail.com</li>
        <li>
          <NavLink
            to="/my-orders"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/my-account"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sing-in"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Sign In
          </NavLink>
        </li>
        <li className="flex gap-1 items-center" onClick={() => context.openCheckoutSideMenu()}>
          <BsCart4 cursor={"pointer"} /> {context.count}
        </li>
      </ul>
    </nav>
  );
};
