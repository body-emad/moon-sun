import { useState } from "react";
export default function useToggleLikesSideBar() {
  const [toggleLikesSideBar, setToggleLikesSideBar] = useState(false);
  const handleToggleLikesSideBar = () => {
    setToggleLikesSideBar((prevState) => !prevState);
  };
  return {
    toggleLikesSideBar,
    handleToggleLikesSideBar,
  };
}
