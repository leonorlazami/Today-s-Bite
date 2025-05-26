import { Header } from "../../components/header/header";
import { Poll } from "../../components/poll/poll";
export type MockDataItem = {
  place: string;
  votes: number;
};

export const mockData: MockDataItem[] = [
  {
    place: "Pizza",
    votes: 0,
  },
  {
    place: "AJDINI",
    votes: 4,
  },
  {
    place: "AJDINI",
    votes: 4,
  },
  {
    place: "AJDINI",
    votes: 4,
  },
];

export const Home = () => {
  return (
    <div className="flex flex-col mt-4 items-center p-4">
      <main className="border">
        <Header />
        <Poll mockData={mockData} />
      </main>
    </div>
  );
};
