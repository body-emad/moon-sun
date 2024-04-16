import { createContext, useState, useEffect } from "react";
import { useLocalStorage } from "../hooks/UseLocalStorage"; // Assuming this is the file containing your custom hook

type LikesContextProps = {
  likedProducts: number[];
  toggleLike: (productId: number) => void;
  removeLikedProduct: (productId: number) => void;
};

export const LikesContext = createContext<LikesContextProps>({
  likedProducts: [],
  toggleLike: () => {},
  removeLikedProduct: () => {},
});

type LikesProviderProps = {
  children: React.ReactNode;
};

const LikesProvider = ({ children }: LikesProviderProps): JSX.Element => {
  const { getStoredLikes, setStoredLikes } = useLocalStorage("likedProducts");
  const [likedProducts, setLikedProducts] = useState<number[]>(() => {
    const storedLikes = getStoredLikes();
    return storedLikes ? storedLikes : [];
  });

  const toggleLike = (productId: number): void => {
    if (likedProducts.includes(productId)) {
      setLikedProducts((prevLikedProducts) =>
        prevLikedProducts.filter((id) => id !== productId)
      );
    } else {
      setLikedProducts([...likedProducts, productId]);
    }
  };

  const removeLikedProduct = (productId: number) => {
    setLikedProducts((prevLikedProducts) =>
      prevLikedProducts.filter((id) => id !== productId)
    );
  };

  useEffect(() => {
    setStoredLikes(likedProducts);
  }, [likedProducts]);

  return (
    <LikesContext.Provider
      value={{ likedProducts, toggleLike, removeLikedProduct }}
    >
      {children}
    </LikesContext.Provider>
  );
};

export default LikesProvider;
