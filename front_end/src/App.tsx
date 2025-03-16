import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import NavBar from "./pages/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="items-center justify-center min-h-screen min-w-screen">
        <Routes>
          {/* <Route path="/" element={<NavBar />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          {/* <Route path="/chat" element={<Chat />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
