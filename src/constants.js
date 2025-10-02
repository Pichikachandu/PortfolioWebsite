// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';

// Experience Section Logo's
import gssoc from './assets/company_logo/girlscriptsoc_logo.jpg';
import nmlogo from './assets/company_logo/naanmudhalvaan.jpg';
import murven from './assets/company_logo/murvenllp_logo.jpg';

// Education Section Logo's
import apms from './assets/education_logo/apms.png';
import TJSEC from './assets/education_logo/TJSEC.jpg';
import pratibha from './assets/education_logo/pratibha.jpg';

// Project Section Logo's
import oralhealth from './assets/work_logo/Oralhealthcare.png';
import Docspot from './assets/work_logo/Docspot.png';
import Reciperadar from './assets/work_logo/Reciperadar.png';
import LeadManagement from './assets/work_logo/LeadManagement.png';



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },

      { name: 'Redux', logo: reduxLogo },

      { name: 'Tailwind CSS', logo: tailwindcssLogo },

      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [

      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },

    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Java', logo: javaLogo },

      { name: 'Python', logo: pythonLogo },

      { name: 'JavaScript', logo: javascriptLogo },

    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 2,
    img: murven,
    role: "Web Developer Intern",
    company: "Murven LLP",
    date: "December 2024 - February 2025",
    desc: "Developed and tested application features using React and Node.js,Collaborated with cross-functional teams in Agile sprints, focusing on integration and problem solving,  ImplementedCI/CDpipelines and participated in documentation and deployment.",
    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "AWS Lambda"
    ],
  },
  {
    id: 0,
    img: gssoc,
    role: "Contributor",
    company: "GirlScript Summer of Code",
    date: "November 2024 - December 2024",
    desc: "As a selected Contributor for GirlScript Summer of Code (GSSoC) 2024 Extended Edition, I am part of an engaging and collaborative open-source program that provides hands-on experience with real-world projects.",
    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
  },
  {
    id: 1,
    img: nmlogo,
    role: "AWS Project Intern",
    company: "Naan Mudhalvaan",
    date: "October 2024 - January 2025",
    desc: "Assigned a hands-on project under the Naan Mudhalvaan program to develop a cloud-hosted virtual classroom and learning platform using AWS. The project involves creating a scalable, secure web application stack using Core Python, Flask, and MySQL, integrated with AWS services for hosting, storage, and database management.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MySQL",
      "AWS EC2",
      "AWS S3",
      "AWS RDS",
      "AWS IAM",
      "Python",
      "Flask",
      "Git",
      "Cost Management"
    ],
  },

];

export const education = [
  {
    id: 0,
    img: TJSEC,
    school: "T.J.S ENGINEERING COLLEGE",
    date: "August 2022 - March 2026",
    grade: "8.5 CGPA",
    desc: "Pursuing B.Tech in Computer Science and Engineering at T.J.S Engineering College, I have gained strong foundations in programming, data structures, algorithms, databases, operating systems, and software development. Alongside academics, I explored Full Stack development,, artificial intelligence, through projects, internships, and hands-on learning. This journey has strengthened my technical expertise, problem-solving skills, teamwork, and innovative thinking, preparing me for real-world challenges in the tech industry.",
    degree: "Bachelors of Engineering - B.E (CSE)",
  },
  {
    id: 1,
    img: pratibha,
    school: "Sree Pratibha Junior College",
    date: "June 2020 - May 2022",
    grade: "75%",
    desc: "I have completed my Intermediate in MPC at Sree Pratibha Junior College, where I built a strong foundation in Maths, Physics, Chemistry. During the course, I have studied subjects like Physics, Chemistry, Biology, English, and Mathematics.",
    degree: "Intermediate - (MPC)",
  },
  {
    id: 2,
    img: apms,
    school: "Andhra Pradesh Model School & Junior College",
    date: "June 2019 - May 2020",
    grade: "95%",
    desc: "I have completed my 10th grade in 2020, acquiring a solid foundation in core subjects and enhancing my knowledge in areas like Mathematics, Science, and English. During this time, I developed strong problem-solving and analytical skills, along with critical thinking abilities. I also focused on personal growth, discipline, and building a mindset for continuous learning, preparing myself for future academic and professional challenges.",
    degree: "SSC (X)",
  },
];

export const projects = [
  {
    id: 0,
    title: "Oral Health Care Platform",
    description:
      "Developed a full-stack healthcare platform with secure file uploads, real-time annotations, and automated report generation. Implemented role-based access control, authentication, and database-driven workflows to ensure security and scalability. Focused on delivering a seamless and responsive user experience through collaborative development.",
    image: oralhealth,
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "AWS S3"],
    github: "https://github.com/Pichikachandu/Oralvis-Assignment",
    webapp: "https://github.com/Pichikachandu/Oralvis-Assignment",

  },
  {
    id: 1,
    title: "DocSpot – Healthcare Appointment Platform",
    description:
      "Built a comprehensive healthcare platform connecting patients and doctors with seamless appointment booking, management, and payment integration. Features include patient registration, doctor availability tracking, appointment rescheduling, secure payments, and an admin dashboard for analytics and user management. Delivered a responsive UI with React 19 + Vite and a secure backend with Node.js, Express, and MongoDB.",
    image: Docspot,
    tags: ["React.js 19", "Node.js", "Express.js", "MongoDB", "Tailwind", "Razorpay", "Cloudinary"],
    github: "https://github.com/Pichikachandu/Docspot",
    webapp: "https://docspot-com.vercel.app/",
  },
  {
    id: 2,
    title: "Recipe Finder (Recipe Radar)",
    description:
      "Recipe Radar is a web app that helps users discover delicious recipes based on the ingredients they already have. It features smart ingredient search, pantry management, recipe saving, dynamic shopping lists, interactive cooking mode, and responsive design. Built with React, Vite, and Tailwind CSS, it ensures smooth performance, offline support, and an engaging user experience.",
    image: Reciperadar,
    tags: ["React", "Vite", "Tailwind CSS", "React Router", "Framer Motion", "API"],
    github: "https://github.com/Pichikachandu/Recipe-finder",
    webapp: "https://recipe-finder-eta-ecru.vercel.app/",
  },
  {
    id: 3,
    title: "Lead Management System",
    description:
      "A full-stack Lead Management System with authentication, lead CRUD operations, server-side pagination, filtering, and AG Grid integration. The frontend (React, MUI, AG Grid) provides a responsive dashboard, while the backend (Express.js, MongoDB, JWT auth) ensures secure and scalable API services. Deployed on Vercel (frontend) and Render (backend).",
    image: LeadManagement,
    tags: ["Reactjs", "Nodejs", "Expressjs", "MongoDB", "JWT", "AG Grid", "MUI", "Vercel", "Render"],
    github: "https://github.com/Pichikachandu/Lead_management-frontend",
    webapp: "https://leadmanagementchandu.netlify.app/login",
  },
];  