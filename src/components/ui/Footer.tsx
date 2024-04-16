import Logo from "../../assets/footer/Logo.png";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <div className=" px-10 bg-[#D84727] text-white mt-[5rem] rounded-sm pt-10 sm:h-[75vh]">
      {/* Mobile Footer */}
      <div className="flex items-center whitespace-nowrap w-full justify-center gap-10 sm:hidden">
        <img className="w-[50%]" src={Logo} alt="" />

        <p className="font-meduim text-md">
          Copywright&copy; {new Date().getFullYear()} All rights are reserved
        </p>
      </div>
      {/* Large Screens Footer */}
      <div className="hidden sm:flex items-start justify-start gap-5">
        {/* First Column */}
        <div className="flex flex-col w-[25%] items-start justify-start gap-3">
          <img className="w-[80px] h-[80px] " src={Logo} alt="" />
          <h1 className="text-lg font-meduim">Address</h1>
          <p className="opacity-90 text-md w-[255px]">
            Store & Office Jl. Setrasari Kulon III, No. 10-12, Sukarasa,
            Sukasari, Bandung, Jawa Barat, Indonesia 40152
          </p>
          <h1 className="text-lg font-meduim">Office Hour</h1>
          <p className="opacity-90 text-md">Monday - Sunday 10.00 - 18.00</p>
        </div>
        {/* Second Column */}
        <div className="flex flex-col w-[25%] mt-[4rem] items-start justify-start gap-5">
          <h1 className="text-2xl font-meduim">Get in touch</h1>
          <div className="flex items-center text-md justify-center gap-5">
            <p>Phone</p>
            <p>022-20277564</p>
          </div>
          <div className="flex items-center text-md justify-center gap-5">
            <p>Service Center</p>
            <p>0811-233-8899</p>
          </div>
          <div className="flex items-center text-md justify-center gap-5">
            <p>Customer Service</p>
            <p>0811-235-9988</p>
          </div>
          <div className="flex items-center text-sm justify-center gap-3">
            <FaFacebook size={30} className="rounded-md" />
            <FaSquareInstagram size={30} className="rounded-md" />
            <FaTwitterSquare size={30} className="rounded-md" />
            <FaYoutube size={30} className="rounded-md" />
          </div>
        </div>
        <div className="flex flex-col text-start w-[25%] mt-[4rem] items-start justify-start gap-5">
          <h1 className="text-2xl font-meduim">Useful Link</h1>
          <div className="flex items-start text-md justify-start gap-5">
            <ul className="flex flex-col items-start justify-start gap-3">
              <li>Warranty & Complaints</li>
              <li>Order & Shipping</li>
              <li>Tracking Order</li>
              <li>About Us</li>
              <li>Repair</li>
              <li>Terms</li>
              <li>FAQ</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col w-[25%] text-start mt-[4rem] items-start justify-start gap-5">
          <h1 className="text-2xl font-meduim">Campaign</h1>
          <div className="flex items-start text-md justify-start gap-5">
            <ul className="flex flex-col items-start justify-start gap-3">
              <li>Mengenal Arti Cukup</li>
              <li>Tell Your Difference</li>
              <li>Waykambas</li>
              <li>Rebrand</li>
              <li>Gallery</li>
              <li>Singo</li>
              <li>Rakai</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
