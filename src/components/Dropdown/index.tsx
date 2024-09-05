import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ReactElement } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

type IDropdownProps = {
    title: string
    menus: string[];
};

const Dropdown = ({title, menus}: IDropdownProps):ReactElement => {
    return (
    <Menu>
        <MenuButton>
          <div className="flex items-center gap-1">
            <p>{title}</p>
            <MdKeyboardArrowDown size={20} />
          </div>
        </MenuButton>

        <MenuItems
          transition
          anchor="bottom end"
          className="mt-3 relative z-50 w-52 origin-top-right rounded-md bg-white p-1 transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
        >
         {menus.map((item) => (
             <MenuItem key={item}>
                <p className="hover:text-primary cursor-pointer text-sm text-gray-500 p-1 border-b border-gray-100">{item}</p>
            </MenuItem>
         ))}
        </MenuItems>
      </Menu>
    )
};

export default Dropdown;