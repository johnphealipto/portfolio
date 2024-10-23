import { LinkSquareIcon } from "@/assets/icons";
import { HTMLAttributeAnchorTarget } from "react";

type Icons = "telephone" | "link-square";

interface CustomLinkProps {
  text: string;
  href: string;
  icon?: Icons;
  target?: HTMLAttributeAnchorTarget;
}

const CustomLink: React.FC<CustomLinkProps> = ({ text, href, target }) => {
  return (
    <a href={href} className="link whitespace-nowrap" target={target}>
      <span>{text}</span>
      <LinkSquareIcon className="ml-1 inline" width={15} height={15} />
    </a>
  );
};

export default CustomLink;
