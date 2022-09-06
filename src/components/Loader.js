import { FaInstagram } from "react-icons/fa";

function Loader() {
  return (
    <div className="fixed top-0 left-0 flex h-full w-full flex-col items-center justify-center bg-zinc-50 text-pink-600">
      <FaInstagram size={100} />
      <h6 className="text-2xl  font-semibold">Instagram</h6>
    </div>
  );
}

export default Loader;
