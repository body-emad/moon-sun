import { useState } from "react";

export default function useToggleView() {
  const [toggleView, setToggleView] = useState(true);
  const handleToggleView = () => {
    setToggleView((prevState) => !prevState);
  };
  return { toggleView, handleToggleView };
}
