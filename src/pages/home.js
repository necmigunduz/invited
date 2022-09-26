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
  const time = date.slice(11, 16);
  const pmam = date.slice(20, 22);
  let today = day + " " + monthName + " " + time + pmam;
  const btn1style = 'border rounded-2xl px-4 py-2 bg-sky-600 text-white text-xs font-bold'
  const btn2style = 'border rounded-3xl my-8 p-8 text-white bg-cyan-600 font-bold'
  return (
    <div className="my-8 flex flex-col justify-center items-center">
      <div className="text-center my-8 leading-none">
        <p className="text-[105px] text-cyan-900 font-bold tracking-tighter">Imagine if</p>
        <p className="text-[105px] font-bold text-cyan-600 tracking-tighter">Snapchat</p>
        <p className="text-[105px] text-cyan-900 font-bold tracking-tighter">had events.</p>
      </div>
      <div className="my-8">
        <p className="text-slate-700 font-light text-[38px] w-[800px] text-center">Easily host and share events with your friends across any social media.</p>
      </div>
      <img src={topImage} alt="top" className="w-[400px] rounded-t-3xl" />
      <div className="border w-[400px] h-[25em] p-4 rounded-b-3xl">
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
          <p className="my-auto">
            <strong>14</strong> responses 
            <FontAwesomeIcon icon={solid('circle')} className="text-[0.2em] my-auto mx-1" />
            <span className="text-cyan-500">see guests</span>
          </p>
          <Button btnName={"Invite"} iconName={solid('hands')} classes={btn1style} />
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
      <div>
        <Button btnName={'Create my event'} iconName={solid('champagne-glasses')} classes={btn2style} />
      </div>
      <div>
        <div className="border bg-slate-200 w-[25em] text-center py-4 rounded-xl flex justify-around">
          <p className="font-bold"><span className="text-xs">A</span><span>A</span></p>
          <div className="flex items-center">
            <FontAwesomeIcon icon={solid('lock')} className="text-slate-400" />  
            <a href="domain.com" className="px-2"><p>domain.com</p></a>
          </div>
          <FontAwesomeIcon icon={solid('arrow-rotate-left')} />
        </div>
        <div className="flex justify-around my-4 py-3 text-blue-400 ">
          <FontAwesomeIcon icon={solid('chevron-left')} />
          <FontAwesomeIcon icon={solid('chevron-right')} />
          <FontAwesomeIcon icon={solid('angles-up')} />
          <FontAwesomeIcon icon={solid('book')} />
          <FontAwesomeIcon icon={solid('copy')} />
        </div>
      </div>
    </div>
  );
};

export default Home;
