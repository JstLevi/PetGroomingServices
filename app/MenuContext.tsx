import React, { createContext, useContext, useState } from "react";

type MenuContextType = {
  menuVisible: boolean;
  toggleMenu: () => void;
};

const MenuContext = createContext<MenuContextType>({
  menuVisible: false,
  toggleMenu: () => {},
});

export const useMenu = () => useContext(MenuContext);

export const MenuProvider = ({ children }: { children: React.ReactNode }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => setMenuVisible((prev) => !prev);

  return (
    <MenuContext.Provider value={{ menuVisible, toggleMenu }}>
      {children}
    </MenuContext.Provider>
  );
};
export default () => null;