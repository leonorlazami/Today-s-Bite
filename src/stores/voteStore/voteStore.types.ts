import type { ReactNode } from "react";

export type VoteProviderProps = {
  children: ReactNode;
};

export type VoteDataTypes = {
  place: string;
  votes: number;
  isVoted: boolean;
  id?: string;
};

export type VoteStoreType = {
  votesData: VoteDataTypes[] | undefined;
  setVotesData?: React.Dispatch<
    React.SetStateAction<VoteDataTypes[] | undefined>
  >;
  handleAddVote: (id: string | undefined) => void;
  handleResetVotes: () => void;
};
