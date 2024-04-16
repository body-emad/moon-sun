import FilteringNav from "./ui/FilteringNav";
import { motion } from "framer-motion";
export default function Bracelets() {
  return (
    <div className="">
      <motion.h1
        variants={{
          hidden: { opacity: 0, x: -100 },
          show: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 0.5, type: "spring" }}
        initial="hidden"
        animate="show"
        className="text-3xl mt-[3rem] font-meduim tracking-[3px] text-center"
      >
        Our Colleciton of Bracelets
      </motion.h1>
      <FilteringNav />
    </div>
  );
}
