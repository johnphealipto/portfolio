import { FigmaOutlinedIcon, GithubIcon, LinkSquareIcon } from "@/utils/icons";
import Link from "next/link";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const IconLink = ({ href, icon: Icon }: { href: string; icon: any }) => (
  <Link
    href={href}
    className="hover:text-orange-strong transition duration-300"
    target="_blank"
  >
    <Icon width={22} height={22} />
  </Link>
);

const ProjectCard = (props: ProjectCardProps) => {
  return (
    <div className="group flex flex-col gap-4 p-3 md:p-6 border hover:bg-zinc-500/5 transition-colors">
      <div className="flex justify-between items-center text-zinc-400">
        <span className="text-sm">{props.date}</span>
        <div className="flex gap-4 items-center">
          {props.figma ? (
            <IconLink href={props.figma} icon={FigmaOutlinedIcon} />
          ) : null}
          {props.code ? <IconLink href={props.code} icon={GithubIcon} /> : null}
          {props.live ? (
            <IconLink href={props.live} icon={LinkSquareIcon} />
          ) : null}
        </div>
      </div>
      {/* {props.image ? (
        <img
          src={props.image}
          alt={props.name}
          className="w-full opacity-80 group-hover:opacity-90 transition-opacity"
        />
      ) : null} */}
      <h3 className="text-zinc-50 font-bold text-xl sm:text-2xl">
        {props.name}
      </h3>
      <p className="text-zinc-500 text-sm sm:text-base">{props.desc}</p>
      <div className="flex flex-wrap gap-x-2 gap-y-1">
        <span className="text-zinc-50 font-semibold text-sm sm:text-base">
          Stack:
        </span>
        {props.stacks.map((stack, idx) => (
          <span key={idx} className="text-zinc-500 text-sm sm:text-base">
            {`${stack}${idx !== props.stacks.length - 1 ? ", " : "."}`}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
