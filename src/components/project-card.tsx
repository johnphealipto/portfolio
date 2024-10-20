import { FigmaOutlinedIcon, GithubIcon, LinkSquareIcon } from "@/assets/icons";

const IconLink = ({ href, icon: Icon }) => (
  <a
    href={href}
    className="hover:text-orange-strong transition duration-300"
    target="_blank"
  >
    <Icon width={22} height={22} />
  </a>
);

const ProjectCard = (props: ProjectCardProps) => {
  return (
    <div className="flex flex-col gap-4 p-3 md:p-6 border">
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
      {props.image ? (
        <img src={props.image} alt={props.name} className="w-full" />
      ) : null}
      <h3 className="text-zinc-50 font-bold text-xl sm:text-2xl">
        {props.name}
      </h3>
      <p className="text-zinc-500 text-sm sm:text-base">{props.desc}</p>
      <div className="flex flex-wrap gap-2">
        {props.stacks.map((stack, idx) => (
          <span
            key={idx}
            className="text-sm bg-orange-strong/10 px-2 py-1 text-orange-strong"
          >
            {stack}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
