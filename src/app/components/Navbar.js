"use client"
import Link from "next/link.js";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";


const Navbar = () => {
  const { cart } = useSelector((state) => state);

  return (
    <div>
      <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto">
        <Link href="/">
          <div className="ml-5">
            <img src="../logo.png" className="h-14" />
         
          </div>
        </Link>

        <div className="flex items-center font-medium text-grey-100 mr-5 space-x-6">
          <Link href="/">
            <p>Home</p>
          </Link>

          <Link href="/cart">
            <div className="relative">
              <FaShoppingCart className="text-2xl" />
              {cart.length > 0 && (
                <span
                  className="absolute -top-1 -right-2 bg-blue-600 text-xs w-5 h-5 flex 
                    justify-center items-center animate-bounce rounded-full text-white"
                >
                  {cart.length}
                </span>
              )}
            </div>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
