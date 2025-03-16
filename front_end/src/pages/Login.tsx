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
        </form>
      </div>
    </div>
  );
};

export default Login;
