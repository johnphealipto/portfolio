import classNames from "classnames";

type IInput = React.InputHTMLAttributes<HTMLInputElement>;

const Input = (props: IInput) => {
  return (
    <div>
      <input
        {...props}
        className={classNames(
          "w-full bg-transparent px-4 py-3 text-zinc-50 text-base",
          "focus:outline-none border placeholder:text-zinc-500"
        )}
      />
    </div>
  );
};

export default Input;
