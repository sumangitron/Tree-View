import { useState } from "react";
import MenuList from "./MenuList";
import { FaMinus, FaPlus } from "react-icons/fa";

const MenuItems = ({ item }) => {
  const [toggleItem, setToggleItem] = useState(false);

  return (
    <li>
      <div className="menu-item" onClick={() => setToggleItem(!toggleItem)}>
        <p>{item.label}</p>
        {item.children && <span>{toggleItem ? <FaMinus /> : <FaPlus />}</span>}
      </div>

      {item && item.children && item.children.length > 0 && toggleItem ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
};

export default MenuItems;
