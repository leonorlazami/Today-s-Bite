import { useContext } from "react";
import { VoteContext } from "../stores/voteStore/voteStore";

export const useVotesContext = () => {
  const context = useContext(VoteContext);
  if (!context) {
    throw new Error("useVotes must be within VoteProvider");
  }
  return context;
};
