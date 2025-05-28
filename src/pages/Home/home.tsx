import { Header } from "../../components/header/header";
import { Poll } from "../../components/poll/poll";
export type MockDataItem = {
  place: string;
  votes: number;
};

export const Home = () => {
  return (
    <div className="flex flex-col pt-4 items-center text-lg bg-background   h-screen rounded-lg">
      <main className="flex flex-col gap-4 font-primary border-gray-300 border rounded-lg py-4 px-3">
        <Header />
        <Poll />
      </main>
    </div>
  );
};
