type Votes = { voteCount: number };
export const Votes = ({ voteCount }: Votes) => {
  return (
    <span className="text-xs text-black font-semibold bg-accent-primary px-2 py-0.5 rounded-full">
      {voteCount} votes
    </span>
  );
};
