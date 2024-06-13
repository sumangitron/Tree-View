import MenuItems from "./MenuItems";

const MenuList = ({ list }) => {
  return (
    <ul className="menu-list-container">
      {list && list.length > 0
        ? list.map((listItem) => <MenuItems item={listItem} />)
        : null}
    </ul>
  );
};

export default MenuList;
