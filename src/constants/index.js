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
  IOCL,
  PSU,
  zig,
  ziggy
} from "../assets";
import a from "../assets/gene.jpeg";
import b from "../assets/o.jpeg";
import c from "../assets/sunthar.jpeg";

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
  {
    id: "footer",
    title: "Footer",
  },
  {
    id: "about",
    title: "Resume",
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
    name: "Java",
    icon: java,
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
    date: "May 2023 - June 2023",
    points: [
      "Developing and maintaining frontend web applications using Next.js and GitLab CI/CD.",
      "Developing and maintaining backend web applications using Django, Django Rest Framework and GitLab CI/CD.",
      "Resolved CORS (Continuously Operating Reference Stations) errors.",
      "My first time working with a full development team and DevOps",
    ],
  },
    {
    title: "Frontend Developer",
    company_name: "Indian Oil Corporation Limited",
    icon: IOCL,
    iconBg: "#E6DEDD",
    date: "June 2023 - July 2023",
    points: [
      "Developing and maintaining frontend web applications using React.js and Vercel CI/CD.",
      "Creating a contact email using EmailJS, Figma, UI/UX, and React.js.",
      "Resolved CORS (Continuously Operating Reference Stations) errors.",
      "Solo research display of Information Services Team of a Fortune 500 company.",
    ],
  },
    {
    title: "Auxiliary Officer UPPS",
    company_name: "Penn State University Police",
    icon: PSU,
    iconBg: "#E6DEDD",
    date: "July 2023 - Present",
    points: [
      "Guide and assist students, faculty, and staff with parking and traffic concerns.",
      "Maintain a safe and secure environment for students, faculty, and staff.",
      "Assist with traffic control and crowd control at special events.",
      "Helped the UPPS with patrolling and security of one of the largest campuses in the US.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Utkarsh was a reliable and conscientious student worker with the ability to learn and interact with our clients on a professional level. He was a strong contributor as an IT consultant, showcasing expertise in IT, academic, professional, and soft skills.",
    name: "Gene Bollman",
    designation: "IT Support Specialist 3",
    company: "Penn State Berks",
    image: a,
  },
  {
    testimonial:
      "Demonstrated responsibility and professionalism excellence in being the intercultural mentor for new international students at Penn State Berks. Organized tech workshops for students and was able to manage time and resources effectively.",
    name: "Sharon Pitterson-Ogaldez",
    designation: "Ex Coordinator of Diversity and International Programs",
    company: "Penn State Berks",
    image: b,
  },
  {
    testimonial:
      "Demonstrated outstanding skills in Django, Django Rest Framework, React, Next.js, GitLab CI/CD, Tailwind CSS, and Docker for completing a full-stack monolith to microservices transition project at IIT Bombay.",
    name: "Prof. Premakumar Sunthar",
    designation: "Head, Application Software Center",
    company: "Indian Institute of Technology, Bombay",
    image: c,
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
        name: "Shell",
        color: "blue-text-gradient",
      },
      {
        name: "Linux",
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
  {
    name: "Fastest Zig calculator in the world aka 'Ziggy'",
    description:
      "I learned how to use Zig and build a simple calculator using it",
    tags: [
      {
        name: "Zig",
        color: "blue-text-gradient",
      },
    ],
    image: zig,
    source_code_link: "https://github.com/UDogg/ziggy",
  },
  {
    name: "Springboot, Angular full stack application",
    description:
      "I learned how to use Springboot. I also learned how to make APIs, and test them using Postman. First draft frontend was made using Angular",
    tags: [
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "Java",
        color: "orange-text-gradient",
      },
    ],
    image: java,
    source_code_link: "https://github.com/UDogg/springang",
  },
];

export { services, technologies, experiences, testimonials, projects };
