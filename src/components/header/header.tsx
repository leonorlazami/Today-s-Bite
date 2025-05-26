import { useAuthContext } from "../../hooks/useAuthContext";

export const Header = () => {
  const { userData } = useAuthContext();
  const user = `${userData ? userData.displayName : "Guest"}`;

  return (
    <div>
      <h1>Today's Bite</h1>
      <p>Where should we eat today, {user}? </p>
    </div>
  );
};
