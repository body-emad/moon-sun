import data from "../../../data/bracelets.json";
import BraceletsCardColView from "../Cards/BraceletsCardColView";
import BraceletsCardGridView from "../Cards/BraceletsCardGridView";
export default function BraceletsProducts({
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
          {listView && <BraceletsCardColView {...item} />}
          {gridView && <BraceletsCardGridView {...item} />}
        </div>
      ))}
    </div>
  );
}
