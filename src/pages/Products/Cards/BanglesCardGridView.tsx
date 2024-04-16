import useFormatCurrency from "../../../hooks/useFormatCurrency";
export type BanglesProps = {
  id: number;
  prevPrice: number;
  currPrice: number;
  bangleName: string;
  img: string;
  discount: string;
  material: string;
};
const { formatCurrency } = useFormatCurrency();
const isSpecialId = (id: number) => {
  const isNewProduct = [3, 5, 9];
  return isNewProduct.includes(id);
};
export default function BanglesCardGridView({
  id,
  prevPrice,
  currPrice,
  bangleName,
  img,
  discount,
  material,
}: BanglesProps) {
  return (
    <div className="flex w-[100%] border-2 border-opacity-10 border-[#cecccc] mx-auto flex-col items-center justify-center gap-7">
      <div className=" bg-[#FFFAFA] relative w-full px-5 py-10 rounded-sm bg-opacity-40">
        {isSpecialId(id) && (
          <div className=" absolute top-[-1.5rem] uppercase font-light text-lg right-[-2rem] bg-[#01522D] rounded-sm text-white px-7 py-[4px]">
            New
          </div>
        )}
        {material === "gold" && (
          <div className=" absolute top-[-1.5rem] font-light text-lg right-[-2rem] bg-[#D84727] rounded-sm text-white px-7 py-[4px]">
            {discount}
          </div>
        )}
        <img src={img} className=" w-[220px] mx-auto h-[170px]" alt="" />
      </div>
      <div className="text-center">
        <h1 className="text-xl mb-2 font-medium">{bangleName}</h1>
        <span className="text-[#777777]">{discount} Off</span>
        <p className="line-through decoration-[#D84727] tracking-[3px] text-[#777777]">
          {formatCurrency.format(prevPrice)}
        </p>
        <p className="text-black mt-2 font-meduim text-[27px]">
          {formatCurrency.format(currPrice)}
        </p>
        <button
          className={` ${
            isSpecialId(id) ? "bg-[#01522D]" : "bg-[#D84727]"
          } text-white font-meduim px-16 mt-4 py-2`}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
