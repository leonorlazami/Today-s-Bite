import { Card } from "../card/card";
import { Button } from "../buttons/button";
import { Input } from "../input/input";
import { useVotesContext } from "../../hooks/useVotesContext";

export const Poll = () => {
  const { votesData, handleAddVote, handleResetVotes } = useVotesContext();
  if (!votesData) return;

  return (
    <div className="flex flex-col gap-3 ">
      <div className="flex justify-between gap-2">
        <Input
          type="text"
          name="addInput"
          onChange={() => console.log("asds")}
          value={""}
          placeholder="Add a place..."
          className="placeholder-gray-400 placeholder-opacity-100 w-full text-sm p-2 border rounded-lg"
        />

        <Button
          label="+"
          name="addBtn"
          className="w-10 bg-primary text-white"
        />
      </div>
      {votesData.map((item, index) => (
        <Card
          handleAddVote={handleAddVote}
          key={index}
          place={item.place}
          isVoted={item.isVoted}
          votes={item.votes}
          id={item.id}
        />
      ))}
      <p className="text-sm text-center">Total votes: {votesData.length}</p>
      <div className="flex justify-around gap-4">
        <Button
          label="🔁 Reset votes"
          name="resetBtn"
          className="p-2 w-full bg-primary text-white"
          onClickHandler={() => handleResetVotes()}
        />
        <Button
          label="Let's Go! 🍽️"
          name="letsGoBtn"
          className="p-2 w-full bg-accent-secondary text-white"
        />
      </div>
    </div>
  );
};
