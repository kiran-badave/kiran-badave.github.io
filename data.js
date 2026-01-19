/**
 * Portfolio Data
 * Copyright (c) 2025 Kiran Badave
 * Licensed under the MIT License
 * https://github.com/kiran-badave/kiran-badave.github.io
 */

// Centralized Portfolio Data
// Update this file to reflect changes across both web and print versions

const portfolioData = {
    personal: {
        name: "Kiran Badave",
        title: "Staff Software Engineer",
        subtitle: "Software Developer - UI/UX",
        location: "Pune, Maharashtra, India",
        email: "kiranbadave06@gmail.com",
        phone: ["+91 967 303 6719", "+91 797 208 1821"],
        linkedin: "https://www.linkedin.com/in/kiran-badave",
        linkedinDisplay: "linkedin.com/in/kiran-badave",
        github: "https://github.com/kiran-badave",
        githubDisplay: "github.com/kiran-badave",
        portfolio: "https://kiran-badave.github.io/",
        portfolioDisplay: "kiran-badave.github.io",
        address: "604, D2, Kumar Pebble Park, Hadapsar, Pune, MH - 411028",
        profileImage: "assets/profile_picture.png"
    },

    summary: "Driven front-end professional, eager to craft interactive and intuitive interfaces that inspire users and drive engagement. I have more than seven years of experience in Software Engineering with a strong background in full-stack development, specializing in React.js, TypeScript, and Java-based backend services. Proven expertise in building scalable Monorepos, integrating authentication systems like Keycloak, and developing interactive dashboards with D3, ECharts, and Carbon Charts. Skilled in performance optimization, internationalization, accessibility compliance (WCAG), and end-to-end testing with Playwright and Cypress. Adept at API development using Java Spring Boot, database management with MySQL and PostgreSQL, and working with cloud-native technologies like Kubernetes and Docker. Strong collaborator with a track record of mentoring, leading teams, and implementing best practices for scalable and maintainable software solutions.",

    stats: [
        { number: 7, label: "Years Experience" },
        { number: 50, label: "Projects Completed" },
        { number: 15, label: "Technologies" }
    ],

    experience: [
        {
            company: "IBM",
            location: "Bengaluru, Karnataka, India",
            role: "Staff Software Engineer | Software Developer - UI/UX",
            duration: "May 2022 - Present",
            durationYears: "3+ years",
            logo: "assets/images/ibm-logo.png",
            products: [
                {
                    name: "Concert for IBM Z Operations Management",
                    url: "https://www.ibm.com/products/concert-for-z/operations-management"
                },
                {
                    name: "IBM z/OS Connect",
                    url: "https://www.ibm.com/products/zos-connect"
                }
            ],
            responsibilities: [
                "Developed a React-based <strong>Monorepo</strong> from scratch, implementing service proxying, <strong>Keycloak authentication & authorization</strong>, and a custom framework for cross-project use",
                "Developed and customized various dashboards using ECharts, Carbon Charts, and D3 Charts",
                "Developed high-quality React.js UI components in collaboration with the UX team, using <strong>Figma</strong> for design integration",
                "Implemented <strong>end-to-end testing</strong> with <strong>Playwright</strong>, with experience in <strong>Cypress</strong>, and unit testing using Jest and Enzyme",
                "Established and maintained <strong>CI/CD pipelines</strong> using <strong>Travis CI</strong>, <strong>TeamCity</strong>, and <strong>IBM Secure Pipelines Service (SPS)</strong>, automating build, test, and deployment processes for streamlined releases",
                "Integrated AI assistance with Watsonx Orchestration, developed skills, and added custom APIs to deliver product-specific insights on z Mainframe activities",
                "Implemented secure login SSO, 2FA, user, role and permission management, and user interfaces using Keycloak framework",
                "Integrated <strong>i18next</strong> for UI internationalization",
                "Implemented <strong>Storybook</strong> for component visualization and collaboration",
                "Integrated complex topology functionality using <strong>D3</strong> force graph, surpassing design requirements",
                "Enhanced component reusability by applying object-oriented principles in TypeScript, enabling cross-project usage",
                "Developed a custom Keycloak provider in Java for tailored authentication and authorization",
                "Basic understanding and hands-on experience with Kubernetes, Kafka, Docker, and Microservices",
                "Identified and resolved accessibility issues per WCAG guidelines, improving accessibility by 80%",
                "Actively participated in knowledge-sharing sessions and mentored new joiners",
                "Introduced best practices for React coding standards and refactoring",
                "Actively participated in ISDL and IBM initiatives, including Hackathons and ISDL events"
            ],
            technologies: {
                "Front-end": "React, Javascript, HTML, CSS, SCSS, Redux, Zustand, Carbon UI design system",
                "Back-end": "Node.JS, Typescript, Express, REST API, Java",
                "Testing": "Playwright, Cypress, Jest, RTL, Enzyme",
                "CI/CD": "Travis CI, TeamCity, Secure Pipelines Service (SPS)",
                "Tools": "Webpack, Vite, i18next, Storybook, Figma UX design tool, K8S, Docker",
                "Database": "PostgreSQL, OpenSearch",
                "Graphs": "D3 force graph, Echarts, Carbon Charts",
                "Others": "Keycloak for AuthN and AuthZ with Java, OAS Specifications, JSONata, Swagger, JSON Schema"
            }
        },
        {
            company: "Juno Software Systems",
            location: "Pune, Maharashtra, India",
            role: "Junior System Architect",
            duration: "Dec 2017 - May 2022",
            durationYears: "4 years 6 months",
            logo: "assets/images/juno-logo.png",
            products: [
                {
                    name: "Juno Campus",
                    url: "https://juno.org.in/"
                }
            ],
            responsibilities: [
                "Engineered and deployed front-end UIs and back-end middleware for Admission, Academic, Exam, and Finance modules, optimizing code, code securing to boost data processing speed by 40% and user engagement by 25%",
                "Developed and designed secure <strong>RESTful APIs</strong> using <strong>Java, Spring Boot</strong> for seamless functionality integration",
                "Designed and implemented <strong>MySQL</strong> database structures, including stored procedures, joins, functions, and triggers",
                "Optimized application performance by 40% through code refactoring, MySQL query optimization with indexes and stored procedures, and caching implementation, enhancing user experience",
                "Integrated ERP system/enterprise applications with Single Sign-On (SSO) providers, including Google and Microsoft Azure AD",
                "Integrated the ERP system with Microsoft Teams and Google Meet for seamless communication",
                "Led a team of four, overseeing tasks, providing guidance, and fostering collaboration"
            ],
            technologies: {
                "Java technologies": "Java 8, Spring, RESTful API, Hibernate, Spring security and Authentication, JSON",
                "Web development": "JavaScript ES6, JQuery, React JS, Redux, Hooks, Bootstrap 4.5, SCSS, AJAX",
                "Database": "MySQL",
                "Tools": "CentOS 7, Eclipse IDE, Tomcat 8.5, TeamCity for automated deployments, Termius SSH platform, GIT and SVN Version Control, Navicat for MySQL"
            }
        }
    ],

    skills: [
        {
            icon: "💻",
            title: "Full-Stack Development",
            description: "React, Java, Spring, REST API, Hibernate, Keycloak AuthN and AuthZ, JavaScript ES6, TypeScript, Node.js, Express.js, JQuery, Redux, Bootstrap, SCSS, AJAX, MySQL, PostgreSQL, OAS Spec, Swagger"
        },
        {
            icon: "🧪",
            title: "Testing",
            description: "Unit and integration testing with Playwright, Jest, RTL, Enzyme, OAS Spec, Cypress Testing"
        },
        {
            icon: "☁️",
            title: "Microservices & Cloud",
            description: "Experience with Kubernetes, Docker, and Microservices architecture"
        },
        {
            icon: "🛠️",
            title: "Tools",
            description: "Version control system (GitHub, SVN), Figma, SonarQube, Jira, TeamCity, and more"
        },
        {
            icon: "👥",
            title: "Collaboration & Leadership",
            description: "Effective communication, mentoring, and team leadership experience"
        },
        {
            icon: "📚",
            title: "Learning & Development",
            description: "Proactive acquisition of new skills and participation in hackathons, UX workshops and events"
        }
    ],

    technicalSkills: [
        { name: "React.js", years: 4, category: "Frontend" },
        { name: "JavaScript/ES6", years: 7, category: "Frontend" },
        { name: "TypeScript", years: 4, category: "Frontend" },
        { name: "HTML5/CSS3", years: 7, category: "Frontend" },
        { name: "Redux/Zustand", years: 4, category: "Frontend" },
        { name: "Java", years: 5, category: "Backend" },
        { name: "Spring Boot", years: 5, category: "Backend" },
        { name: "Node.js", years: 4, category: "Backend" },
        { name: "Express.js", years: 4, category: "Backend" },
        { name: "REST API", years: 7, category: "Backend" },
        { name: "MySQL", years: 6, category: "Database" },
        { name: "PostgreSQL", years: 3, category: "Database" },
        { name: "MongoDB/NoSQL", years: 2, category: "Database" },
        { name: "Playwright", years: 3, category: "Testing" },
        { name: "Cypress", years: 2, category: "Testing" },
        { name: "Jest", years: 4, category: "Testing" },
        { name: "CI/CD (Travis, TeamCity)", years: 3, category: "DevOps" },
        { name: "Docker", years: 2, category: "DevOps" },
        { name: "Kubernetes", years: 2, category: "DevOps" },
        { name: "Git/GitHub", years: 7, category: "Tools" },
        { name: "Figma", years: 3, category: "Tools" },
        { name: "Webpack/Vite", years: 4, category: "Tools" }
    ],

    education: [
        {
            icon: "🎓",
            degree: "Master of Computer Applications",
            field: "MCA, Computer Science",
            institution: "Sinhgad Institute of Business Administration and Research, Pune University, Maharashtra, India",
            duration: "2016 – 2019",
            logo: "assets/images/sibar-logo.png"
        },
        {
            icon: "🎓",
            degree: "Bachelor of Computer Application",
            field: "BCA, Computer Software Engineering",
            institution: "Punyashlok Ahilyadevi Holkar Solapur University, Solapur, Maharashtra, India",
            duration: "2013 – 2016",
            logo: "assets/images/solapur-uni-logo.png"
        }
    ]
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioData;
}
