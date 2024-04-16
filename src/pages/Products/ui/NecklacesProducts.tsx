import NecklacesCardGridView from "../Cards/NecklacesCardGridView";
import data from "../../../data/necklaces.json";
import NecklacesCardColView from "../Cards/NecklacesCardColView";
export default function NecklacesProducts({
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
          {listView && <NecklacesCardGridView {...item} />}
          {gridView && <NecklacesCardColView {...item} />}
        </div>
      ))}
    </div>
  );
}
