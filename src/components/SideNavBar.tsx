import { X } from "lucide-react";

const SideNavBar = ({ setShowSideNav }: { setShowSideNav: any }) => {
  return (
    <div className="fixed right-0 w-screen h-screen animate-slide bg-white z-50">
      <div
        onClick={() => {
          setShowSideNav(false);
        }}
        className="border p-2"
      >
        <X />
      </div>
      <div>
        <ul className=" flex flex-col gap-10 items-center justify-center ">
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
        </ul>
      </div>
    </div>
  );
};

export default SideNavBar;
