import { Button } from "../../components/buttons/button";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";

export const Home = () => {
  const { userName } = useAuthContext();

  return (
    <div>
      {userName ? (
        <h2>Welcome {userName} 👋</h2>
      ) : (
        <>
          <p>You are not logged in.</p>
          <Link to="/signup">
            <Button label="Signup" />
          </Link>
          <Link to="/login">
            <Button label="Login" />
          </Link>
        </>
      )}
    </div>
  );
};
