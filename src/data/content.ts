import { Project, Experience, Skills } from '../types';

/**
 * Featured projects showcasing technical abilities and problem-solving skills
 */
export const projects: Project[] = [
  {
    title: "Hospital Operating Room Scheduling App (Capstone)",
    description: "Leading the development of a comprehensive healthcare scheduling solution. Building a Flutter and Firebase-based system featuring real-time SMS notifications, role-based access control for hospital staff, and dynamic scheduling capabilities. Currently in active development as part of final year engineering capstone project.",
    technologies: ["Flutter", "Firebase", "Real-time Database", "SMS Integration"],
    link: "#",
    github: "https://github.com/harishan-a"
  },
  {
    title: "Shine On Solar",
    description: "Developed an innovative social venture in Uganda, implementing IoT and USSD technologies for affordable solar energy access. Created sustainable business models and technical solutions that enhanced energy access for rural businesses.",
    technologies: ["IoT", "USSD", "Solar Technology", "Business Development"],
    link: "#",
    github: "https://github.com/harishan-a"
  },
  {
    title: "E-Commerce Platform",
    description: "Built a Spring Boot e-commerce platform with comprehensive features including admin dashboard, secure transaction processing, and inventory management. Implemented robust user authentication and authorization systems.",
    technologies: ["Spring Boot", "Java", "Security", "Transaction Processing"],
    link: "#",
    github: "https://github.com/harishan-a/Java-E-Commerce-Application"
  },
  {
    title: "CRUD Operations PostgreSQL",
    description: "A Java application demonstrating CRUD operations on a PostgreSQL database for managing student information. Features include viewing data, adding new students, updating email addresses, and deleting records.",
    technologies: ["Java", "PostgreSQL", "JDBC", "Maven"],
    github: "https://github.com/harishan-a/CRUD_Operations_PostgreSQL",
    link: "#"
  },
  {
    title: "The Cigarette Smokers Problem",
    description: "An implementation of the classic synchronization problem in concurrent programming, demonstrating thread management and resource sharing in Java.",
    technologies: ["Java", "Multithreading", "Synchronization", "Concurrency"],
    github: "https://github.com/harishan-a/The-cigarette-smokers-problem",
    link: "#"
  },
  {
    title: "Java E-Commerce Application",
    description: "A comprehensive e-commerce application showcasing Object-Oriented Programming principles, featuring product management, shopping cart functionality, and checkout processes.",
    technologies: ["Java", "OOP", "Design Patterns", "Exception Handling"],
    github: "https://github.com/harishan-a/Java-E-Commerce-Application",
    link: "#"
  },
  {
    title: "Meals App",
    description: "A Flutter application that displays meals categorized by cuisine type, with features for filtering, favoriting, and detailed recipe views.",
    technologies: ["Flutter", "Dart", "Mobile Development", "UI/UX"],
    github: "https://github.com/harishan-a/meals_app",
    link: "#"
  },
  {
    title: "Personal Expenses App",
    description: "A Flutter-based personal expense tracking application with features for adding, categorizing, and visualizing expenses through charts.",
    technologies: ["Flutter", "Dart", "State Management", "Data Visualization"],
    github: "https://github.com/harishan-a/personal_expences_app",
    link: "#"
  }
];

/**
 * Professional experience highlighting key achievements and responsibilities
 */
export const experiences: Experience[] = [
  {
    title: "IT Developer (Internship)",
    company: "Canada Revenue Agency",
    period: "May 2023 - January 2025",
    description: "Automated SAP testing processes and integrated critical enterprise modules, reducing testing cycles by 65% while serving as Scrum Master for multiple sprints.",
  },
  {
    title: "Engineering Fellow",
    company: "Engineers Without Borders",
    period: "Summer 2023",
    description: "Led IoT-enabled solar energy initiatives in Uganda, developing a battery leasing system that expanded energy access to rural businesses in a $60M market.",
  },
  {
    title: "Systems Integration Specialist",
    company: "Thales Rail Signaling Solutions",
    period: "Winter 2022",
    description: "Achieved 99% test coverage for safety-critical rail systems through automated testing frameworks and Linux-based test environments.",
  },
  {
    title: "Software Development Intern",
    company: "Scrapp",
    period: "Summer 2022",
    description: "Developed and shipped key Flutter-based features for an innovative green tech startup, contributing to its successful App Store launch.",
  }
];

/**
 * Technical skills and areas of expertise
 */
export const skills: Skills = {
  languages: [
    "Java",
    "Dart (Flutter)",
    "Python",
    "C",
    "JavaScript",
    "SQL",
    "HTML/CSS",
    "VB",
    "XML",
    "Bash"
  ],
  tools: [
    "Flutter",
    "Firebase",
    "Jenkins",
    "Git",
    "BitBucket",
    "MicroFocus ALM/QC",
    "UFT One",
    "JUnit",
    "Maven",
    "Spring Boot",
    "Azure",
    "React",
    "Linux",
    "SAP (ECC, S/4 HANA)"
  ],
  areas: [
    "Software Development Life Cycle (SDLC)",
    "Agile/Scrum Methodologies",
    "Software Testing Life Cycle (STLC)",
    "Automated Testing",
    "Real-time Systems",
    "IoT Integration",
    "Enterprise Systems",
    "Startup Development"
  ]
}; 