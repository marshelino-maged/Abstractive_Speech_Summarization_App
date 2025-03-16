import Button from "../components/Button";
import FormField from "../components/FormField";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Login
        </h2>
        <form>
          <FormField
            type="text"
            label="Username"
            placeholder="Enter your username"
          />
          <FormField
            type="password"
            label="Password"
            placeholder="Enter your password"
          />
          <Button text="Login" onClick={() => {}} />
          <button
            // onClick={handleGoogleSignIn}
            className="border border-gray-500 border-opacity-50 my-2 flex items-center justify-center w-full bg-white hover:bg-gray-200 text-gray-700 font-medium py-2 rounded-lg transition duration-200"
          >
            <img
              src="https://www.svgrepo.com/show/303108/google-icon-logo.svg"
              alt="Google"
              className="w-6 h-6 mr-2"
            />
            Login with Google
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 padding-8"
            href="#"
          >
            Forgot Password?
          </a>
        </form>
      </div>
    </div>
  );
};

export default Login;
