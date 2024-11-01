import classNames from "classnames";

type ITextarea = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = (props: ITextarea) => {
  return (
    <div>
      <textarea
        {...props}
        rows={4}
        className={classNames(
          "w-full bg-transparent px-4 py-3 text-zinc-50 text-base",
          "focus:outline-none border placeholder:text-zinc-500"
        )}
      />
    </div>
  );
};

export default Textarea;
