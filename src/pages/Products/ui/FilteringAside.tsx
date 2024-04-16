import useFormatCurrency from "../../../hooks/useFormatCurrency";
import { motion } from "framer-motion";

export default function FilteringAside() {
  const { formatCurrency } = useFormatCurrency();
  return (
    <section className="py-5 px-5">
      <aside className="flex flex-col w-[250px] items-start justify-start gap-5">
        {/* Container */}
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -100 },
            show: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.2, type: "spring" }}
          initial="hidden"
          animate="show"
          exit={{ opacity: 0, x: -100 }}
          className="bg-white hidden w-[100%] h-auto pb-5 text-black md:flex flex-col items-start gap-5 justify-start"
        >
          <h1 className="border-l-[3px] text-center rounded-[2px] border-l-black pl-5 text-xl font-meduim mt-4 ml-4">
            Material
          </h1>
          {/* Checkboxes container 1 */}
          <div className="flex flex-col items-start justify-start gap-2">
            <div className="flex ml-4 items-center justify-center gap-2">
              <input
                type="checkbox"
                className="
              border-2 checked:accent-[#3D3D3D] border-gray-300 border-opacity-45 w-[15px] h-[15px]
             "
              />
              <label className="text-[#414141] text-[18px]">Gold</label>
            </div>
            <div className="flex ml-4 items-center justify-center gap-2">
              <input
                type="checkbox"
                className="
              border-2 checked:accent-[#3D3D3D] border-gray-300 border-opacity-45 w-[15px] h-[15px]
             "
              />
              <label className="text-[#414141] text-[18px]">Silver</label>
            </div>
            <div className="flex ml-4 items-center justify-center gap-2">
              <input
                type="checkbox"
                className="
              border-2 checked:accent-[#3D3D3D] border-gray-300 border-opacity-45 w-[15px] h-[15px]
             "
              />
              <label className="text-[#414141] text-[18px]">Diamond</label>
            </div>
          </div>
        </motion.div>
        {/* Container */}
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -140 },
            show: { opacity: 1, x: 0 },
          }}
          transition={{ duration: 0.9, type: "spring" }}
          initial="hidden"
          animate="show"
          exit={{ opacity: 0, x: -140 }}
          className="bg-white hidden w-[100%] h-auto pb-5 text-black md:flex flex-col items-start gap-5 justify-start"
        >
          <h1 className="border-l-[3px] text-center rounded-[2px] border-l-black pl-5 text-xl font-meduim mt-4 ml-4">
            Price Range
          </h1>
          {/* Checkboxes container 1 */}
          <div className="flex flex-col items-start justify-start gap-2">
            <div className="flex ml-4 items-center justify-center gap-2">
              <input
                type="checkbox"
                className="
              border-2 checked:accent-[#3D3D3D] border-gray-300 border-opacity-45 w-[15px] h-[15px]
             "
              />
              <label className="text-[#414141] text-[16px]">
                {formatCurrency.format(100)} - {formatCurrency.format(500)}
              </label>
            </div>
            <div className="flex ml-4 items-center justify-center gap-2">
              <input
                type="checkbox"
                className="
              border-2 checked:accent-[#3D3D3D] border-gray-300 border-opacity-45 w-[15px] h-[15px]
             "
              />
              <label className="text-[#414141] text-[16px]">
                {formatCurrency.format(500)} - {formatCurrency.format(1000)}
              </label>
            </div>
            <div className="flex ml-4 items-center justify-center gap-2">
              <input
                type="checkbox"
                className="
              border-2 checked:accent-[#3D3D3D] border-gray-300 border-opacity-45 w-[15px] h-[15px]
             "
              />
              <label className="text-[#414141] text-[16px]">
                {formatCurrency.format(1100)} - {formatCurrency.format(10000)}
              </label>
            </div>
          </div>
        </motion.div>
      </aside>
    </section>
  );
}
