// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import skfi from './assets/company_logo/SKFI.png';

// Education Section Logo's
import glaLogo from './assets/education_logo/gla_logo.png';
import vpsLogo from './assets/education_logo/DMV.png';
import Ms from './assets/education_logo/ms.png';

// Project Section Logo's
import movierecLogo from './assets/work_logo/movie_rec.png';

// ⭐ FIXED LINE (the error one)
import weatherAppLogo from './assets/work_logo/Weather.jpg';

import imagesearchLogo from './assets/work_logo/image_search.png';
import airbnbYourHomeLogo from './assets/work_logo/airbnbYourHomeLogo.jpg';
import tinyLink from './assets/work_logo/tinyLink.png';



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      // { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      // { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      // { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      // { name: 'GSAP', logo: gsapLogo },
      // { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      // { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      // { name: 'Firebase', logo: firebaseLogo },
      // { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      // { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      // { name: 'Python', logo: pythonLogo },
      // { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      // { name: 'TypeScript', logo: typescriptLogo },
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
    id: 1,
    role: "Full Stack Developer Intern",
    company: "Sikherthe Infotech",
    date: "september 2024 – feb 2025",
    img: skfi, // Put your logo path here
    desc: "Worked on full-stack web development using MERN stack. Built APIs, integrated frontend with backend, optimized UI/UX, and handled database operations with MongoDB. Collaborated with senior developers to deliver real-world project features.",
    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript",
      "REST API",
      "Git",
      "Tailwind CSS"
    ]
  }
];

  
  export const education = [
    {
      id: 0,
      img: glaLogo,
      school: "Greater Kolkata College of Engineering and Management",
      schoolUrl: "https://www.gkcem.ac.in/",
      date: "Sept 2021 - July 2025",
      grade: "8.5 CGPA",
      desc: "I have completed my Bachelor's degree (B.Tech) in Computer Applications from MAKAUT University. During my time at MAKAUT, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at MAKAUT University has been instrumental in shaping my technical abilities and professional growth.",
      degree: "Bachelor of Technology - B.Tech",
    },
 
    {
      id: 1,
      img: vpsLogo,
      school: "Dahijuri Mahatma Vidyapith",
      schoolUrl: "https://school.banglarshiksha.gov.in/ws/website/index/19230303902",
      date: "Apr 2019 - March 2020",
      grade: "70%",
      desc: "I completed my class 12 education from Dahijuri Mahatma Vidyapith, under the West Bengal Council of Higher Secondary Education, where I studied Physics, Chemistry, and Mathematics (PCM).",
     degree: "WBCHSE (XII) - PCM",
    },
    {
      id: 2,
      img: Ms,
      school: "Madan Sole Netaji High School",
      schoolUrl: "https://school.banglarshiksha.gov.in/ws/website/index/19230701304",
      date: "Apr 2017 - March 2018",
      grade: "62.5%",
      desc: "I completed my class 10 education from Madan Sole Netaji High School, under the West Bengal Board of Secondary Education, where I studied Science stream subjects.",
      degree: "WBBSE (X) - Science"
    },
  ];
  
  export const projects = [

 
    {
      id: 0,
      title: "Movie Recommendation App",
      description:
        "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
      image: movierecLogo,
      tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/codingmastr/Movie-Recommendation-App",
      webapp: "https://movie-recommendation-app-jet.vercel.app/",
    },
 
   

  
    {
      id: 1,
      title: "Image Search App",
      description:
        "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
      image: imagesearchLogo,
      tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
      github: "https://github.com/surajit0609/ImageSearch",
      webapp: "https://imagesearchforall.netlify.app/",
    },
    {
  id: 2,
  title: "Airbnb Your Home",
  description:
    "A full-stack Airbnb-like listing platform where users can list, explore, and book properties. Developed using React.js, Node.js, Express, MongoDB, and Tailwind CSS. Features include image uploads, location-based listings, authentication, and review systems.",
  image: airbnbYourHomeLogo, // Make sure this variable points to the correct image/logo
 tags: ["Express.js", "JWT Auth", "MongoDB", "Tailwind CSS", "EJS", "REST API"],
  github: "https://github.com/surajit0609/Airbnb", // Update this if needed
  webapp: "https://airbnb-4g6h.onrender.com/listings",
},
{
  id: 3,
  title: "Weather Forecast App",
  description:
    "A real-time weather forecasting application that allows users to search weather conditions by city. Built with React.js and OpenWeatherMap API, featuring responsive UI, dynamic temperature icons, and detailed forecast including humidity, wind speed, and more.",
  image: weatherAppLogo, // Make sure to define or import this logo image
  tags: ["React.js", "OpenWeatherMap API", "Axios", "JavaScript", "CSS", "Responsive UI"],
  github: "https://github.com/surajit0609/Weather-app", // Replace with actual GitHub link if different
  webapp: "https://newweatherapps.netlify.app/",     // Replace with actual deployment link
},
{
  id: 4,
  title: "TinyLink - URL Shortener",
  description:
    "A fast and efficient URL shortener application that generates short links with automatic code generation, click analytics, redirect handling, and proper validation using Joi. Built with Node.js, Express, MongoDB, and EJS on the backend, and React.js on the frontend. Supports CRUD operations, displays analytics, and provides real-time updates.",
  image: tinyLink, // Make sure to import tinyLinkLogo image at the top
  tags: [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "Joi Validation",
    "EJS",
    "REST API",
    "JavaScript"
  ],
  github: "https://github.com/surajit0609/TinyLinkClient", // Update if different
  webapp: "https://tiny-link-beige.vercel.app/", // Replace with your deployment link
}






  ];  