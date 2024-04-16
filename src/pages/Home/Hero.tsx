import LiningStyles from "../../assets/home/LiningStyle.png";
import BraceletHero from "../../assets/home/pngwing 9.png";
import Necklace1 from "../../assets/home/pngwing 7.png";
import Necklace2 from "../../assets/home/pngwing 8.png";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { useIdContext } from "../../context/IdContext";
import { motion } from "framer-motion";
export default function Hero() {
  const { productId }: any = useIdContext();
  const { handleAddToCart } = useShoppingCart();
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      x: -100,
    },
    animate: {
      opacity: 1,
      x: 0,
    },
  };
  return (
    <motion.section
      variants={{
        hidden: { opacity: 0, x: -100, y: 100 },
        show: { opacity: 1, x: 0, y: 0 },
      }}
      transition={{ duration: 0.5, type: "spring" }}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="px-[2px] lg:px-10 pb-[10rem] "
    >
      <div className="flex lg:flex-row relative z-10 flex-col gap-5 items-center justify-center bg-[#F1DDC9]">
        <div className=" absolute z-[-10] opacity-30 top-[7rem] lg:top-0 lg:left-0 left-[-7rem]">
          <img src={LiningStyles} alt="" />
        </div>
        <div className="w-[90%] md:w-[70%]">
          <img src={BraceletHero} className=" mx-auto" alt="" />
        </div>
        <div className="flex flex-col items-center justify-center gap-10">
          <div className="w-[90%] text-center flex flex-col gap-3">
            <h1 className="text-2xl md:text-3xl lg:text-6xl font-bold">
              Style Elevated Accessories Unveiled
            </h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni et
              repellendus atque inventore laudantium adipisci accusantium
              debitis optio hic quam laborum distinctio libero quasi molestias
              quisquam quos quas, praesentium itaque?
            </p>
          </div>
          <div className="flex items-center pb-8 justify-center gap-5">
            <motion.button
              whileHover={{
                scale: 1.1,
                marginInline: "5px",
              }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleAddToCart(productId)}
              className="bg-[#D84727] text-xl tracking-widest text-white font-light w-[180px] h-[55px] "
            >
              Add to cart
            </motion.button>

            <button className="tracking-widest w-[120px] hover:opacity-70 h-[55px] text-xl bg-none text-[#D84727] border-2 border-[#D84727]">
              Buy
            </button>
          </div>
        </div>
      </div>
      {/* The two cards */}
      <div className="flex flex-col lg:px-10 lg:pt-[12rem] lg:flex-row items-center lg:gap-10 justify-center gap-2">
        {/* First card */}
        <motion.div
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          transition={{ duration: 0.7, type: "spring" }}
          className="flex bg-white py-5 mt-10 mx-auto rounded-md w-[90%] px-8 items-center justify-center gap-3"
        >
          <div className="flex flex-col items-center justify-center gap-5">
            <h1 className="text-xl">
              Luxurious <span className="font-bold">Eyewear</span>
            </h1>
            <p className="text-[#777777] tracking-wider">
              See the beauty of exotic world with the luxurious glasses
            </p>
            <button className="border-b-2 font-bold border-b-[#333333]">
              Discover Now
            </button>
          </div>
          <div>
            <img src={Necklace1} alt="" />
          </div>
        </motion.div>
        {/* Second card */}
        <motion.div
          variants={{
            initial: {
              opacity: 0,
              x: 100,
            },
            animate: {
              opacity: 1,
              x: 0,
            },
          }}
          transition={{ duration: 0.5, type: "spring", delay: 0.2 }}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex bg-white py-5 mt-10 mx-auto rounded-md w-[90%] px-8 items-center justify-center gap-3"
        >
          <div className="flex flex-col items-center justify-center gap-5">
            <h1 className="text-xl">
              Comfortable <span className="font-bold">Bracelets</span>
            </h1>
            <p className="text-[#777777] tracking-wider">
              Feels the balancing function and beauty in our wooden watches
            </p>
            <button className="border-b-2 font-bold border-b-[#333333]">
              Discover Now
            </button>
          </div>
          <div>
            <img src={Necklace2} alt="" />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
