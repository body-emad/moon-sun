import LiningStyleLarge from "../../assets/home/LiningStyle2.png";
import LiningStyleSmall from "../../assets/home/LiningStyle3.png";
import RecentNewsImg from "../../assets/home/RecentNewsImg.png";

export default function RecentNews() {
  return (
    <div className="pt-[5rem] lg:pl-[150px] pb-[19rem]">
      <div className=" flex flex-col lg:flex-row lg:justify-between text-center items-center justify-center gap-5">
        <div className="flex flex-col items-center justify-center gap-6 mb-5">
          {" "}
          <h1 className="border-b-2 border-b-[#333333] font-bold text-2xl">
            Recent News
          </h1>
          <p
            className="text-lg text-[#777777] tracking-wide
        "
          >
            Where to Travel?
          </p>
          <h1 className="font-meduim text-2xl">
            Matoa Where To Travel? Yogyakarta
          </h1>
          <button className="border-2 hover:bg-[#D84727] hover:outline-none transition ease-in-out duration-200  hover:text-white mt-[3rem] hidden lg:block border-[#D84727] text-[#D84727] font-meduim px-10 py-3 text-[16px] tracking-wide">
            Discover
          </button>
        </div>
        {/* Image Positioning For mobile */}
        <div className="bg-[#F1DDC9] w-[80%] block lg:hidden mb-5 px-[2rem] py-10 rounded-lg">
          <img className="rounded-lg" src={RecentNewsImg} alt="" />
        </div>
        {/* Image Positioning For large screens */}
        <div className="bg-[#F1DDC9] relative hidden lg:block w-[50%] h-[60vh]">
          <img
            className="w-[80%] absolute left-[5rem] top-[-3rem]"
            src={LiningStyleLarge}
            alt=""
          />
          <img
            className="w-[65%] absolute opacity-50 left-[5rem] bottom-[-9rem]"
            src={LiningStyleSmall}
            alt=""
          />
          <img
            className="w-[70%] absolute left-[-30%] rounded-lg top-5 bottom-5 "
            src={RecentNewsImg}
            alt=""
          />
        </div>
        <button className="border-2 lg:hidden border-[#D84727] text-[#D84727] font-meduim px-10 py-3 text-[16px] tracking-wide">
          Discover
        </button>
      </div>
    </div>
  );
}
