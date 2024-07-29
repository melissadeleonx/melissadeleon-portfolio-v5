import {
  AboutSectionType,
  ContactSectionType,
  ExperienceSectionType,
  FooterSectionType,
  HeroSectionType,
  NavbarSectionType,
  ProjectsSectionType,
  SkillsSectionType,
  SocialSectionType,
} from '../types/sections';
import { StringKeyValueType } from '../types';
import { resumeFileName } from './config';
import { getId } from './helper';

/*
 * =========================
 * AUTHOR INFO
 * =========================
 */

export const socialLinks: StringKeyValueType = {
  instagram: 'https://www.instagram.com/melissadeleonx',
  twitter: 'https://twitter.com/melissadeleonx',
  github: 'https://github.com/melissadeleonx',
  linkedin: 'https://www.linkedin.com/in/melissadeleonx/',
};

export const author = {
  name: 'Melissa De Leon',
  email: 'primavita19@gmail.com',
};

export const seoData = {
  title: 'Melissa De Leon | Software Developer',
  description:
    'Portfolio website version 4 of Melissa De Leon. Melissa De Leon is an aspiring software and web developer with a growing expertise in a diverse range of technologies. Proficient in JavaScript and Python, Melissa De Leon skillfully utilizes frameworks such as TailwindCSS, Bootstrap, Django, Flask, ReactJS, NextJS, and Typescript to create dynamic, responsive, and user-friendly applications. ',
  author: author.name,
  image: '/v4portfolio.png',
  url: 'https://melissadeleon.com',
  keywords: [
    'Melissa',
    'Melissa De Leon',
    'melissadeleon',
    'melissadeleonx',
    'Portfolio',
    'Melissa De Leon Portfolio ',
    'Joey De Leon',
    'Melissa Lara De Leon',
    'Christopher De Leon',
    'Jane De Leon',
    'cs50',
  ],
};
/*
 * =========================
 * SECTIONS
 * =========================
 */

// Navbar Section

export const navbarSection: NavbarSectionType = {
  navLinks: [
    { name: 'about', url: '/#about' },
    { name: 'skills', url: '/#skills' },
    { name: 'experience', url: '/#experience' },
    { name: 'projects', url: '/#projects' },
    { name: 'contact', url: '/#contact' },
  ],
  cta: {
    title: 'view my cv',
    url: `/${resumeFileName}`,
  },
};

// * Hero Section

export const heroSection: HeroSectionType = {
  subtitle: "Ciao and Mabuhay 🐱, I'm ",
  title: 'Melissa De Leon',
  tagline: 'Software Developer',
  description:
    "Got an idea for a project? Let's make it happen!",

  cta: {
    title: 'contact me',
    url: `mailto:primavita19@gmail.com`,
    // hideInDesktop: true,
  },
};


// * About Section

export const aboutSection: AboutSectionType = {
  title: 'about me?',
  list: {
    title: 'Here are a few technologies I’ve been studying and working with recently. Cheers to more!',
    items: [
      'C',
      'Python',
      'Django',
      'Flask',
      'SQL',
      'Javascript',
      'TypeScript',
      'Next.js',
      'React.js',
      'HTML',
      'CSS',
      'Bootstrap',
      'TailwindCSS',
      'Jekyll',
      'Wordpress',
      'GIT',
      'AWS'
    ],
  },
  img: '/myimage.jpg',
};

// * Skills Section

