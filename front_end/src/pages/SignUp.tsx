import Button from "../components/Button";
import FormField from "../components/FormField";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigator = useNavigate();
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Sign Up
        </h2>
        <form>
          <FormField
            type="email"
            label="Email"
            placeholder="Enter your email"
          />
          <FormField
            type="tel"
            label="Phone Number"
            placeholder="Enter your phone number"
          />
          <FormField
            type="password"
            label="Password"
            placeholder="Enter your password"
          />
          <FormField
            type="password"
            label="Password"
            placeholder="Re-enter your password"
          />
          <Button
            text="Sign Up"
            onClick={() => {
              navigator("/login");
              console.log("Sign Up");
            }}
          />
          <button
            // onClick={handleGoogleSignIn}
            className="border border-gray-500 border-opacity-50 my-2 flex items-center justify-center w-full bg-white hover:bg-gray-200 text-gray-700 font-medium py-2 rounded-lg transition duration-200"
          >
            <img
              src="https://www.svgrepo.com/show/303108/google-icon-logo.svg"
              alt="Google"
              className="w-6 h-6 mr-2"
            />
            Sign Up with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
