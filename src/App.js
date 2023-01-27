import "./App.css";
import { Home } from "./Pages/Home";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Login } from "./Pages/Login";
import { Pass } from "./Pages/Pass";
import { Signup } from "./Pages/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotpassword" element={<Pass />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
