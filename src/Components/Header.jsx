import CartDeta from "../Components/cine/CartDetails";
import Logo from "../assets/logo.svg";
import Ring from "../assets/ring.svg";
import Moon from "../assets/icons/moon.svg";
import Sun from "../assets/icons/sun.svg";
import Cart from "../assets/shopping-cart.svg";
import { useContext, useState } from "react";
import { MovieContext, ThemeContext } from "../Context";

const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const { cartData } = useContext(MovieContext);
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const [title, genre, price, cover] = cartData; // destructure cartData here

  return (
    <header
      className={` sticky top-0  z-10 ${
        darkMode ? "bg-[#171923e0]" : "bg-[#ffffffe0]"
      } mb-2 `}
    >
      {showCart && <CartDeta onClose={() => setShowCart(false)} />}
      <nav className="container flex items-center justify-between space-x-10 py-6">
        <a href="index.html">
          <img src={Logo} width="139" height="26" alt="" />
        </a>

        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={Ring} width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <a
              onClick={() => setDarkMode(!darkMode)}
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={darkMode ? Sun : Moon} width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <a
              onClick={() => setShowCart(true)}
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={Cart} width="24" height="24" alt="" />

              {cartData.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartData.length}
                </span>
              )}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
