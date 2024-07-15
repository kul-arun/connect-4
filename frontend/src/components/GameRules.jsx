import { useNavigate } from "react-router-dom";

const GameRules = () => {
  const navigator = useNavigate();

  const handleClick = () => {
    navigator("/");
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className="translate-x-8 translate-y-8 rounded-xl bg-black px-4 py-2 text-center text-xl font-bold text-white"
      >
        <span className="text-2xl">&#x1F804;</span> Home
      </button>
      <div className="flex h-full w-screen flex-col">
        <div className="mx-auto mt-16 select-none rounded-2xl bg-gray-950 p-5 md:w-10/12 lg:w-5/12">
          <header className="mx-auto mb-8 mt-4 w-5/12 select-none text-wrap text-center font-[SourceSans] text-5xl font-bold text-myGreen">
            GAME &nbsp;RULES
          </header>
          <ul className="mx-8 list-star text-xl font-bold text-white">
            <li className="mb-5 list-star pl-4">
              The game is played on a vertical board with 7 columns and 6 rows.
            </li>
            <li className="mb-5 list-star pl-4">
              There are 42 coloured disks (21 red and 21 yellow). The player who
              gets to make the first move is chosen randomly once the players
              pick a disk colour. Players alternate turns thereafter.
            </li>
            <li className="mb-5 list-star pl-4">
              On your turn, choose one of the columns and drop one of your disks
              into it. The disk will fall to the lowest available space within
              the column.
            </li>
            <li className="mb-5 list-star pl-4">
              Players must drop disks from the top of the board. Once a column
              is filled with disks (all 6 slots in the column are occupied), no
              more disks can be dropped in that column.
            </li>
            <li className="mb-5 list-star pl-4">
              A player wins the game by connecting four of their own disks in a
              row. This can be achieved in any of the following ways:
              <ul className="mt-2">
                <li className="ml-8 list-disc">
                  Horizontally: Four consecutive disks in a horizontal line.
                </li>
                <li className="ml-8 list-disc">
                  Vertically: Four consecutive disks in a vertical line.
                </li>
                <li className="ml-8 list-disc">
                  Diagonally: Four consecutive disks in a diagonal line.
                </li>
              </ul>
            </li>
            <li className="mb-5 list-star pl-4">
              If the board fills up completely without any player achieving four
              in a row, the game is considered a draw.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GameRules;
