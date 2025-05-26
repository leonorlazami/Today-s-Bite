import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/home";
import { Signup } from "./pages/Signup/signup";
import { Login } from "./pages/Login/login";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