export const skillsSection: SkillsSectionType = {
  title: 'what i do',
  skills: [
    {
      id: getId(),
      title: 'full stack development',
      // animation lottie file: https://lottiefiles.com/
      lottie: {
        light: '/lotties/girlcomputer.json',
        dark: '/lotties/girlcomputer.json',
      },
      points: [
        'Building responsive static websites with HTML, CSS, and JavaScript, leveraging frontend frameworks including React, Next.js, TypeScript, Gatsby, Tailwind CSS, and Bootstrap.',
        'Developing robust backend applications and servers using Python, Django, Flask, and SQL.',
        'Pursuing continuous education through Harvard CS50 Web Development (cs50w) and CS50 Python (cs50p) courses.',
      ],
      softwareSkills: [
        // iconify icons: https://icon-sets.iconify.design/
        { name: 'HTML5', icon: 'vscode-icons:file-type-html' },
        { name: 'CSS3', icon: 'vscode-icons:file-type-css' },
        { name: 'javaScript', icon: 'vscode-icons:file-type-js-official' },
        {
          name: 'typeScript',
          icon: 'vscode-icons:file-type-typescript-official',
        },
        { name: 'node.js', icon: 'logos:nodejs-icon' },
        { name: 'react.js', icon: 'logos:react' },
        { name: 'next.js', icon: 'logos:nextjs-icon' },
        { name: 'tailwind CSS', icon: 'logos:tailwindcss-icon' },

        { name: 'database', icon: 'vscode-icons:file-type-sql' },
      ],
    },
    {
      id: getId(),
      title: 'Future Goals',
      lottie: {
        light: '/lotties/ethereum.json',
        dark: '/lotties/ethereum-dark.json',
      },
      points: [
        'Master the Front-end and Back-end Development aspects of web development.',
        'Explore Blockchain Technology and understand its applications.',
        'Gain expertise in cybersecurity and delve into the complexities of low-level programming languages, particularly focusing on languages like C.',
      ],
      softwareSkills: [
        { name: 'ethereum', icon: 'logos:ethereum' },
        { name: 'solidity', icon: 'logos:solidity' },
        { name: 'metamask', icon: 'logos:metamask-icon' },
      ],
    },
  ],
};

// * Experience Section

export const experienceSection: ExperienceSectionType = {
  title: "My Career Highlights",
  experiences: [
    {
      company: 'Freelance Web Developer',
      companyUrl: 'https://github.com/melissadeleonx',
      role: 'Full-Stack Developer',
      started: 'December 2023',
      upto: 'Present',
      tasks: [
        "Actively building and deploying websites on platforms such as Github, Vercel, Netlify, Wordpress, and Siteground.",
        "Recently completed Harvard University's cs50 online course. Applying acquired skills in critical thinking and proficiency in languages including C, Python, Flask, SQL, and Javascript.",
        "Open to exploring new freelance opportunities.",
      ],
    },
    {
      company: 'Self-employed',
      companyUrl: 'https://www.visitsicilynow.com/',
      role: 'SEO and Social Media Manager',
      started: 'January 2019',
      upto: 'February 2021',
      tasks: [
        "Specialized in SEO strategies and effective WordPress management. Demonstrated expertise through impactful contributions to SicilyShortStay.com and VisitSicilyNow.com.",
        "Excelled in curating and managing engaging content across various social media platforms. Contributed valuable insights and strategies to enhance the online presence of Hotel Tourist Cefalu, MediTravel, and Palazzo Raho.",
        "Successfully oversaw content creation and management, ensuring high-quality and relevant materials.",
        "Applied skills in content strategy to optimize digital presence for clients.",
      ],
    },
    {
      company: 'World Escape LLC',
      companyUrl: 'https://www.worldescape.com/',
      role: 'Business Development Manager',
      started: 'January 2015',
      upto: 'December 2018',
      tasks: [
        "Actively promoted World Escape LLC through strategic marketing initiatives.",
        "Established and nurtured partnerships with vacation rental websites such as HomeAway, Wimdu, Housetrip, amplifying brand visibility.",
        "Dedicated 8 years to cultivating relationships with property management companies.",
        "Instrumental in the success of multiple high-ranking websites such as Amsterdamescape.com and Amsterdamstay.com, which have thrived since before the Google era.",
      ],
    },
    {
      company: 'AmsterdamStay',
      companyUrl: 'https://www.amsterdamstay.com/',
      role: 'Customer Service Manager',
      started: 'September 2010',
      upto: 'December 2018',
      tasks: [
        "Led the customer service division, overseeing a team dedicated to providing excellent support.",
        "Managed customer service operations for World Escape's premium websites, including NewYorkStay.com, AmsterdamStay.com, AmsterdamEscape.com, RomeEscape.com, LondonEscape.com, and more.",
        "Provided dedicated support to guests and property owners, ensuring a positive experience across all platforms.",
      ],
    },

    {
      company: 'BPO Companies',
      companyUrl: 'https://melissadeleonx.github.io/',
      role: 'Customer Service Representative',
      started: 'June 2007',
      upto: 'May 2010',
      tasks: [
        "Commenced career at 17, demonstrating a strong work ethic and an early commitment to professional growth.",
        "Managed diverse accounts spanning insurance, mortgage, real estate, telemarketing, and more, showcasing adaptability and versatility.",
        "Gained international experience working as a customer service agent for multiple US-based accounts, contributing to a global skill set.",
      ],
    },
    // {
    //   company: '',
    //   companyUrl: '',
    //   role: '',
    //   started: '',
    //   upto: '',
    //   tasks: [

    //   ],
    // },
  ],
};

