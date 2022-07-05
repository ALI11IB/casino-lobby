import { Game } from "../../../types/game";

export default function Card({ game }: { game: Game }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="flex h-full">
        <div className="flex-1 h-full next-image-wrapper"></div>
        <div className="p-8 pb-4 flex-2">
          <div className="flex items-center">
            <div className="uppercase mr-2 tracking-wide text-sm text-indigo-500 font-semibold">
              {game.name}
            </div>
            <div></div>
          </div>

          <p className="mt-2 mb-4 text-sm sm:text-base text-gray-500">
            {game.provider}
          </p>
        </div>
      </div>
    </div>
  );
}
