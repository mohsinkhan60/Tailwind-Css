import { IoReorderThreeOutline } from "react-icons/io5";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between w-full px-4 bg-indigo-200 h-14 md:p-4">
      <div className="text-3xl font-bold text-indigo-700 cursor-pointer ">
        Mohsin Dev
      </div>
      <ul className="hidden font-semibold md:flex">
        <li className="mx-[20px] cursor-pointer">Home</li>
        <li className="mx-[20px] cursor-pointer">About</li>
        <li className="mx-[20px] cursor-pointer">Contact</li>
      </ul>
      <button className="hidden px-2 py-2 font-bold text-white bg-indigo-700 rounded-lg cursor-pointer md:block hover:bg-indigo-500">
        Login/Signup
      </button>
      <div className="md:hidden">
        <a className="text-4xl font-bold " href="#"><IoReorderThreeOutline /></a>
      </div>
    </nav>
  );
};
export default Navbar;
