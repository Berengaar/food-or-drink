import React from "react";
import OutsideClickHandler from "react-outside-click-handler";
import Title from "../ui/Title.jsx";

const Search = ({ isSearchModal, setIsSearchModal }) => {
  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen z-50 after:content-[''] after:w-screen after:h-screen
    after:bg-purple-600 after:absolute after:top-0 after:left-0 opacity-50"
    >
      <OutsideClickHandler
        onOutsideClick={() => {
          isSearchModal && setIsSearchModal(false);
        }}
      >
        <Title content={"Title"} className={"text-9xl text-black"} />
      </OutsideClickHandler>
    </div>
  );
};

export default Search;
