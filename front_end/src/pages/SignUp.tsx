import Button from "../components/Button";
import FormField from "../components/FormField";

const SignUp = () => {
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
          <Button text="Sign Up" onClick={() => {}} />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
