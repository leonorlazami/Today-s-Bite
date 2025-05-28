import { createContext, useEffect, useState } from "react";
import {
  type VoteDataTypes,
  type VoteProviderProps,
  type VoteStoreType,
} from "./voteStore.types";

import { useGetVotes } from "../../hooks/useGetVotes";

export const VoteContext = createContext<VoteStoreType | undefined>(undefined);

export const VoteProvider = ({ children }: VoteProviderProps) => {
  const [votesData, setVotesData] = useState<VoteDataTypes[] | undefined>([]);
  const handleAddVote = (id: string | undefined) => {
    setVotesData((prevData) =>
      prevData?.map((item) =>
        item.id === id
          ? { ...item, votes: item.votes + 1, isVoted: true }
          : { ...item, votes: 0, isVoted: false }
      )
    );
  };
  const handleResetVotes = () => {
    setVotesData(data);
  };
  const { data } = useGetVotes();
  useEffect(() => {
    if (!data) return;
    setVotesData(data);
  }, [data]);

  console.log(votesData);

  return (
    <VoteContext.Provider
      value={{ votesData, setVotesData, handleAddVote, handleResetVotes }}
    >
      {children}
    </VoteContext.Provider>
  );
};
