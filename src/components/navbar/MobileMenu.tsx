import menu from "../../assets/hamburger-menu.svg";
import x from "../../assets/x.svg";
import { Link } from "react-router-dom";

type MobileMenuProps = {
  open: boolean;
  setOpen: any;
};

export default function MobileMenu(props: MobileMenuProps) {
  const { open, setOpen } = props;
  return (
    <>
      <button
        onClick={() => setOpen((prevState: boolean) => !prevState)}
        className="lg:hidden"
      >
        <img src={open ? x : menu} alt="hamburger menu" />
      </button>

      {open && (
        <ul className="flex absolute right-4 top-16 flex-col gap-x-8 lg:hidden z-10">
          <li
            onClick={() => setOpen((prevState: boolean) => !prevState)}
            className="bg-slate-200 mb-4 py-1 w-36 pl-2 rounded"
          >
            <Link to="/" className="text-lg font-bold text-primaryOrange ">
              Home
            </Link>
          </li>
          <li
            onClick={() => setOpen((prevState: boolean) => !prevState)}
            className="bg-slate-200 mb-4 py-1 w-36 pl-2 rounded"
          >
            <Link to="/about" className="text-lg font-bold text-primaryOrange">
              About Us
            </Link>
          </li>
          <li
            onClick={() => setOpen((prevState: boolean) => !prevState)}
            className="bg-slate-200 mb-4 py-1 w-36 pl-2 rounded"
          >
            <Link
              to="/courses"
              className="text-lg font-bold text-primaryOrange"
            >
              Courses
            </Link>
          </li>
          <li
            onClick={() => setOpen((prevState: boolean) => !prevState)}
            className="bg-slate-200 mb-4 py-1 w-36 pl-2 rounded"
          >
            <Link
              to="/community"
              className="text-lg font-bold text-primaryOrange"
            >
              Community
            </Link>
          </li>
          <li
            onClick={() => setOpen((prevState: boolean) => !prevState)}
            className="bg-slate-200 mb-4 py-1 w-36 pl-2 rounded"
          >
            <Link to="contact" className="text-lg font-bold text-primaryOrange">
              Contact Us
            </Link>
          </li>
        </ul>
      )}
    </>
  );
}
