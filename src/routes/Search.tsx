import React from "react";
import SearchArtist from "../components/SearchArtist";
import { Cross, X } from "lucide-react";

const Search = () => {
  return (
    <div className="m-5 md:m-20">
      <div className="w-full flex justify-end items-center ">
        <X />
      </div>
      <SearchArtist />
    </div>
  );
};

export default Search;
