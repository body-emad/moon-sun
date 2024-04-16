import Featured from "./Featured";
import Hero from "./Hero";
import MonthlyDeals from "./MonthlyDeals";
import RecentNews from "./RecentNews";
import Testimonials from "./Testimonials";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5, type: "spring" }}
      initial="hidden"
      animate="show"
      exit="hidden"
    >
      <Hero />
      <MonthlyDeals />
      <RecentNews />
      <Featured />
      <Testimonials />
    </motion.div>
  );
}
