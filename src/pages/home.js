import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import topImage from "../assets/top-image.png";
import Button from "../components/button";
import Block from "../components/block";

const Home = () => {
  const d = new Date();
  const date = d.toLocaleString();
  const month = Number(date[0]);
  function toMonthName(monthNumber) {
    const date = new Date();
    date.setMonth(monthNumber - 1);

    return date.toLocaleString("en-US", {
      month: "long",
    });
  }
  const monthName = toMonthName(month);
  const day = date.slice(2, 4).toString();
  const year = date.slice(5, 9).toString();
  const time = date.slice(11, 16);
  const pmam = date.slice(20, 22);
  let today = day + " " + monthName + " " + time + pmam;

  return (
    <div className="my-6 flex flex-col justify-center items-center">
      <div className="text-center my-8 leading-none">
        <p className="text-[105px] text-cyan-900 font-bold tracking-tighter">Imagine if</p>
        <p className="text-[105px] font-bold text-cyan-600 tracking-tighter">Snapchat</p>
        <p className="text-[105px] text-cyan-900 font-bold tracking-tighter">had events.</p>
      </div>
      <div>
        <p className="text-slate-500">Easily host and share events with your friends across any social media.</p>
      </div>
      <div className="border w-[400px] h-[650px] p-4 rounded-3xl">
        <img src={topImage} alt="top" className="rounded-xl" />
        <div className="ml-3 my-2">
          <h1 className="text-3xl font-bold">Movie Night</h1>
          <span className="text-xs font-bold">
            <FontAwesomeIcon
              icon={solid("hand")}
              className="mx-1 text-yellow-500"
            />
            <span className="text-slate-400">Hosted by</span>{" "}
            <span className="text-slate-600">Elysa</span>
          </span>
        </div>
        <div className="flex justify-around border rounded-2xl p-2">
          <p>
            <strong>14</strong> responses . <span>see guests</span>
          </p>
          <Button btnName={"Invite"} />
        </div>
        <div>
          <Block
            iconName={solid("calendar")}
            firstLine={today}
            secondLine={`to ${today} UTC +3`}
          />
          <Block
            iconName={solid("location-pin")}
            firstLine={"Street name"}
            secondLine={"301 Rowes Lane, WA, 7183"}
          />
          <Block
            iconName={solid("link")}
            firstLine={"Link"}
            secondLine={"netflix.com"}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
