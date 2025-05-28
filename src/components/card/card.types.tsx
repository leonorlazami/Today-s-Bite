import type { VoteDataTypes } from "../../stores/voteStore/voteStore.types";

export type CardPropsType = VoteDataTypes & {
  handleAddVote: (id: string | undefined) => void;
};
