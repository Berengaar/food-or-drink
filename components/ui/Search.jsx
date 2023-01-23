import React from "react";
import OutsideClickHandler from "react-outside-click-handler";
import Title from "../ui/Title.jsx";
import Image from "next/image.js";
import { AiFillCloseCircle } from "react-icons/ai";

const Search = ({ isSearchModal, setIsSearchModal }) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 after:content-[''] after:w-screen after:h-screen after:bg-white after:absolute after:top-0 after:left-0 after:opacity-60 grid place-content-center">
      <OutsideClickHandler
        onOutsideClick={() => {
          isSearchModal && setIsSearchModal(false);
        }}
      >
        <div className="w-full h-full grid place-content-center relative">
          <div className="relative z-50 w-[600px] h-[600px] bg-white border-2 p-5 rounded-xl">
            <button onClick={() => setIsSearchModal(false)}>
              <AiFillCloseCircle
                size={25}
                className="absolute top-0 right-0 m-2 cursor-pointer hover:text-secondary"
              />
            </button>

            <Title
              content={"Search"}
              addClass="text-[40px] text-center text-black"
            />
            <input
              type="text"
              placeholder="Search..."
              className="border w-full p-3 border-red-400"
            />
            <div>
              <ul className="mt-10">
                <li className="flex justify-between items-center hover:bg-secondary my-3 p-1 cursor-pointer transition-all">
                  <Image
                    src={"/images/f1.png"}
                    alt="asd"
                    width={50}
                    height={50}
                  />
                  <span className="font-bold">Good Pizza</span>
                  <span className="font-bold">$10</span>
                </li>
                <li className="flex justify-between items-center hover:bg-secondary my-3 p-1 cursor-pointer transition-all">
                  <Image
                    src={"/images/f1.png"}
                    alt="asd"
                    width={50}
                    height={50}
                  />
                  <span className="font-bold">Good Pizza</span>
                  <span className="font-bold">$10</span>
                </li>
                <li className="flex justify-between items-center hover:bg-secondary my-3 p-1 cursor-pointer transition-all">
                  <Image
                    src={"/images/f1.png"}
                    alt="asd"
                    width={50}
                    height={50}
                  />
                  <span className="font-bold">Good Pizza</span>
                  <span className="font-bold">$10</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default Search;
