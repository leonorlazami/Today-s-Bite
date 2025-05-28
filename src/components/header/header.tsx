import { useAuthContext } from "../../hooks/useAuthContext";

export const Header = () => {
  const { userData } = useAuthContext();
  const user = `${userData ? userData.displayName : "Guest"}`;

  return (
    <div className="p-2">
      <h1 className="font-bold text-2xl">Today's Bite</h1>
      <p className="text-gray-400 text-sm">
        Where should we eat today, {user}?{" "}
      </p>
    </div>
  );
};
