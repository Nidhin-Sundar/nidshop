import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

export default function BrowseAll() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex border-none w-full font font-serif justify-center gap-x-1.5 px-3 py-2 text-sm font-bold text-black">
          All Categories
          <ChevronDownIcon
            aria-hidden="true"
            className="-mr-1 h-5 w-5 text-gray-400"
          />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute z-10 mt-3 w-96 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in  grid grid-cols-2 gap-2 p-2"
        style={{ width: "500px" }}
      >
        <MenuItem>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 border border-gray-400 "
          >
            Milk & Dairies
          </a>
        </MenuItem>
        <MenuItem>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 border border-gray-400 "
          >
            Wines & Alcohols
          </a>
        </MenuItem>
        <MenuItem>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 border border-gray-400 "
          >
            Pet Foods & Toy
          </a>
        </MenuItem>
        <MenuItem>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 border border-gray-400 "
          >
            Fast Food
          </a>
        </MenuItem>
        <MenuItem>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 border border-gray-400 "
          >
            Baking Material
          </a>
        </MenuItem>
        <MenuItem>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 border border-gray-400 "
          >
            Vegetables
          </a>
        </MenuItem>
        <MenuItem>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 border border-gray-400 "
          >
            Fresh Sea Food
          </a>
        </MenuItem>
        <MenuItem>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 border border-gray-400 "
          >
            Ice cream
          </a>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
}
