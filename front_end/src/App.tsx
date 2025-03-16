import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <Router>
      <div className="items-center justify-center min-h-screen min-w-screen">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          {/* <Route path="/chat" element={<Chat />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
