import { Link } from "react-router-dom";
import illustration from "../assets/Illustration.svg";
import ScheduleCard from "../components/dashboard/ScheduleCard";
import scheduleData from "../data/dashboardData";

export default function Dashboard() {
  const allSchedules = scheduleData.map((s, i) => (
    <ScheduleCard key={i} time={s.time} title={s.title} />
  ));

  return (
    <section className="w-4/5 mx-auto">
      <img src={illustration} alt="illustration" className="mb-10" />
      <div>
        <div>
          <div className="px-4 font-bold lg:w-[521px] h-[257px] bg-[#FFF5EF] border border-[#F47D31] rounded-2xl flex flex-col items-center justify-center box-border">
            <p className="text-[2.5rem] text-[#615E83] mb-6">
              Day - <span className="text-[5rem] text-gray-800">01</span>
              <span className="text-2xl">/26</span>
            </p>
            <p className="text-[#94979C] lg:text-lg">
              Batch 42 - Session starts at 5 am
            </p>
            <Link
              to="/courses"
              className="w-[282px] lg:w-[429px] h-[50px] bg-primaryOrange px-2 rounded-2xl lg:text-xl text-white flex items-center justify-center"
            >
              Click here to join the session →
            </Link>
          </div>
          <p className="font-semibold lg:text-[32px] text-[#999999] underline py-4">
            Schedule
          </p>
          <div>{allSchedules}</div>
        </div>
        <div></div>
      </div>
    </section>
  );
}
