import CartDeta from "../Components/cine/CartDetails";
import Logo from "../assets/logo.svg";
import Ring from "../assets/ring.svg";
import Moon from "../assets/icons/moon.svg";
import Cart from "../assets/shopping-cart.svg";
import { useState } from "react";

const Header = () => {
  const [showCart, setShowCart] = useState(false);

  // cart details show
  const handleCartDetails = () => {
    setShowCart(true);
    console.log("handle cd");
  };
  // handle close cart details

  return (
    <header>
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
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={Moon} width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <a
              onClick={handleCartDetails}
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={Cart} width="24" height="24" alt="" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
