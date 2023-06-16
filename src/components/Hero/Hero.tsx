import "./Hero.css";
import background from "../../assets/Background.png";
import image from "../../assets/Foreground.png";
import Button from "../Buttons/Button";
const Hero = () => {
  return (
    <>
      <div className="Hero1" style={{ background: `url(${background})` }}>
        <div className="paragraph-Heading mb-5">
          <p className="md:text-xl">
            Transform your mind and body with our 21-day wellness
            <br />
            program . Join our community and unlock your limitless <br />
            potential today!.
          </p>
        </div>
        <Button className="px-6 py-[0.5rem] Hero-button">Get Started</Button>
        <img
          src={image}
          className="image md:w-[250px] w-[170px] sm:w-[200px] lg:w-[340px] xl:w-[370px]"
          alt="Mind Blowing"
        ></img>
        <div className="black"></div>
      </div>
    </>
  );
};

export default Hero;
