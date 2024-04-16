import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ItemExists() {
  const notify = () =>
    toast.success("Liked!", {
      transition: Flip,
    });
  return (
    <div>
      <button
        className="bg-[#D84727] hover:opacity-90 text-xl tracking-widest text-white font-light w-[180px] h-[55px]"
        onClick={notify}
      >
        Add to cart
      </button>
      <ToastContainer autoClose={2000} position="top-center" />
    </div>
  );
}
