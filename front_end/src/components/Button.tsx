interface ButtonProps {
  text: string;
  onClick: () => void;
}

function Button(props: ButtonProps) {
  return (
    <button
      type="submit"
      className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-lg transition duration-200"
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}

export default Button;
