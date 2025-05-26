import { screen, render, fireEvent } from "../../test/test-utils";
import { Home } from "./home";
import { Routes, Route } from "react-router-dom";
import * as utils from "../../utils";
import { vi } from "vitest";

const Signup = () => <h1>Signup Page</h1>;
const Login = () => <h1>Login Page</h1>;

describe("Home component with routing", () => {
  describe("when no user is logged in", () => {
    it("renders guest view and navigates to signup and login", async () => {
      render(
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>,
        { userData: undefined }
      );

      const headerEl = screen.getByRole("heading", { name: /welcome guest/i });
      expect(headerEl).toBeInTheDocument();

      const signUpLink = screen.getByRole("link", { name: /signup/i });
      fireEvent.click(signUpLink);
      expect(
        await screen.findByRole("heading", { name: /signup page/i })
      ).toBeInTheDocument();

      window.history.pushState({}, "", "/");
      render(
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>,
        { userData: undefined }
      );

      const loginLink = screen.getByRole("link", { name: /login/i });
      fireEvent.click(loginLink);
      expect(
        await screen.findByRole("heading", { name: /login page/i })
      ).toBeInTheDocument();
    });
  });

  describe("when user is logged in", () => {
    const mockUser = {
      uid: "123",
      displayName: "Leo",
      email: "leo@example.com",
      phoneNumber: null,
      photoURL: null,
      providerId: "firebase",
    };

    it("renders user view and calls sign out handler", () => {
      const signOutSpy = vi
        .spyOn(utils, "handleSignOut")
        .mockImplementation(() => {});

      render(<Home />, { userData: mockUser });

      const headerEl = screen.getByRole("heading", { name: /welcome 👋 leo/i });
      expect(headerEl).toBeInTheDocument();

      const signOutBtn = screen.getByRole("button", { name: /log out/i });
      fireEvent.click(signOutBtn);
      expect(signOutSpy).toHaveBeenCalled();

      signOutSpy.mockRestore();
    });
  });
});
