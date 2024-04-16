import BanglesCardGridView from "../Cards/BanglesCardGridView";
import data from "../../../data/bangles.json";
import BanglesCardColView from "../Cards/BanglesCardColView";
export default function BanglesProducts({
  listView,
  gridView,
}: {
  listView: boolean;
  gridView: boolean;
}) {
  return (
    <div className=" mt-[5rem] flex sm:flex-row flex-wrap flex-col justify-center gap-[3.3rem]">
      {data.map((item) => (
        <div key={item.id} className="flex items-center justify-center gap-5">
          {gridView && <BanglesCardGridView {...item} />}
          {listView && <BanglesCardColView {...item} />}
        </div>
      ))}
    </div>
  );
}
