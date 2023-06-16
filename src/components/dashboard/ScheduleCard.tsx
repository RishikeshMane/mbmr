type ScheduleCardType = {
  title: string;
  time: string;
};

export default function ScheduleCard(props: ScheduleCardType) {
  const { title, time } = props;

  return (
    <div className="flex items-center justify-between px-12 lg:w-[521px] h-[87px] bg-[#FFF7F2] rounded-2xl mb-5">
      <div className="flex items-center gap-x-8">
        <div>
          <span className="h-3 w-3 rounded-full block bg-[#3649F9]"></span>
        </div>
        <div>
          <h3 className="font-semibold text-xl text-black">{title}</h3>
          <h4 className="font-medium text-[#0A033C]">{time}</h4>
        </div>
      </div>
      <span className="w-5 h-[18px] opacity-30">&#707;</span>
    </div>
  );
}
