import { Game } from "../../../types/game";

export default function Card({ game }: { game: Game }) {
  return (
    <div className="bg-zinc-800 rounded-xl shadow-md m-3 overflow-hidden md:max-w-x2">
      <div className="flex">
        <div className="w-1/2 h-full ">
          <img
            src="/images/icon2.svg"
            alt="icon1"
            className=" absolute icon1 "
          />
          <img
            src="/images/icon3.svg"
            alt="icon2"
            className=" absolute icon2"
          />
          <div className="w-full h-full relative">
            <img src="/images/icon.svg" alt="icon" className=" absolute" />
          </div>
          <img
            src="/images/icon2.svg"
            alt="icon1"
            className=" absolute icon3"
          />
          <img
            src="/images/icon3.svg"
            alt="icon2"
            className=" absolute icon4"
          />
        </div>
        <div className="w-1/2 h-full">
          <div className="mt-8 mb-8 mr-8 ml-2 tracking-wide text-lg text-white font-extrabold">
            {game.name}
          </div>

          <p className="ml-2 text-sm sm:text-sm text-gray-300">
            {game.gameType}
          </p>
          <p className="ml-2 mb-4 text-sm sm:text-sm text-gray-300">
            by {game.provider}
          </p>
          <div className="ml-2 pt-4 pb-4 bg-zinc-900 ">
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
