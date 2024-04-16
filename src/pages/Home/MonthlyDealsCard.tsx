import { useContext } from "react";
import { ItemProps } from "../../Types/ItemProps";
import { FaHeart } from "react-icons/fa";
import { LikesContext } from "../../context/LikesContext";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { useIdContext } from "../../context/IdContext";
import useFormatCurrency from "../../hooks/useFormatCurrency";
import { motion } from "framer-motion";

export default function MonthlyDealsCard({
  id,
  img,
  braceletName,
  discount,
  prevPrice,
  currPrice,
}: ItemProps) {
  const { formatCurrency: currPriceFormatted } = useFormatCurrency();
  const { increaseCartQuantity } = useShoppingCart();
  const { productId }: any = useIdContext();
  const { likedProducts, toggleLike } = useContext(LikesContext);
  const isLiked = likedProducts.includes(id);
  const handleLike = () => {
    toggleLike(id);
  };
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (id: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * id,
        type: "spring",
      },
    }),
  };

  return (
    <motion.div
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      custom={id}
      className="w-[100%] flex flex-col lg:flex-row bg-[#FFFAFA] bg-opacity-90 rounded-lg py-5 text-center items-center justify-center gap-6"
    >
      <div className="mx-auto">
        <img className="lg:mb-4 rounded-lg" src={img} alt="" />

        <h1 className="text-xl font-meduim mb-2 mt-4">{braceletName}</h1>
        <p className="text-[#777777]">{discount}Off</p>
        <p className="line-through text-[#777777] tracking-[3px] decoration-[#D93F3F]">
          {currPriceFormatted.format(prevPrice)}
        </p>
        <p className="text-2xl font-meduim tracking-[3px] ">
          {currPriceFormatted.format(currPrice)}
        </p>

        <div className="flex items-end justify-center gap-3 ">
          <button
            onClick={handleLike}
            className={`border-2 border-[#D93F3F] px-3 py-[5.4px] ${
              isLiked ? "text-[#D93F3F]" : "text-[#d8d6d6] opacity-80 shadow-sm"
            }`}
          >
            <FaHeart size={30} />
          </button>
          <button
            onClick={() => increaseCartQuantity(productId)}
            className="text-lg mt-3 px-10 py-2 text-white font-meduim bg-[#D93F3F]"
          >
            Add to cart
          </button>
        </div>
      </div>
    </motion.div>
  );
}
