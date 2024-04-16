import { useState } from "react";

export default function useToggle() {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const handleMenuChange = () => {
    setToggleMenu(!toggleMenu);
  };
  const [toggleInputSearch, setToggleInputSearch] = useState<boolean>(false);

  const toggleSearch = () => {
    setToggleInputSearch(!toggleInputSearch);
  };
  return { toggleInputSearch, toggleSearch, handleMenuChange, toggleMenu };
}
