import { FeaturedProps } from "../../Types/ItemProps";
import useFormatCurrency from "../../hooks/useFormatCurrency";
export default function FeaturedCard({
  img,
  braceletName,
  price,
}: FeaturedProps) {
  const { formatCurrency } = useFormatCurrency();
  return (
    <div className="flex flex-col lg:flex-row items-center  justify-center gap-4 text-center lg:h-[50vh] w-[70%] lg:w-[25%]">
      <div className="bg-[#F1DDC9] lg:w-[60%] w-[80%] rounded-md px-5 py-5">
        <img
          className="w-[60%] h-auto lg:w-[70%] lg:h-[20vh] mx-auto"
          src={img}
          alt=""
        />
      </div>
      <div className="w-full lg:w-[40%] text-center gap-3 flex flex-col items-center justify-center">
        <h1 className="text-xl uppercase font-meduim">{braceletName}</h1>
        <span className="text-2xl font-meduim">
          {formatCurrency.format(price)}
        </span>
      </div>
      <div className="flex sm:hidden items-center justify-center gap-5">
        <button className="text-lg text-[#D84727]">View details</button>
        <button className="bg-[#D84727] text-white font-meduim px-5 py-2">
          Add to cart
        </button>
      </div>
    </div>
  );
}