// * Projects Section

export const projectsSection: ProjectsSectionType = {
  title: 'My Pride and Joy',
  subtitle: "study. code. debug. Building and Deploying Projects Everyday!",
  projects: [
    {
      id: getId(),
      name: "Science Wiki - CS50 Project 1",
      url: "https://melissadeleon.com/wiki/",
      repo: "https://github.com/melissadeleonx/science-wiki",
      img: "/sciencewiki.png",
      alt: "Science Wiki website",
      year: 2024,
      tags: ["Django", "Python", "JavaScript", "HTML", "CSS", "Bootstrap", "API", "Heroku"],
    },
    {
      id: getId(),
      name: "Google Search Website - CS50 Project 0",
      url: "https://melissadeleon.com/Google-Search/",
      repo: "https://github.com/melissadeleonx/Google-Search",
      img: "/google-search.png",
      alt: "Google Search clone Project 0",
      year: 2024,
      tags: ["CSS", "HTML", "TailwindCSS", "JavaScript",],
    },
    {
      id: getId(),
      name: "VisitSicilyNow.com - Sicily Travel Website! ",
      url: "https://visitsicilynow.com/",
      repo: "https://github.com/melissadeleonx/visit-sicily",
      img: "/visitsicilynow-image.png",
      alt: "Visit Sicily Now Travel Blog",
      year: 2024,
      tags: ["CSS", "HTML", "Javascript", "Bootstrap", "Markdown", "YML", "JSON",],
    },
    {
      id: getId(),
      name: "uniVVV Social Media Site",
      url: "https://github.com/melissadeleonx/uniVVV",
      repo: "https://github.com/melissadeleonx/uniVVV",
      img: "/univvvflask.png",
      alt: "uniVVV Intergalactic Social Media Site Screenshot",
      year: 2023,
      tags: ["Flask", "Python", "Jinja", "HTML", "Bootstrap CSS", "JavaScript",],
    },
    {
      id: getId(),
      name: "CS50 Community Notes",
      url: "https://melissadeleon.com/cs50-community-notes",
      repo: "https://github.com/melissadeleonx/cs50-community-notes",
      img: "/cs50-community-notes.png",
      alt: "CS50 Community Notes",
      year: 2024,
      tags: ["Markdown", "HTML", "CSS", "Boostrap", "Jekyll", "JavaScript", "YML", "GIT", "bash", "PDF", "jquery"],
    },
    {
      id: getId(),
      name: 'Wise Finance - Buy and Sell Stocks',
      url: 'https://github.com/melissadeleonx',
      repo: 'https://github.com/melissadeleonx/wise-finance',
      img: '/financecs50.png',
      alt: "Finance cs50 - Buy and Sell Stocks Portfolio Manager",
      year: 2023,
      tags: ['Flask', 'Python', 'HTML', 'Bootstrap CSS', 'API'],
    },
    {
      id: getId(),
      name: 'v3 Portfolio Website',
      url: 'https://melissadeleon.com/portfoliov3/',
      repo: 'https://github.com/melissadeleonx/portfoliov3',
      img: '/v3portfolio.png',
      alt: "Third Iteration of Melissa De Leon portfolio website",
      year: 2024,
      tags: ['Jekyll', 'NodeJS', 'HTML', 'CSS', 'Javascript', 'Gulp',],
    },
    {
      id: getId(),
      name: 'v2 Portfolio Website',
      url: 'https://tech-journey-melissadeleonx.vercel.app/',
      repo: 'https://github.com/melissadeleonx/tech-journey',
      img: '/v2portfolio.png',
      alt: "Second Iteration of Melissa De Leon portfolio website",
      year: 2024,
      tags: ['ReactJS', 'Next.js', 'TailwindCSS', 'CSS', 'JavaScript', 'Yarn', 'JSON'],
    },
    {
      id: getId(),
      name: 'v1 Portfolio Website',
      url: 'https://melissadeleon.com/portfolio-version-1/',
      repo: 'https://github.com/melissadeleonx/melissadeleonx.github.io',
      img: '/v1portfolio.png',
      alt: "First Iteration of Melissa De Leon portfolio website",
      year: 2023,
      tags: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      id: getId(),
      name: 'RadioShack Website Redesign',
      url: 'https://melissadeleonx.github.io/',
      repo: 'https://github.com/melissadeleonx  ',
      img: '/radioshack.png',
      alt: "Radioshack Website Redesign",
      year: 2023,
      tags: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      id: getId(),
      name: 'Rainbow Piano App',
      url: 'https://scratch.mit.edu/projects/913216059/',
      repo: 'https://github.com/melissadeleonx  ',
      img: '/rainbowpiano-scratch.png',
      alt: "Scratch Rainbow Piano App",
      year: 2023,
      tags: ['Scratch'],
    },
    {
      id: getId(),
      name: 'edX Verified Certificate',
      url: 'https://courses.edx.org/certificates/cef15cace46045b4a84aa49f314170e9/',
      repo: 'https://github.com/melissadeleonx  ',
      img: '/HarvardEDX.png',
      alt: "HarvardX Verified Certificate through EDX",
      year: 2023,
      tags: ['C Programming', 'Python', 'SQL', 'Algorithm', 'Data Structure', 'Web Development'],
    },
    {
      id: getId(),
      name: 'CS50 Harvard Certificate',
      url: 'https://certificates.cs50.io/5bb89bee-1225-4ac5-981a-5d75a17a0661.pdf?size=letter',
      repo: 'https://github.com/melissadeleonx  ',
      img: '/CS50x.png',
      alt: "CS50 Harvard Certificate",
      year: 2023,
      tags: ['C Programming', 'Python', 'SQL', 'HTML', 'CSS', 'JavaScript', 'Flask', 'Jinja'],
    },
    {
      id: getId(),
      name: 'LinkedIn Certificate for C Programming',
      url: 'https://www.linkedin.com/learning/certificates/580417c3e416ac5be3237cb2e07776a5fbd69e801a7550cce110bb6961a77002?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BbLxg1JM%2FR1q8SL318zGqPA%3D%3D',
      repo: 'https://github.com/melissadeleonx  ',
      img: '/Linkedin-Certificate-CProgramming.png',
      alt: "LinkedIn Certificate for C Programming",
      year: 2023,
      tags: ['C Programming'],
    },
    {
      id: getId(),
      name: 'LinkedIn Certificate for Python Programming',
      url: 'https://www.linkedin.com/learning/certificates/edca1028de539b8aade13e0f3b29a65a1c7551a680f2f6b0b98b74e103a0c095?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BbLxg1JM%2FR1q8SL318zGqPA%3D%3D',
      repo: 'https://github.com/melissadeleonx  ',
      img: '/LinkedIn-Certificate-Python-Programming.png',
      alt: "LinkedIn Certificate for Python Programming",
      year: 2023,
      tags: ['Python Programming'],
    },
    {
      id: getId(),
      name: 'LinkedIn Certificate for Web Development',
      url: 'https://www.linkedin.com/learning/certificates/8d75ce725a898755b092dbefaf98a91a0fb3dbfa31d3c181f251756972e6edf5',
      repo: 'https://github.com/melissadeleonx  ',
      img: '/Linkedin-Certificate-WebDev.png',
      alt: "LinkedIn Certificate for Web Development",
      year: 2023,
      tags: ['Web Development'],
    },
  ],
};

// * Contact Section

export const contactSection: ContactSectionType = {
  title: 'uniVVV',
  subtitle: "where the universe is yours to explore! ",
  paragraphs: [
    "My latest project that’s set to revolutionize how species across the universe connect! This social media game is designed to bridge connections today and into the future. ",
  ],
  link: ``,
};

// Social Links Section

export const socialSection: SocialSectionType = {
  socialLinks: [
    {
      icon: 'tabler:brand-github',
      url: socialLinks.github,
    },
    {
      icon: 'mdi:instagram',
      url: socialLinks.instagram,
    },
    {
      icon: 'lucide:twitter',
      url: socialLinks.twitter,
    },
    {
      icon: 'lucide:linkedin',
      url: socialLinks.linkedin,
    },
  ],
};

// Footer Section

export const footerSection: FooterSectionType = {
  title: 'Copyright © 2024 Melissa De Leon @melissadeleonx',
  link: 'https://github.com/melissadeleonx',
  title2: 'MIT License',
  link2: '/',
};