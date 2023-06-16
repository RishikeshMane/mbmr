import logo from "../../assets/footerLogo.svg";
import insta from "../../assets/instagram.svg";
import twitter from "../../assets/twitter.svg";
import facebook from "../../assets/facebook.svg";

export default function Footer() {
  return (
    <footer className="bg-footerBg py-8 px-6 text-[13px] text-lightGray sm:text-lg sm:px-16 lg:flex lg:px-6 lg:text-base lg:justify-between 2xl:px-32">
      <div className="hidden lg:block lg:w-48 xl:w-60">
        <img src={logo} alt="logo" className="w-[90px] h-16" />
        <p className="font-bold leading-[20px] my-4">
          Clear your thoughts, Focus your mind, and Reduce stress!
        </p>
        <button className="h-14 bg-primaryOrange rounded-xl font-bold capitalize text-white w-44 text-lg xl:text-2xl xl:w-full">
          Submit
        </button>
      </div>

      <div className="order-2">
        <p className="font-bold pb-2">Need help?</p>
        <form className="w-[315px] h-9 bg-white shadow-footerInputShadow rounded-md sm:w-[350px] sm:h-10 xl:w-[415px] xl:h-11">
          <input
            placeholder="Your email address"
            type="email"
            className="h-full outline-none rounded-footerBorderR px-[10px] w-52 sm:w-60 xl:w-[260px]"
          />
          <button className="capitalize w-[107px] h-full rounded bg-primaryOrange text-white font-bold sm:w-[110px] xl:w-[155px]">
            Submit
          </button>
        </form>
        <div className="flex gap-x-4 mt-4 mb-12">
          <a href="#">
            <img src={insta} alt="instagram icon" />
          </a>
          <a href="#">
            <img src={twitter} alt="twitter icon" />
          </a>
          <a href="#">
            <img src={facebook} alt="facebook icon" />
          </a>
        </div>
      </div>

      <div className="flex justify-between lg:gap-x-6">
        <div className="flex flex-col">
          <p className="font-bold">Quick Links</p>
          <a href="#">Home</a>
          <a href="#">Community</a>
          <a href="#">Courses</a>
        </div>

        <div className="flex flex-col">
          <p className="font-bold">Company</p>
          <a href="#">About us</a>
          <a href="#">Contact us</a>
        </div>

        <div className="flex flex-col">
          <p className="font-bold">Further information</p>
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy policy</a>
          <a href="#">Cookies policy</a>
        </div>
      </div>
    </footer>
  );
}
