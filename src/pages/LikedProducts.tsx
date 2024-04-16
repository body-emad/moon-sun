import { useContext } from "react";
import { LikesContext } from "../context/LikesContext";
import data from "../data/monthlyDeals.json";
export default function LikedProducts() {
  const { likedProducts, removeLikedProduct } = useContext(LikesContext);

  const likedItems = data.filter((item) => likedProducts.includes(item.id));
  const handleDeleteLike = (productId: number) => {
    removeLikedProduct(productId);
  };

  return (
    <>
      {likedItems.map((item) => (
        <div
          className="flex flex-col items-center justify-center mx-5"
          key={item.id}
        >
          <h1 className="text-2xl font-black uppercase text-[#D84727]">
            Product Name:{item.braceletName}
          </h1>
          <h3 className="text-gray-400 font-meduim text-xl">
            New Price:{item.currPrice}$
          </h3>
          <img className="rounded-full" src={item.img} alt="" />
          <button>Add to cart</button>
          <button
            onClick={() => handleDeleteLike(item.id)}
            className="bg-blue-900 px-5 py-3 rounded-md text-white"
          >
            Remove
          </button>
        </div>
      ))}
    </>
  );
}
