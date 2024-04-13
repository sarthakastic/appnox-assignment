import { Menu, Search, SquareArrowRight } from "lucide-react";
import { useState } from "react";
import SideNavBar from "./SideNavBar";

const Navbar = () => {
  const [showSideNav, setShowSideNav] = useState(false);

  return (
    <>
      {showSideNav && <SideNavBar setShowSideNav={setShowSideNav} />}
      <div className="flex justify-between items-center mx-5 h-10 border-b border-[#D6D6D6] font-inter  ">
        <div>
          <h1 className="font-dmserif">Mediartrade</h1>
        </div>
        <div className="hidden md:flex">
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
        <div className="flex md:hidden">
          <ul className="flex justify-around items-center gap-5">
            <li>
              <SquareArrowRight />
            </li>
            <li>
              <Search />
            </li>
            <li>
              <Menu
                onClick={() => {
                  setShowSideNav(true);
                }}
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
