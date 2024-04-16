import useFormatCurrency from "../../../hooks/useFormatCurrency";
import useSpecialOffer from "../../../hooks/useSpecialOffer";
import { BraceletsProps } from "./BraceletsCardGridView";
export default function BraceletsCardColView({
  id,
  prevPrice,
  currPrice,
  braceletName,
  img,
  discount,
  material,
}: BraceletsProps) {
  const { formatCurrency } = useFormatCurrency();
  const { isSpecialId } = useSpecialOffer();
  return (
    <div className="flex bg-[#FFFAFA] relative py-4 px-5 bg-opacity-70 flex-col sm:flex-row items-start justify-center gap-5">
      {/* Image */}
      {isSpecialId(id) && (
        <div className=" absolute top-[-1.5rem] uppercase font-light text-lg left-[-1.3rem] bg-[#01522D] rounded-sm text-white px-7 py-[4px]">
          New
        </div>
      )}
      {material === "gold" && (
        <div className=" absolute top-[-1.5rem] font-light text-lg left-[-1.3rem] bg-[#D84727] rounded-sm text-white px-7 py-[4px]">
          {discount}
        </div>
      )}
      <img className="w-[50%] mx-auto h-[169px]" src={img} alt="" />

      {/* Text */}
      <div className="flex text-black flex-col items-center sm:items-start justify-center gap-4">
        <p className="font-medium text-2xl">{braceletName}</p>
        <p className="text-[#777777] opacity-80 tracking-wider">
          {discount}Off
        </p>
        <div className="flex items-center mt-[-10px] justify-center gap-2">
          <span className="text-2xl tracking-wider">
            {formatCurrency.format(currPrice)}
          </span>
          <span className="line-through text-[#777777] opacity-80 decoration-[#D84727] tracking-wider">
            {formatCurrency.format(prevPrice)}
          </span>
        </div>
        <p className="w-[70%] my-5 sm:my-0 mx-auto text-center sm:text-start sm:mx-0">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita
          ullam itaque eius vero nam deserunt, enim eum eos! Reiciendis maiores
          fuga officiis aliquid incidunt, illum in voluptatem. Facilis, optio
          amet.
        </p>
        <div className="flex items-center justify-center gap-5 mt-5 ">
          <button
            className={` ${
              isSpecialId(id) ? "bg-[#01522D]" : "bg-[#D84727]"
            } text-white font-meduim px-16 py-2`}
          >
            Add to cart
          </button>
          <button className="text-[#D84727]">View Details</button>
        </div>
      </div>
    </div>
  );
}
