import {
  AndroidStudioIcon,
  BlenderIcon,
  ExpoIcon,
  FigmaIcon,
  FirebaseIcon,
  GitIcon,
  GithubIcon,
  GraphqlIcon,
  JavascriptIcon,
  LinkedinIcon,
  NextJSIcon,
  ReactIcon,
  ReduxIcon,
  SassIcon,
  TailwindIcon,
  ThreeJSIcon,
  TwitterXIcon,
  TypescriptIcon,
  VscodeIcon,
} from "@/assets/icons";
import IslandLuxury from "@/assets/island-luxury.png";
import Em2geeFoods from "@/assets/em2gee-foods.png";
import ResumeAndLetter from "@/assets/resume-and-letter.png";
import ClientModule from "@/assets/client-module.png";

export const SOCIAL_LINKS = [
  {
    link: "https://github.com/johnphealipto",
    icon: GithubIcon,
    name: "GitHub",
  },
  {
    link: "https://www.linkedin.com/in/johnadibe",
    icon: LinkedinIcon,
    name: "LinkedIn",
  },
  {
    link: "https://twitter.com/johnphealipto",
    icon: TwitterXIcon,
    name: "Twitter",
  },
];

export const PROJECTS: ProjectCardProps[] = [
  {
    name: "Island Luxury Property Listings",
    image: IslandLuxury,
    desc: "A web application with a variety of property listings ranging from Flats, Houses, Land & Commercial Properties. I designed and developed the website and its admin dashboard.",
    date: "Feb 10, 2022",
    stacks: ["React.js", "Javascript", "CSS", "Redux"],
    live: "https://island-luxury-demo.netlify.app/",
    figma:
      "https://www.figma.com/file/oNGu5qBAb4nsXegrFb0rcF/Island-Luxury?type=design&node-id=0%3A1&mode=design&t=7WflUGt9N3PD7N8f-1",
  },
  {
    name: "Em2gee Foods",
    image: Em2geeFoods,
    desc: "A branded website for a food industry that processes and produces bean flour. This project is my first attempt at building a full-blown static website.",
    date: "Dec 27, 2020",
    stacks: ["jQuery", "Javascript", "HTML", "CSS"],
    live: "https://johnphealipto.github.io/em2gee-foods/",
    code: "https://github.com/johnphealipto/em2gee-foods",
  },
  {
    name: "johnadibe.vercel.app",
    desc: "Of course, my portfolio. Designed and developed by yours truly. The code is publicly available for use, with attribution.",
    date: "Nov 10, 2023",
    stacks: [
      "React.js + Vite.js",
      "Typescript",
      "SASS",
      "Tailwind CSS",
      "Lenis (smooth scrolling)",
      "Vercel",
    ],
    code: "https://github.com/johnphealipto/portfolio",
  },
  {
    name: "Résumé and Cover Letter template",
    image: ResumeAndLetter,
    desc: "Developed a résumé and cover letter template with React-PDF (renderer). I chose to develop my template so I could have more control over the structure and aesthetics. I also have landed two offers with this template. Feel free to clone for personal use.",
    date: "Oct 31, 2023",
    stacks: ["React.js + Vite.js", "Typescript", "@react-pdf/renderer"],
    code: "https://github.com/johnphealipto/resume-and-letter",
  },
  {
    name: "Client Module",
    image: ClientModule,
    desc: "Built a Client's Loan Report dashboard. This project was aimed at testing my skills in developing a UI design while paying attention to details and efficient UI development.",
    date: "Dec 18, 2021",
    stacks: ["React.js", "Javascript", "CSS", "Chart.js"],
    code: "https://github.com/johnphealipto/client-module",
    live: "https://client-module.netlify.app/",
  },
];

export const TECH_STACKS_TOOLS = [
  {
    title: "Technologies",
    collections: [
      { icon: TypescriptIcon, name: "Typescript" },
      { icon: JavascriptIcon, name: "Javascript" },
      { icon: ReactIcon, name: "React.js" },
      { icon: NextJSIcon, name: "Next.js" },
      { icon: ReduxIcon, name: "Redux" },
      { icon: ExpoIcon, name: "React Native (Expo)" },
      { icon: SassIcon, name: "SASS" },
      { icon: TailwindIcon, name: "Tailwind CSS" },
      { icon: ThreeJSIcon, name: "Three.js" },
      { icon: GraphqlIcon, name: "GraphQL" },
      { icon: GitIcon, name: "Git" },
      { icon: FirebaseIcon, name: "Firebase" },
    ],
  },
  {
    title: "Tools",
    collections: [
      { icon: VscodeIcon, name: "VSCode" },
      { icon: FigmaIcon, name: "Figma" },
      { icon: BlenderIcon, name: "Blender" },
      { icon: AndroidStudioIcon, name: "Android Studio" },
    ],
  },
];
