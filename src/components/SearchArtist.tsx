import React, { useState, useEffect, useRef } from "react";
import artistList from "../utils/artistList.json";
import { Link } from "react-router-dom";

interface Artist {
  category: string;
  artistName: string[];
}

const SearchArtist: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [matchedNames, setMatchedNames] = useState<string[]>([]);
  const [category, setCategory] = useState<string>("Tutte");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const filteredNames = artistList[0]?.artistName.filter((name: string) =>
        name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setMatchedNames(filteredNames || []);
    }, 500); // Debounce time

    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  const handleArtist = (data: string) => {
    inputRef.current?.focus();
    localStorage.setItem("name", data);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        onChange={handleInputChange}
        value={searchQuery}
        placeholder="Cerca"
        ref={inputRef}
        className={`border-b  w-full rounded px-4 py-2 my-2 focus:outline-none text-6xl md:text-9xl placeholder-black opacity-16 ${
          searchQuery.length > 0 ? "border-black" : "border-powder"
        } `}
      />

      <div className="flex gap-5 overflow-scroll ">
        {artistList.map((data: Artist, index: number) => (
          <p
            key={index}
            className={`border rounded-[50px] mt-5 px-5 md:px-10 py-2 md:py-5 hover:cursor-pointer text-sm md:text-2xl ${
              category === data?.category ? "text-white bg-black " : ""
            }  `}
            onClick={() => {
              setCategory(data?.category);
            }}
          >
            {data.category}
          </p>
        ))}
      </div>
      <h1 className="mt-20">
        {searchQuery.length > 0 ? (
          <h4 className="text-base">Risultati</h4>
        ) : (
          <h4>Suggerimenti</h4>
        )}
      </h1>
      <div>
        {artistList[0]?.artistName.map((name: string, index: number) => (
          <div
            key={index}
            className={`px-4 py-2 m-1 text-2xl md:text-7xl rounded border-b border-gray-300 p-5 my-10 placeholder-black  ${
              matchedNames.includes(name) && searchQuery
                ? "text-black"
                : "text-powder"
            }`}
            onClick={() => handleArtist(name)}
          >
            <Link to={"/results"}>{name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchArtist;
