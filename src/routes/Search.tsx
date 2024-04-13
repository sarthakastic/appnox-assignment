import SearchArtist from "../components/SearchArtist";
import { X } from "lucide-react";

const Search = () => {
  return (
    <div className="m-5 md:m-20 font-inter">
      <div className="w-full flex justify-end items-center ">
        <X />
      </div>
      <SearchArtist />
    </div>
  );
};

export default Search;
