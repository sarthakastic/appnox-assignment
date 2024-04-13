import { Search } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center mx-5 h-10 ">
      <div>
        <h1>Mediartrade</h1>
      </div>
      <div>
        <ul className="flex justify-around items-center gap-10">
          <li>Prossime Aste</li>
          <li>Private Sale</li>
          <li>Accedi</li>
          <li>
            <select name="IT" id="">
              <option value="">IT</option>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
            </select>
          </li>
          <li>
            <Search />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
