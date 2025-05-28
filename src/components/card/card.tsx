import { Button } from "../buttons/button";
import { Votes } from "../votes/votes";
import type { CardPropsType } from "./card.types";

export const Card = ({
  id,
  place,
  votes,
  handleAddVote,
  isVoted,
}: CardPropsType) => {
  return (
    <div className="flex justify-between px-4  py-3 border item-center border-gray-300 rounded-lg w-84">
      <div className="flex items-center gap-2 w-full">
        <p className="text-md">{place}</p>
        <Votes voteCount={votes} />
        {isVoted && (
          <span className="text-xs text-white font-semibold bg-accent-secondary px-2 py-0.5 rounded-full">
            You Voted
          </span>
        )}
      </div>
      <Button
        id={id}
        label="Vote"
        name={place}
        className="w-16 "
        onClickHandler={() => handleAddVote(id)}
        disabled={isVoted}
      />
    </div>
  );
};
