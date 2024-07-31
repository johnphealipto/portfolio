import Title from "@/components/title";
import { PROJECTS, SOCIAL_LINKS, TECH_STACKS_TOOLS } from "@/utils/constant";
import CustomButton from "@/components/button";
import CustomLink from "@/components/link";
import ProjectCard from "@/components/project-card";

const Home = () => {
  return (
    <>
      <section
        id="hero"
        className="container flex pt-40 min-h-fit md:min-h-[60vh]"
      >
        <div className="hero-content flex flex-col gap-4 items-center text-center m-auto">
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold whitespace-nowrap animate-title">
            John Adibe
          </h1>
          <h2 className="text-lg md:text-2xl animate-fade-in">
            Frontend Developer
          </h2>
          <p className="text-zinc-400 text-base md:text-lg font-light max-w-lg animate-fade-in">
            <span className="text-orange-strong">Building interfaces</span>. I
            create accessible web products and cross-platform solutions.{" "}
            <em className="py-1 px-2 font-serif border text-base leading-9">
              Meticulously.
            </em>
          </p>
          <div className="flex gap-5 mt-5 md:mt-8">
            {SOCIAL_LINKS.map((item, idx) => (
              <a
                href={item.link}
                key={idx}
                className="text-zinc-400 transition duration-300 hover:text-orange-strong"
                target="_blank"
              >
                <item.icon width={25} height={25} />
              </a>
            ))}
          </div>
        </div>
      </section>
      <section id="about" className="container pt-24 animate-fade-in">
        <div className="px-5 py-5 md:p-16 border">
          <div className="flex flex-col md:flex-row justify-between gap-5 md:gap-14 pb-8 mb-8 border-b">
            <Title title="About Me" align="center" />
            <div className="flex flex-col gap-4 text-zinc-400 md:w-9/12 md:text-base">
              <p>
                Hey there. I'm John, a frontend developer who transitioned from
                a seasoned mathematics teacher. I've been in the software
                industry since 2020, which was after my career as a mathematics
                educator in secondary schools.
              </p>
              <p>
                My expertise lies in building interactive web and mobile
                solutions. I've been privilege to work for an{" "}
                <CustomLink
                  href="https://www.outcess.com/"
                  text="outsourcing company"
                  target="_blank"
                  withIcon
                />
                , an{" "}
                <CustomLink
                  href="https://longbridgetech.com/"
                  text="IT solutions company"
                  target="_blank"
                  withIcon
                />
                , and a{" "}
                <CustomLink
                  href="https://www.myclinify.com/"
                  text="healthcare agency"
                  target="_blank"
                  withIcon
                />
                , and I'm currently building products for the customers at{" "}
                <CustomLink
                  href="https://www.theproductstudiohq.com/"
                  text="Product Studio HQ"
                  target="_blank"
                  withIcon
                />
                .
              </p>
              <p>
                I learn every day by continuously pushing the boundaries of the
                web, syncing with frontend technologies and trends. Then I
                always look forward to feedbacks which aid in further improving
                myself. I enjoy country music.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            {TECH_STACKS_TOOLS.map((tech, idx) => (
              <div key={idx}>
                <h3 className="text-zinc-50 font-bold text-lg sm:text-xl mb-2">
                  {tech.title}
                </h3>
                <div className="flex gap-4 flex-wrap">
                  {tech.collections.map((item, idx) => (
                    <div key={idx} className="flex gap-1">
                      <item.icon width={20} height={20} />
                      <span className="text-zinc-500 text-sm sm:text-base">
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="projects" className="container pt-24 md:pt-40">
        <div className="max-w-2xl">
          <Title title="Projects" />
          <p className="text-zinc-500 text-base md:text-lg mt-2">
            These are some of the projects I've worked on.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-4 md:mt-8">
          <div className="flex flex-col gap-5 md:gap-8">
            {PROJECTS.filter((_, idx) => idx % 2 === 0).map((project, idx) => (
              <ProjectCard key={idx} {...project} />
            ))}
          </div>
          <div className="flex flex-col gap-5 md:gap-8">
            {PROJECTS.filter((_, idx) => idx % 2 !== 0).map((project, idx) => (
              <ProjectCard key={idx} {...project} />
            ))}
          </div>
        </div>
      </section>
      <section id="contact" className="container py-24 md:py-40">
        <div className="flex flex-col gap-7 items-center text-center mt-10">
          <Title title="Let's Connect" align="center" ignore />
          <p className="text-zinc-500 text-base sm:text-lg max-w-xl">
            If you want to discuss an opportunity with me or have any questions
            or comments, I would be glad to hear them. You can send an email to{" "}
            <CustomLink
              text="johnadibe450@gmail.com"
              href="mailto:johnadibe450@gmail.com"
            />
          </p>
          <p>OR</p>
          <div className="flex text-center items-center">
            <CustomButton
              text="Meeting with John"
              href="https://cal.com/john-adibe/15min"
              icon="calendar"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
