import data from "../../data/monthlyDeals.json";
import MonthlyDealsCard from "./MonthlyDealsCard";
import { ItemProps } from "../../Types/ItemProps";

export default function MonthlyDeals() {
  const items: ItemProps[] = data;
  return (
    <div className="lg:flex items-center justify-center gap-5 pb-[10rem]">
      {/* <div className="w-[50%] mx-auto mb-5">
        <h1 className="border-b-2 font-bold text-2xl border-b-[#333333]">
          Monthly Deals
        </h1>
      </div> */}
      {items.map((item) => (
        <MonthlyDealsCard key={item.id} {...item} />
      ))}
    </div>
  );
}
