import { useTimer } from "react-timer-hook";
import "tailwindcss/tailwind.css";

export default function CountdownTimer({ expiryTimestamp }) {
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <div className="flex space-x-2 justify-center">
      <div className="text-center bg-white  px-4 rounded">
        <div className="text-2xl " style={{ color: "#3BB77E" }}>
          {days}
        </div>
        <div className="text-md" style={{ color: "#7E7E7E" }}>
          Days
        </div>
      </div>
      <div className="text-center bg-white px-4 rounded">
        <div className="text-2xl " style={{ color: "#3BB77E" }}>
          {hours}
        </div>
        <div className="text-md" style={{ color: "#7E7E7E" }}>
          Hours
        </div>
      </div>
      <div className="text-center bg-white px-4  rounded">
        <div className="text-2xl " style={{ color: "#3BB77E" }}>
          {minutes}
        </div>
        <div className="text-md" style={{ color: "#7E7E7E" }}>
          Mins
        </div>
      </div>
      <div className="text-center bg-white px-4 rounded">
        <div className="text-2xl " style={{ color: "#3BB77E" }}>
          {seconds}
        </div>
        <div className="text-md" style={{ color: "#7E7E7E" }}>
          Sec
        </div>
      </div>
    </div>
  );
}
