import { Game } from "../../../types";

export default function CardDetail({ game }: { game: Game }) {
  return (
    <div className=" relative bg-zinc-800 rounded-xl  shadow-md m-3 overflow-visible md:max-w-xl h-1/3">
      <div className=" h-full   absolute big-icon">
        <img src="/images/icon.svg" alt="icon" />
      </div>
      <div className="flex h-full">
        <div className="w-1/2 h-full ">
          <img
            src="/images/icon2.svg"
            alt="icon1"
            className="absolute icon1 "
          />
          <img src="/images/icon3.svg" alt="icon2" className="absolute icon2" />

          <img src="/images/icon2.svg" alt="icon1" className="absolute icon3" />
          <img
            src="/images/icon3.svg"
            alt="icon2"
            className=" absolute icon4"
          />
        </div>
        <div className="w-1/2 h-full flex flex-col justify-between">
          <div className="mt-4 mr-2 ml-3 tracking-wide text-lg text-white italic font-extrabold">
            {game.name}
          </div>

          <p className="ml-2 text-sm sm:text-sm text-gray-300">
            {game.gameType}
          </p>
          <p className="ml-2 mb-4 text-sm sm:text-sm text-gray-300">
            by {game.provider}
          </p>
          <div className="ml-2 pt-2 pb-2 bg-zinc-900 trapozid ">
            <p className=" text-sm sm:text-sm text-gray-300">{game.tags[0]}</p>
            <p className=" text-sm sm:text-sm text-gray-300">
              {game.tags[1]} +{game.tags.length - 2}more
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
