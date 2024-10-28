import { CalendarIcon, FileLinkIcon, SendEmailIcon } from "@/utils/icons";
import Link from "next/link";
import { cn } from "@/utils/lib";

type Icons = "file-link" | "calendar" | "send-email";

interface IButton {
  text?: string;
  href?: string;
  size?: "sm" | "md" | "lg";
  icon?: Icons;
  onClick?: () => void;
  isLoading?: boolean;
  disabled?: boolean;
  type?: "button" | "submit";
  rounded?: boolean;
  fullWidth?: boolean;
  variant?: "primary" | "primary-outline";
}

const ICONS_MAPPER: Record<
  Icons,
  React.FunctionComponent<React.SVGProps<SVGSVGElement>>
> = {
  "file-link": FileLinkIcon,
  calendar: CalendarIcon,
  "send-email": SendEmailIcon,
};

const CustomButton: React.FC<IButton> = ({
  type = "button",
  size = "sm",
  text,
  href,
  onClick,
  fullWidth,
  isLoading,
  disabled,
  rounded,
  icon,
  variant = "primary",
}) => {
  const btnClassnames = cn(
    "bg-orange-strong flex items-center justify-center gap-3",
    "px-5 font-medium hover:shadow-2xl hover:shadow-orange-strong select-none transition",
    {
      "h-9 text-base": size === "sm",
      "h-11 text-base": size === "md",
      "h-14 text-lg": size === "lg",
      "w-full": fullWidth,
      "rounded-full": rounded,
      "cursor-progress !bg-orange-strong/50 hover:shadow-none": isLoading,
    },
    {
      "border bg-orange-strong/5 border-orange-strong text-zinc-300":
        variant === "primary-outline",
      "bg-orange-strong text-dark": variant === "primary",
    }
  );

  const IconComponent = ICONS_MAPPER[icon!];

  if (href) {
    return (
      <Link href={href} className={btnClassnames} target="_blank">
        {text}
        {icon ? <IconComponent width={20} height={20} /> : null}
      </Link>
    );
  }

  return (
    <button
      type={type === "button" ? "button" : "submit"}
      className={btnClassnames}
      onClick={onClick}
      disabled={disabled || isLoading}
    >
      {text}
      {icon ? <IconComponent width={20} height={20} /> : null}
    </button>
  );
};

export default CustomButton;
