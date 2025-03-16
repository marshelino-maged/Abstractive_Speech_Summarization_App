import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Speech GPT</h1>
      <div>
        <Link to="/login" className="mr-4 hover:underline">
          Login
        </Link>
        <Link to="/signup" className="hover:underline">
          Sign Up
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
