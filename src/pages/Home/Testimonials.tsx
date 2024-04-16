import LiningStyleLarge from "../../assets/home/LiningStyle2.png";
import LiningStyleSmall from "../../assets/home/LiningStyle3.png";
import TestimonailsImg from "../../assets/home/testmonialImg.png";

export default function Testimonials() {
  return (
    <div className="pt-[5rem] lg:pr-[150px]">
      <div className=" flex flex-col lg:flex-row lg:justify-between text-center items-center justify-center gap-5">
        {/* Image Positioning For mobile */}
        <div className="bg-[#F1DDC9] block w-[80%] px-[2rem] lg:hidden mb-5 py-10 rounded-lg">
          <img className="rounded-lg mx-auto" src={TestimonailsImg} alt="" />
        </div>
        {/* Image Positioning For large screens */}
        <div className="bg-[#F1DDC9] relative hidden lg:block w-[70%] h-[60vh]">
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
            className="w-[70%] absolute h-[400px] right-[-20%] rounded-lg top-5 bottom-5 "
            src={TestimonailsImg}
            alt=""
          />
        </div>
        <div className="flex flex-col items-center w-[90%] justify-center gap-6 mb-5">
          {" "}
          <h1 className=" font-semibold text-3xl">Testimonials</h1>
          <div className="border-b-2 border-b-[#333333] w-[15%] mt-[-1.2rem] mb-5 opacity-60"></div>
          <p
            className="text-md px-10 sm:w-[70%] text-[#333333]
        "
          >
            Loving my new KAILI watch from @matoa_id, the first ever Indonesian
            watch local brand that uses wood as their main material. Like any
            other Matoa products, KAILI is inspired by Indonesian heritage.
          </p>
          <h2 className="text-xl font-meduim ">Gita Savitri</h2>
          <p className="text-[#777777] tracking-wider">
            Content Creator/Influencer
          </p>
        </div>
      </div>
    </div>
  );
}
