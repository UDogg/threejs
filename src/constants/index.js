import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  meta,
  starbucks,
  carrent,
  jobit,
  tripguide,
  threejs,
  kubernetes,
  ts,
  apis,
  Kube,
  python,
  java,
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
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Mobile App Developer",
    icon: mobile,
  },
  {
    title: "Web3.0 Developer",
    icon: backend,
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
    name: "docker",
    icon: docker,
  },
  {
    name: "Kubernetes",
    icon: Kube,
  },
  {
    name: "Python",
    icon: python,
  },
];

const experiences = [
  {
    title: "IT Support Specialist",
    company_name: "Penn State Berks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Nov 2021 - Dec 2022",
    points: [
      "Identifying technical failures by charting the issues faced by students and faculty.",
      "Conducting a solution-oriented procedure to eliminate outlined failures.",
      "Helped instructors establish secure routes to Penn State Network",
      "Killing, wiping hard drives, reimaging, and updating AIO systems.",
    ],
  },
  {
    title: "Intercultural Mentor",
    company_name: "Penn State Berks",
    icon: starbucks,
    iconBg: "#E6DEDD",
    date: "April 2022 - Dec 2022",
    points: [
      "Assimilation of international student body by minimizing culture shock.",
      "Tracking and curating resources for diversification and utilization of international potential.",
      "Organise events to increase inclusivity to Penn State Community.",
      "Helped students belong in a predominantly white institution(PWI).",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "IIT Bombay",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "May 2023 - Present",
    points: [
      "Developing and maintaining frontend web applications using Next.js and GitLab CI/CD.",
      "Developing and maintaining backend web applications using Django, Django Rest Framework and GitLab CI/CD.",
      "Resolved CORS (Continuously Operating Reference Stations) errors.",
      "My first time working with a full development team and DevOps",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Dummy Testomonial",
    name: "Jane Doe",
    designation: "CFO",
    company: "XYZ Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Dummy Testomonial",
    name: "John Doe",
    designation: "COO",
    company: "ABC Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Dummy Testomonial",
    name: "Human Being",
    designation: "CTO",
    company: "Vought Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "JBOD Manipulation using C.",
    description:
      "Write a program in C to iterate through a 1MB JBOD split into disks and blocks and copy the data into a user provided buffer.",
    tags: [
      {
        name: "C",
        color: "gray-text-gradient",
      },
      {
        name: "Linux",
        color: "green-text-gradient",
      },
      {
        name: "makefile",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/UDogg/CMPSC311",
  },
  {
    name: "Whack-A-Mole",
    description:
      "Write a program in Python to create a basic Whack-A-Mole game including GUI using pip and pygame packages.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "pygame",
        color: "green-text-gradient",
      },
      {
        name: "random",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/UDogg/Whack-A-Mole",
  },
  {
    name: "Django CRM",
    description:
      "This is a high level customer relationship manager created using Django",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/UDogg/djanproj",
  },
  {
    name: "Kubernetes Deployment",
    description:
      "This 3D website was deployed using Kubernetes",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "Kubernetes",
        color: "pink-text-gradient",
      },
    ],
    image: kubernetes,
    source_code_link: "https://github.com/UDogg/threejs",
  },
  {
    name: "Learning Prisma",
    description:
      "This is made using TypeScript and Prisma",
    tags: [
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "Prisma",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
    ],
    image: ts,
    source_code_link: "https://github.com/UDogg/Prisma",
  },
  {
    name: "qApply backend(testing) and frontend",
    description:
      "I learned how to use Django Rest Framework and Test-Driven-Development concepts.I also learned how to catch APIs, resolve CORS errors and dynamically call APIs using Next.js",
    tags: [
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "Django",
        color: "pink-text-gradient",
      },
      {
        name: "Next.js",
        color: "red-text-gradient",
      },
    ],
    image: apis,
    source_code_link: "https://github.com/UDogg/qapply-frontend",
  },
];

export { services, technologies, experiences, testimonials, projects };
