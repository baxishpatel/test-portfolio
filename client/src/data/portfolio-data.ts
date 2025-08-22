export const personalInfo = {
  name: "Baxish Patel",
  title: "Quality Assurance Specialist & Test Automation Expert",
  email: "baxishpatel@gmail.com",
  phone: "316-221-0250",
  location: "Andover, KS 67002",
  linkedin: "https://linkedin.com/in/baxish-patel", // Update with actual LinkedIn
  summary: "Accomplished QA professional with 9+ years of experience in software testing, automation, and quality assurance. Proven track record of reducing defects by 40% and increasing testing efficiency by 30% through innovative automation frameworks."
};

export const achievements = [
  { label: "Years Experience", value: "9+" },
  { label: "Defect Reduction", value: "40%" },
  { label: "Product Tests", value: "300+" }
];

export const coreCompetencies = [
  "Test Automation & Framework Development",
  "Performance & Load Testing",
  "API Testing & Integration",
  "CI/CD Pipeline Implementation",
  "Agile & SDLC Best Practices"
];

export const keyAchievements = [
  "Reduced testing time by 30% through BDD automation",
  "Improved deployment efficiency by 25% via CI/CD",
  "Increased test coverage by 30% for financial systems",
  "Mentored 7+ junior engineers in automation",
  "Enhanced client satisfaction by 30%"
];

export const experiences = [
  {
    id: 1,
    title: "Quality Assurance Specialist",
    company: "Kansas Turnpike Authority",
    location: "Wichita, KS",
    period: "10/2024 – Present",
    description: "Solely responsible for developing automation scripts and streamlining QA processes with significant impact on product quality.",
    achievements: [
      "Developed automation scripts, reducing discrepancies by 25%",
      "Conducted 300+ product tests with 40% reduction in post-launch defects",
      "Collaborate on new web application design and deployment",
      "Implemented QA best practices improving data integrity by 20%"
    ],
    isLeft: true,
    isCurrent: true
  },
  {
    id: 2,
    title: "Software Test Specialist",
    company: "Amdocs",
    location: "Pune, India",
    period: "11/2022 – 11/2023",
    description: "Led automation initiatives using cutting-edge technologies, significantly improving testing efficiency and deployment processes.",
    achievements: [
      "Developed BDD automation scripts with Python, reducing testing time by 30%",
      "Engineered frameworks using Ansible, Kubernetes, Kafka, Docker",
      "Reduced manual testing by 60% through automation",
      "Improved deployment efficiency by 25% via CI/CD on AWS"
    ],
    isLeft: false,
    isCurrent: false
  },
  {
    id: 3,
    title: "Senior Test Engineer",
    company: "Euronet Worldwide",
    location: "Thane, India",
    period: "11/2020 – 11/2022",
    description: "Mentored teams and optimized critical financial systems testing with advanced automation frameworks.",
    achievements: [
      "Mentored 7+ junior engineers in test automation and SDLC",
      "Increased test coverage for financial systems by 30%",
      "Optimized frameworks with Selenium, Cypress, and Java",
      "Automated API and RESTful service tests, improving quality by 40%"
    ],
    isLeft: true,
    isCurrent: false
  },
  {
    id: 4,
    title: "Test Engineer",
    company: "AQM Technologies",
    location: "Mumbai, India",
    period: "01/2019 – 11/2020",
    description: "Developed automated test suites and improved integration testing for SAP systems.",
    achievements: [],
    isLeft: false,
    isCurrent: false,
    isCondensed: true
  },
  {
    id: 5,
    title: "Application Test Developer",
    company: "Tata Capital",
    location: "Thane, India",
    period: "02/2017 – 12/2018",
    description: "Optimized business processes with Salesforce Apex solutions and Selenium testing.",
    achievements: [],
    isLeft: true,
    isCurrent: false,
    isCondensed: true
  }
];

export const skillCategories = [
  {
    title: "Programming",
    icon: "fas fa-code",
    skills: [
      { name: "Java", proficiency: 95 },
      { name: "Python", proficiency: 90 },
      { name: "JavaScript", proficiency: 85 },
      { name: "C# / SQL", proficiency: 80 },
      { name: "PHP / VBA", proficiency: 75 }
    ]
  },
  {
    title: "Testing Tools",
    icon: "fas fa-vial",
    skills: [
      { name: "Selenium", proficiency: 95 },
      { name: "Cypress", proficiency: 90 },
      { name: "TestNG / JUnit", proficiency: 85 },
      { name: "Postman / SOAPUI", proficiency: 90 },
      { name: "JMeter", proficiency: 80 }
    ]
  },
  {
    title: "DevOps & Tools",
    icon: "fas fa-tools",
    skills: [
      { name: "Docker / Kubernetes", proficiency: 85 },
      { name: "Jenkins / CI/CD", proficiency: 80 },
      { name: "AWS / Azure", proficiency: 75 },
      { name: "Git / Linux", proficiency: 85 },
      { name: "Kafka / Ansible", proficiency: 70 }
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "CI/CD Pipeline for Microservices",
    period: "2022-2023",
    description: "Designed and implemented scalable CI/CD pipeline using Jenkins, Docker, and Kubernetes with automated testing and deployment processes.",
    achievements: [
      "Reduced deployment time by 50%",
      "Improved software delivery efficiency",
      "Integrated automated testing & quality checks"
    ],
    technologies: ["Jenkins", "Docker", "Kubernetes", "DevOps"],
    gradient: "from-blue-500 to-purple-600",
    icon: "fas fa-project-diagram"
  },
  {
    id: 2,
    title: "API Testing Framework",
    period: "2021",
    description: "Developed comprehensive API testing framework using Postman and SoapUI with automated end-to-end testing for critical business processes.",
    achievements: [
      "Increased API test coverage by 35%",
      "Reduced manual testing effort by 60%",
      "Automated critical business processes"
    ],
    technologies: ["Postman", "SoapUI", "API Testing", "Automation"],
    gradient: "from-green-500 to-teal-600",
    icon: "fas fa-code"
  },
  {
    id: 3,
    title: "Financial Platform Test Automation",
    period: "2020",
    description: "Custom automated testing framework using Selenium WebDriver and Java with BDD scenarios using Gherkin and Cucumber.",
    achievements: [
      "Reduced regression testing time by 40%",
      "Increased test coverage by 25%",
      "Implemented BDD methodology"
    ],
    technologies: ["Selenium", "Java", "BDD", "Cucumber"],
    gradient: "from-orange-500 to-red-600",
    icon: "fas fa-robot"
  }
];

export const navigationItems = [
  { label: "Home", href: "#home" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" }
];
