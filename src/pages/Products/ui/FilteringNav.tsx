import GridView from "../../../assets/icons/GridView.png";
import ColumnView from "../../../assets/icons/ColumnView.png";
import useToggleView from "../../../hooks/useToggleView";
import FilteringAside from "./FilteringAside";
import BraceletsProducts from "./BraceletsProducts";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import NecklacesProducts from "./NecklacesProducts";
import BanglesProducts from "./BanglesProducts";

export default function FilteringNav() {
  const { toggleView, handleToggleView } = useToggleView();
  const location = useLocation();

  return (
    <motion.nav
      variants={{
        hidden: { opacity: 0, x: -200 },
        show: { opacity: 1, x: 0 },
      }}
      transition={{ duration: 0.5, type: "spring" }}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="text-black p-5"
    >
      <div className="hidden sm:flex items-center justify-center gap-[8rem]">
        <div>
          <h1 className="">Showing 1-12 of 24 item(s) </h1>
        </div>
        <div className="flex items-center justify-center gap-5">
          {/* Featured */}
          <div className="flex items-center justify-center gap-1">
            <label className="text-meduim">Featured</label>
            <input
              type="checkbox"
              className="
              border-2 checked:accent-[#3D3D3D] border-gray-300 border-opacity-45 w-[15px] rounded-[50%] h-[14px]
             "
            />
          </div>
          {/* Display View */}
          <div onClick={handleToggleView}>
            {toggleView ? (
              <img className="w-[25px] h-[25px]" src={ColumnView} alt="" />
            ) : (
              <img className="w-[25px] h-[25px]" src={GridView} alt="" />
            )}
          </div>
        </div>
      </div>
      <AnimatePresence>
        {toggleView && (
          // Grid View
          <motion.div className="block h-fit sm:flex items-start mx-auto justify-center gap-5 sm:w-full w-[60%]">
            <div>
              <FilteringAside />
            </div>
            <motion.div>
              {location.pathname === "/bracelets" && (
                <BraceletsProducts
                  gridView={toggleView}
                  listView={!toggleView}
                />
              )}
              {location.pathname === "/necklaces" && (
                <NecklacesProducts
                  gridView={toggleView}
                  listView={!toggleView}
                />
              )}
              {location.pathname === "/bangles" && (
                <BanglesProducts gridView={toggleView} listView={!toggleView} />
              )}
            </motion.div>
          </motion.div>
        )}

        {!toggleView && (
          // Column View
          <motion.div className="flex flex-col sm:flex-row items-start justify-center gap-5">
            <div className="hidden sm:block">
              <FilteringAside />
            </div>
            <motion.div>
              {location.pathname === "/bracelets" && (
                <BraceletsProducts
                  listView={!toggleView}
                  gridView={toggleView}
                />
              )}
              {location.pathname === "/necklaces" && (
                <NecklacesProducts
                  listView={!toggleView}
                  gridView={toggleView}
                />
              )}
              {location.pathname === "/bangles" && (
                <BanglesProducts listView={!toggleView} gridView={toggleView} />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
