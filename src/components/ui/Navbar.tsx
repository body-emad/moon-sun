import { CiSearch } from "react-icons/ci";
import { IoBagHandleOutline } from "react-icons/io5";
import Logo from "../../assets/footer/Logo.png";
import { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { HiMenuAlt1 } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { LikesContext } from "../../context/LikesContext";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import useToggle from "../../hooks/useToggle";
import { AnimatePresence, motion } from "framer-motion";
import useToggleLikesSideBar from "../../hooks/useToggleLikesSideBar";
import LikedProducts from "../../pages/LikedProducts";
interface LikedProducts {
  likedProducts?: number[];
}
export default function Navbar({ id }: { id: number }) {
  const { likedProducts }: LikedProducts = useContext(LikesContext);
  let location = useLocation();
  const { toggleInputSearch, toggleSearch, handleMenuChange, toggleMenu } =
    useToggle();
  const { getQuantity } = useShoppingCart();
  const quantity = getQuantity(id);
  const { toggleLikesSideBar, handleToggleLikesSideBar } =
    useToggleLikesSideBar();

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, x: -100 },
        show: { opacity: 1, x: 0 },
      }}
      transition={{ duration: 0.5, type: "spring" }}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="px-[30px] md:px-[50px] sm:px-[165px] pt-[20px]"
    >
      <nav className="hidden sm:flex items-center justify-between">
        <NavLink to="/">
          <img src={Logo} className="w-[85px] cursor-pointer h-[85px]" alt="" />
        </NavLink>

        <ul className="flex items-center justify-center gap-5">
          <motion.div
            whileHover={{
              scale: 1.1,
              marginInline: "5px",
            }}
            transition={{ duration: 0.2 }}
          >
            <NavLink
              to="/bracelets"
              className={`text-[16px] hover:text-[#D84727] text-[#333333] tracking-wider ${
                location.pathname === "/bracelets"
                  ? "text-[#D84727] "
                  : "text-[#333333] "
              }`}
            >
              Bracelets
            </NavLink>
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.1,
              marginInline: "5px",
            }}
            transition={{ duration: 0.2 }}
          >
            <NavLink
              to="/necklaces"
              className={`text-[16px] hover:text-[#D84727] text-[#333333] tracking-wider ${
                location.pathname === "/necklaces"
                  ? "text-[#D84727] "
                  : "text-[#333333] "
              }`}
            >
              Necklaces
            </NavLink>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.1,
              marginInline: "5px",
            }}
            transition={{ duration: 0.2 }}
          >
            <NavLink
              to="/bangles"
              className={`text-[16px] hover:text-[#D84727] text-[#333333] tracking-wider ${
                location.pathname === "/bangles"
                  ? "text-[#D84727] "
                  : "text-[#333333] "
              }`}
            >
              Bangles
            </NavLink>
          </motion.div>
        </ul>
        <div className="flex items-center justify-center gap-6">
          <AnimatePresence>
            <CiSearch
              onClick={toggleSearch}
              className="mr-5 cursor-pointer"
              size={30}
            />
            {toggleInputSearch && (
              <motion.input
                key="search-input"
                initial={{ opacity: 0, x: "-20%" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, type: "spring" }}
                exit={{ opacity: 0, x: "20%" }}
                type="text"
                placeholder="Search for a product"
                className="
            rounded-full pl-3 text-sm px-10  text-opacity-50 focus:outline-none h-[34px] bg-none border-2 border-[#D84727]
            "
              />
            )}
          </AnimatePresence>
          {/* Toggleing Side Bar for Liked Products  */}
          <div className="rounded-full ml-5 relative bg-[#F1DDC9] w-[46px] h-[46px] ">
            <FaHeart
              onClick={handleToggleLikesSideBar}
              size={25}
              className=" shadow-sm absolute top-3 text-[#585656] opacity-80 left-[10.4px]"
            />

            <AnimatePresence>
              {toggleLikesSideBar && (
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: -100 },
                    show: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.5, type: "spring" }}
                  initial="hidden"
                  animate="show"
                  exit={{ x: 100, opacity: 0 }}
                  className="w-[200px] fixed z-[100] right-0 top-[10rem] bg-black text-white h-screen pb-10"
                >
                  <LikedProducts />
                </motion.div>
              )}
            </AnimatePresence>

            <div className="rounded-full flex items-center justify-center text-white absolute w-[25px] h-[25px] left-[-35%] top-8 font-meduim bg-[#D84727] opacity-90">
              <span className="text-sm">
                {likedProducts ? likedProducts.length : 0}
              </span>
            </div>
          </div>
          {/* Shopping cart */}
          <div className="rounded-full ml-5 relative bg-[#F1DDC9] w-[46px] h-[46px] ">
            <IoBagHandleOutline
              size={25}
              className=" absolute top-2 left-[10px]"
            />
            <div className="rounded-full flex items-center justify-center text-white absolute w-[25px] h-[25px] left-[-35%] top-8 font-meduim bg-[#D84727] opacity-90">
              <span className="text-sm">{quantity}</span>
            </div>
          </div>
        </div>
      </nav>
      {/* Mobile Version */}
      <nav className="flex items-center justify-between sm:hidden">
        <img src={Logo} className="w-[85px] cursor-pointer h-[85px]" alt="" />

        <div
          onClick={(e) => {
            e.preventDefault();
            handleMenuChange();
          }}
        >
          {/* if the menu is open (false), show the close icon */}
          {toggleMenu ? (
            <MdOutlineClose
              size={35}
              className="text-[#333333] cursor-pointer flex-1"
            />
          ) : (
            <HiMenuAlt1 size={35} className="text-[#333333] cursor-pointer" />
          )}
        </div>

        <div
          className={
            toggleMenu
              ? "sm:hidden ease-in-out duration-300 bg-[#D84727] flex flex-col items-center justify-start rounded-lg z-30 font-bold fixed right-0 left-[50%] h-[100vh] top-20 text-white"
              : "fixed right-[-100%]"
          }
        >
          <NavLink to="/">
            <img
              src={Logo}
              className="w-[85px] cursor-pointer h-[85px]"
              alt=""
            />
          </NavLink>

          <ul className="flex flex-col mt-5 items-start justify-start gap-8">
            <NavLink to="/necklaces" className="text-[16px] tracking-wider">
              Necklaces
            </NavLink>
            <NavLink to="/bracelets" className="text-[16px] tracking-wider">
              Bracelets
            </NavLink>
            <NavLink to="/bangles" className="text-[16px] tracking-wider">
              Bangles
            </NavLink>
            <NavLink to="/faqs" className="text-[16px] tracking-wider">
              FAQS
            </NavLink>
            <NavLink to="/Help" className="text-[16px] tracking-wider">
              Help
            </NavLink>
            <NavLink to="/contactUs" className="text-[16px] tracking-wider">
              Contact Us
            </NavLink>
          </ul>
        </div>
      </nav>
    </motion.div>
  );
}
