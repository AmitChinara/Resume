const start_date_data = "2022-09";
let yearsOfExperience = calculateYearsOfExperience(start_date_data);

const contact_name_data = `AMIT CHINARA`;

const contact_details_data = {
    resume: `https://amitchinara.github.io/resume/`,
    linkedin: `www.linkedin.com/in/amit-chinara-0403b5312a`,
    leetcode: `www.leetcode.com/u/amitchinara`,
    number: `+91 8093386767`,
};

const about_data = `I have <time datetime="${start_date_data}"><b>${yearsOfExperience}</b></time> years of work experience and my communication skills are robust enough to help me develop good relationship with other this also helps me to communicate my ideas to others. I am a team player which makes the work go smoothly. Along with this my creative problem-solving skills give me advantages during challenging situations. I believe that establishing defined objectives and meeting deadlines promotes a systematic and results-oriented approach to work. My ability to guide the team toward a certain goal demonstrates my leadership potential, making me an asset in any workplace.`;

const skills_data= [`Java8`, `Oracle DB`, `MongoDB`, `HTML`, `CSS`, `JavaScript`, `TypeScript`, `Spring Boot`, `Maven`, `JUnit`, `Node JS`, `Jest`, `Python`, `Linux Script`];

const work_experience_data = [
    {
        company_name: `Accenture in India`,
        designation: `Application Development Analyst`,
        duration: `<time datetime="2022-Sept">2022-Sept</time> to <time datetime="Present">Present</time>`,
        location: `Bengaluru, Karnataka, India`,
        role: [
            {
                name: `Backend Developer`,
                points: [
                    {
                        name: `REST API Middleware Development`,
                        points: [
                            `Designed and implemented REST API middleware for a leading telecom company using Java and Spring Boot, delivering scalable and efficient solutions.`,
                            `Optimized API performance by crafting and fine-tuning complex SQL queries, significantly reducing response times.`,
                            `Followed best coding practices and ensured code quality through static analysis tools like SonarQube and comprehensive testing with JUnit.`,
                            `Delivered high-quality, bug-free code, meeting strict deadlines and adhering to industry standards.`
                        ]
                    },
                    {
                        name: `Service Observability & Debugging`,
                        points: [
                            `Built a custom log aggregation and processing tool using Bash scripting, enhancing observability of service performance.`,
                            `Enabled the team to easily debug latency issues, reducing troubleshooting time and pinpointing root causes more effectively.`
                        ]
                    },
                    {
                        name: `Migration from MuleSoft to Node.js`,
                        points: [
                            `Led the migration of APIs from MuleSoft to Node.js, leveraging TypeScript to deliver robust and maintainable code.`,
                            `Ensured end-to-end delivery, including the setup of database interactions, error handling, and security.`,
                            `Utilized Jest for comprehensive testing to maintain high code reliability.`
                        ]
                    },
                    {
                        name: `Performance Optimization`,
                        points: [
                            `Spearheaded initiatives to optimize API execution times, achieving significant reductions through SQL query optimizations and efficient backend design.`
                        ]
                    },
                    {
                        name: `Team Collaboration & Mentorship`,
                        points: [
                            `Actively contributed to team discussions on architectural decisions and performance improvements.`,
                            `Shared insights on debugging techniques and best practices, fostering a collaborative and high-performing team environment.`
                        ]
                    },
                    {
                        name: `Key Achievements`,
                        points: [
                            `Successfully delivered high-impact backend solutions, solving challenging problems with innovative and intuitive approaches.`,
                            `Demonstrated ownership and expertise in handling diverse tasks ranging from API design to performance monitoring and optimization.`
                        ]
                    }
                ]
            }
        ]
    }
];

const education_experience_data= [
    {
        duration: `2018-2022`,
        name: `B. TECH (COMPUTER SCIENCE ENGINEERING)`,
        institution: `ITER`,
        location: `BBSR, ODISHA`,
        score: `8.36 CGPA`
    },
    {
        duration: `2016-2018`,
        name: `12TH STANDARD`,
        institution: `DAV PUBLIC SCHOOL, UNIT 8`,
        location: `BBSR, ODISHA`,
        score: `57.00%`
    },
    {
        duration: `2016`,
        name: `10TH STANDARD`,
        institution: `DAV PUBLIC SCHOOL, UNIT 8`,
        location: `BBSR, ODISHA`,
        score: `7.4 CGPA`
    }
];

const data = {
    contact_name: contact_name_data,
    contact_details: contact_details_data,
    about: about_data,
    skills: skills_data,
    work_experience: work_experience_data,
    education_experience: education_experience_data
}