import { useState } from "react";
import Logo from "../ui/Logo";
import { FaUserAlt, FaShoppingCart, FaSearch } from "react-icons/fa";
import Search from "../ui/Search";

const Header = () => {
  const [isSearchModal, setIsSearchModal] = useState(true);
  return (
    <div className="bg-primary border h-[5.5rem] mx-auto">
      <div className=" container mx-auto flex justify-between h-full items-center">
        <div>
          <Logo />
        </div>
        <div>
          <nav>
            <ul className="headerNavigation flex gap-6 uppercase ">
              <li className="text-white">
                <a href="">Home</a>
              </li>
              <li className="text-white">
                <a href="">Menu</a>
              </li>
              <li className="text-white">
                <a href="">About</a>
              </li>
              <li className="text-white">
                <a href="">Book Table</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="headerIcons flex gap-4 items-center text-white">
          <a href="#">
            <FaUserAlt />
          </a>
          <a href="#">
            <FaShoppingCart />
          </a>
          <button
            onClick={() => {
              setIsSearchModal(!isSearchModal);
              console.log("search status:", isSearchModal);
            }}
          >
            <FaSearch />
          </button>
          <div className="btn-secondary">Order Online</div>
        </div>
      </div>
      {isSearchModal && <Search isSearchModal={isSearchModal} setIsSearchModal={setIsSearchModal}/>}
    </div>
  );
};

export default Header;
