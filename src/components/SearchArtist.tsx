import React, { useState, useEffect, useRef } from "react";
import artistList from "../utils/artistList.json";
import imageslogo from "../assets/react.svg";

interface Artist {
  category: string;
  artistName: string[];
}

const SearchArtist: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [matchedNames, setMatchedNames] = useState<string[]>([]);
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleInputFocus = () => {
    inputRef.current?.focus();
  };

  return (
    <div>
      <input
        type="text"
        onChange={handleInputChange}
        value={searchQuery}
        placeholder="Search artist..."
        ref={inputRef}
        className="border border-gray-300 rounded px-4 py-2 my-2 focus:outline-none"
      />
      <div>
        {artistList.map((data: Artist, index: number) => (
          <div key={index}>
            <div>{data.category}</div>
            {/* You can render images here */}
          </div>
        ))}
      </div>

      <div className="flex flex-wrap">
        {artistList[0]?.artistName.map((name: string, index: number) => (
          <div
            key={index}
            className={`px-4 py-2 m-1 rounded ${
              matchedNames.includes(name) && searchQuery ? "bg-blue-200" : ""
            }`}
            onClick={handleInputFocus}
          >
            {name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchArtist;
