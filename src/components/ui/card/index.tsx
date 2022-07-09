import { Game } from "../../../types";

export default function Card({ game, index }: { game: Game; index: number }) {
  console.log(index, index % 3, index % 5, index % 7);

  return (
    <div className=" card relative bg-zinc-800 rounded-xl  shadow-md m-3 overflow-visible md:max-w-x2">
      <div className=" h-full   absolute big-icon">
        <img
          src="/images/icon.svg"
          alt="icon"
          className={`filter ${
            index % 3 === 0
              ? " hue-rotate-110"
              : index % 5 === 0
              ? " hue-rotate-210"
              : index % 7 === 0
              ? " hue-rotate-270"
              : "hue-rotate-15"
          }`}
        />
      </div>
      <div className="flex h-full">
        <div className="w-1/2 h-full ">
          <img
            src="/images/icon2.svg"
            alt="icon1"
            className="  absolute icon1 "
          />
          <img
            src="/images/icon3.svg"
            alt="icon2"
            className="animate-pulse absolute icon2"
          />

          <img
            src="/images/icon2.svg"
            alt="icon1"
            className="animate-pulse absolute icon3"
          />
          <img
            src="/images/icon3.svg"
            alt="icon2"
            className=" absolute icon4"
          />
        </div>
        <div className="w-1/2 h-full flex flex-col justify-between">
          <div className="animate-pulse mt-4 mr-2 ml-3 tracking-wide text-lg text-white italic font-extrabold">
            {game.name}
          </div>

          <p className="ml-2 text-sm sm:text-sm text-gray-300">
            {game.gameType}
          </p>
          <p className="ml-2 mb-4 text-sm sm:text-sm text-gray-300">
            by {game.provider}
          </p>
          <div className="ml-2 pt-2 pb-2 bg-zinc-900 trapozid ">
            <p className="animate-pulse text-sm sm:text-sm text-gray-300">
              {game.tags[0]}
            </p>
            <p className="animate-pulse text-sm sm:text-sm text-gray-300">
              {game.tags[1]} +{game.tags.length - 2}more
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
