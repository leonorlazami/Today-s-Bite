import type { MockDataItem } from "../../pages/Home/home";

type PollProps = {
  mockData: MockDataItem[];
};

export const Poll = ({ mockData }: PollProps) => {
  return (
    <div>
      {mockData.map((item, index) => (
        <div key={index}>
          {item.place} — {item.votes}
        </div>
      ))}
    </div>
  );
};
