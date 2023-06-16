import Post6 from "../../assets/Post6.png";

export default function LoginCard() {
  return (
    <div className="font-mainFont font-bold pr-12">
      <p className="text-primaryOrange text-xl">
        Welcome to Mind Blowing mornings !
      </p>
      <h2 className="text-4xl leading-10 text-[#0A033CCC] my-4">
        Login to view your personal course Dashboard
      </h2>
      <img src={Post6} alt="image of a boy" />
    </div>
  );
}
