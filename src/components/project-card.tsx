import { FigmaOutlinedIcon, GithubIcon, LinkSquareIcon } from "@/assets/icons";

const ProjectCard = (props: ProjectCardProps) => {
  return (
    <div className="bg-card flex flex-col gap-4 p-3 md:p-6 border">
      <div className="flex justify-between items-center">
        <span className="text-zinc-400 text-sm">{props.date}</span>
        <div className="flex gap-4 items-center">
          {props.figma ? (
            <a
              href={props.figma}
              className="text-zinc-500 transition duration-300 hover:text-orange-strong"
              target="_blank"
            >
              <FigmaOutlinedIcon width={21} height={21} />
            </a>
          ) : null}
          {props.code ? (
            <a
              href={props.code}
              className="text-zinc-500 transition duration-300 hover:text-orange-strong"
              target="_blank"
            >
              <GithubIcon width={20} height={20} />
            </a>
          ) : null}
          {props.live ? (
            <a
              href={props.live}
              className="text-zinc-500 transition duration-300 hover:text-orange-strong"
              target="_blank"
            >
              <LinkSquareIcon width={20} height={20} />
            </a>
          ) : null}
        </div>
      </div>
      {props.image ? (
        <img src={props.image} alt="" className="w-full border" />
      ) : null}
      <h3 className="text-zinc-50 font-bold text-xl sm:text-2xl">
        {props.name}
      </h3>
      <p className="text-zinc-500 text-sm sm:text-base">{props.desc}</p>
      <div className="flex flex-wrap gap-x-2 gap-y-1">
        <span className="text-zinc-50 font-semibold text-sm sm:text-base">
          Stack/Tools:
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
