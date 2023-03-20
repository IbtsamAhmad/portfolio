import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  selll,
  aventoo
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Web(React) Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Database Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Web Developer Intern",
    company_name: "GTek Solutions",
    icon: starbucks,
    iconBg: "#383E56",
    date: "July 2021 - September 2021",
    points: [
      "Creating website layout/user interfaces by using standard HTML/CSS practices.",
      "Be responsible for maintaining, expanding, and scaling our site.",
      "Cooperate with web designers to match visual design intent.",
    ],
  },
  {
    title: "React Developer",
    company_name: "GTek Solutions",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "October 2021 - July 2022",
    points: [
      "Writing well-designed, testable, efficient code by using best software development practices.",
      "Understanding UI, cross-browser compatibility, and general web functionality and standards.",
      "Meeting with clients or management to discuss the design plan and needs of the website.",
      "Website and software application designing, building, or maintaining. ",
    ],
  },
  {
    title: "React Developer",
    company_name: "Fenris",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "August 2022 - Present",
    points: [
      "Integrating data from various back-end services and databases",
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },

  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Ibtsam proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Ibtsam does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Ibtsam optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Homeschool Panda",
    description:
      "Homeschool Panda's online homeschool planner lets you organize the lessons and saves valuable time. Moreover, this innovative digital planning record keeping & collaborative system can be accessed from anywhere and on any device. Homeschool Panda's all-in-one tool suite provides functionality & support to simplify your homeschool experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Node Js",
        color: "green-text-gradient",
      },
      {
        name: "SQL",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://homeschoolpanda.com/",
  },
  {
    name: "TalentChain",
    description:
      "Talentchain is a platform for self-monetization. It enables “Talents” - creators or makers, to launch their own token in order for them to build their own digital economy.TalentChain supports creators by giving them access to the right decentralized tools to own their content and earn through it. Tokenization will allow creators to use entirely new business models.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Web 3.0",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://www.talentchain.io/",
  },
  {
    name: "Foundation for Biomedical Research (FBR)",
    description:
      "A comprehensive platform for The Foundation for Biomedical Research (FBR) is America’s most experienced, trusted and effective nonprofit dedicated to improving human and animal health by promoting public understanding and support for biomedical research.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Strapi CMS",
        color: "green-text-gradient",
      },
      {
        name: "GSAP",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://test.fbresearch.org/",
  },
  {
    name: "Avento Solutions Website",
    description:
      "A comprehensive platform for offering the latest software and IT services to our customers!",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Nodejs",
        color: "green-text-gradient",
      },
      {
        name: "GSAP",
        color: "pink-text-gradient",
      },
    ],
    image: aventoo,
    source_code_link: "https://bejewelled-peony-d98322.netlify.app/",
  },
  {
    name: "Sell Phone App ",
    description:
      "SellPhone is an online mobile phone portal where you can discover latest and updated mobile prices in Pakistan.",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "Nodejs",
        color: "green-text-gradient",
      },
      {
        name: "GSAP",
        color: "pink-text-gradient",
      },
    ],
    image: selll,
    source_code_link: "https://heartfelt-pithivier-52dabe.netlify.app/home",
  },
];

export { services, technologies, experiences, testimonials, projects };
