import {
  AndroidStudioIcon,
  BlenderIcon,
  ExpoIcon,
  FigmaIcon,
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
  PythonIcon,
  PyCharmIcon,
  SupabaseIcon,
} from "@/assets/icons";
import IslandLuxury from "@/assets/island-luxury.png";
import Em2geeFoods from "@/assets/em2gee-foods.png";
// import GoPot from "@/assets/gopot.png";
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
  // {
  //   name: "GoPot",
  //   image: GoPot,
  //   desc: "Built the frontend of GoPot, a web application designed to predict sport event outcomes against a group of people that participated in the challenge. This project integrates Livescore API, advanced search capabilities, and secure transactions.",
  //   date: "June 25, 2024",
  //   stacks: ["Next.js", "Typescript", "Tailwind CSS", "Redux ToolKit"],
  //   live: "https://playgopot.com/",
  // },
  {
    name: "React Native UI Tips",
    desc: "A collection of unique mobile design components. Building with react native.",
    date: "Jun 15, 2024",
    stacks: ["React Native (Expo)", "Expo Router", "RN Re-animated"],
    code: "https://github.com/johnphealipto/rn-ui-tips",
  },
  {
    name: "johnadibe.com",
    desc: "My personal portfolio. Designed and developed by yours truly 🙂",
    date: "Nov 10, 2023",
    stacks: [
      "Vite.js + React.js",
      "Typescript",
      "SASS",
      "Tailwind CSS",
      "Lenis (smooth scrolling)",
      "Vercel",
    ],
    code: "https://github.com/johnphealipto/portfolio",
  },
  {
    name: "Island Luxury Property Listings",
    image: IslandLuxury,
    desc: "Web app with a variety of property listings for lease, rent and sale. With an admin dashboard for uploading properties and managing records. Designed and developed by yours truly.",
    date: "Feb 10, 2022",
    stacks: ["React.js", "Javascript", "CSS", "Redux"],
    live: "https://island-luxury-demo.netlify.app/",
    figma:
      "https://www.figma.com/file/oNGu5qBAb4nsXegrFb0rcF/Island-Luxury?type=design&node-id=0%3A1&mode=design&t=7WflUGt9N3PD7N8f-1",
  },
  {
    name: "Résumé and Cover Letter template",
    desc: "A résumé and cover letter template with React-PDF (renderer). I chose to develop a custom template so I could have more control over the structure and aesthetics.",
    date: "Oct 31, 2023",
    stacks: ["Vite.js + React.js", "Typescript", "@react-pdf/renderer"],
    code: "https://github.com/johnphealipto/resume-and-letter",
  },
  {
    name: "Client Module",
    image: ClientModule,
    desc: "A Client's Loan Report dashboard.",
    date: "Dec 18, 2021",
    stacks: ["React.js", "Javascript", "CSS", "Chart.js"],
    code: "https://github.com/johnphealipto/client-module",
    live: "https://client-module.netlify.app/",
  },
  {
    name: "Em2gee Foods",
    image: Em2geeFoods,
    desc: "A branded website for a food industry that processes and produces bean flour. I developed it as a voluntary work and also my first attempt at building a full-blown static website.",
    date: "Dec 27, 2020",
    stacks: ["jQuery", "Javascript", "HTML", "CSS"],
    live: "https://johnphealipto.github.io/em2gee-foods/",
    code: "https://github.com/johnphealipto/em2gee-foods",
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
      { icon: PythonIcon, name: "Python" },
      { icon: SupabaseIcon, name: "Supabase" },
      { icon: GraphqlIcon, name: "GraphQL" },
      { icon: GitIcon, name: "Git" },
    ],
  },
  {
    title: "Tools",
    collections: [
      { icon: VscodeIcon, name: "VSCode" },
      { icon: FigmaIcon, name: "Figma" },
      { icon: BlenderIcon, name: "Blender" },
      { icon: AndroidStudioIcon, name: "Android Studio" },
      { icon: PyCharmIcon, name: "PyCharm" },
    ],
  },
];
