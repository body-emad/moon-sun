import data from "../../data/featured.json";
import FeaturedCard from "./FeaturedCard";
import { FeaturedProps } from "../../Types/ItemProps";

export default function Featured() {
  const items: FeaturedProps[] = data;

  return (
    <>
      <div className="flex lg:flex-wrap lg:flex-row flex-col pb-[1rem] items-center justify-center sm:gap-10 gap-[5rem] px-10">
        {/* <h1 className="text-start font-bold text-2xl">Featured</h1> */}
        {items.map((item) => (
          <FeaturedCard key={item.id} {...item} />
        ))}
      </div>
      <div className="flex items-center justify-center pb-[5rem]">
        <div className="line lg:block hidden mx-4 h-0.5 bg-[#999999] opacity-45 flex-grow"></div>
        <div>
          <button className="border-2 hover:bg-[#D84727] hover:outline-none transition ease-in-out duration-200  hover:text-white border-[#D84727] text-[#D84727] font-medium px-20 py-3 text-[16px] tracking-wide">
            See More
          </button>
        </div>

        <div className="line lg:block hidden mx-4 h-0.5 bg-[#999999] opacity-45  flex-grow"></div>
      </div>
    </>
  );
}
