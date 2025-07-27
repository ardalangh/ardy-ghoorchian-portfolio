"use client";
import React from "react";

interface Skill {
  name: string;
  proficiency: string;
  url?: string;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Back End",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M3 3h18v18H3V3zm16 16V5H5v14h14zM7 7h10v2H7V7zm0 4h10v2H7v-2zm0 4h6v2H7v-2z"/>
      </svg>
    ),
    skills: [
      { name: "Python on Django, FastAPI, Flask", proficiency: "Production Level Experience", url: "https://www.python.org" },
      { name: "Java on Spring Boot", proficiency: "Production Level Experience", url: "https://www.oracle.com/java/" },
      { name: "JavaScript & TypeScript on Node", proficiency: "Production Level Experience", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
      { name: "Scala on Finagle", proficiency: "Production Level Experience", url: "https://www.scala-lang.org" },
      { name: "Ruby on Rails", proficiency: "Exposure through Academia", url: "https://rubyonrails.org" },
      { name: "Go on Gin", proficiency: "Exposure through Academia", url: "https://golang.org" },
      { name: "Rust on Rocket", proficiency: "Love to Learn if I find time", url: "https://www.rust-lang.org" }
    ]
  },
  {
    title: "Front End",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7l-2 3v1h8v-1l-2-3h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 12H3V4h18v10z"/>
      </svg>
    ),
    skills: [
      { name: "Frontend Development with React", proficiency: "Production Level Experience" },
      { name: "Frontend Development with Next.js", proficiency: "Production Level Experience" },
      { name: "Chrome Extension Development with Vite", proficiency: "Production Level Experience" },
      { name: "Mobile Development with React Native", proficiency: "Experimenting on my own" },
      { name: "Frontend Development with Vue.js", proficiency: "Experimenting on my own" },
    ]
  },
  {
    title: "Styling Libraries",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    skills: [
      { name: "Tailwind", proficiency: "Production Level Experience" },
      { name: "Material UI", proficiency: "Production Level Experience" },
      { name: "Daisy UI", proficiency: "Production Level Experience" },
    ]
  },
  {
    title: "3D Libraries",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ),
    skills: [
      { name: "Three.js", proficiency: "Production Level Experience" },
      { name: "React Three Fiber", proficiency: "Production Level Experience" },
      { name: "React Three Drei", proficiency: "Production Level Experience" },
    ]
  },
  {
    title: "Testing & QA Engineering",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
      </svg>
    ),
    skills: [
      { name: "Jest", proficiency: "Production Level Experience" },
      { name: "Cypress", proficiency: "Production Level Experience" },
      { name: "Playwright", proficiency: "Production Level Experience" },
      { name: "Selenium", proficiency: "Production Level Experience" },
      { name: "JUnit", proficiency: "Production Level Experience" },
      { name: "Mockito", proficiency: "Production Level Experience" },
      { name: "Jasmine", proficiency: "Production Level Experience" },
      { name: "React Testing Library", proficiency: "Production Level Experience" },
      {name: "pytest", proficiency: "Production Level Experience"}
      
    ]
  },
  {
    title: "Database & Data",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
    ),
    skills: [
      { name: "MySQL", proficiency: "Production Level Experience" },
      { name: "PostgreSQL", proficiency: "Production Level Experience" },
      { name: "SQLite", proficiency: "Production Level Experience" },
      { name: "MongoDB", proficiency: "Production Level Experience" },
      { name: "NoSQL", proficiency: "Production Level Experience" },
      { name: "ORM", proficiency: "Production Level Experience" },
      { name: "Data Modeling", proficiency: "Production Level Experience" },
      { name: "ETL", proficiency: "Production Level Experience" },
      { name: "Data Pipelines", proficiency: "Production Level Experience" },
      { name: "Machine Learning", proficiency: "Production Level Experience" },
      { name: "Data Science", proficiency: "Production Level Experience" }
    ]
  },
  {
    title: "DevOps & Tools",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
      </svg>
    ),
    skills: [
      { name: "Git", proficiency: "Production Level Experience" },
      { name: "GitHub", proficiency: "Production Level Experience" },
      { name: "Docker", proficiency: "Production Level Experience" },
      { name: "CI/CD", proficiency: "Production Level Experience" },
      { name: "Jest", proficiency: "Production Level Experience" },
      { name: "TravisCI", proficiency: "Production Level Experience" },
      { name: "Agile/Scrum", proficiency: "Production Level Experience" },
      { name: "Kanban", proficiency: "Production Level Experience" },
      { name: "MLOps", proficiency: "Production Level Experience" },
      { name: "Cloud Platforms", proficiency: "Production Level Experience" },
      { name: "Microservices", proficiency: "Production Level Experience" },
      { name: "API Design", proficiency: "Production Level Experience" }
    ]
  }
];

export default function TechnicalSkills() {
  const handleSkillClick = (skill: Skill) => {
    if (skill.url) {
      window.open(skill.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="py-14 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Technical Skills
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="rounded-lg p-6 border transition-colors"
              style={{ 
                backgroundColor: '#0c0c16',
                borderColor: '#000000',
                borderWidth: '1px'
              }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div style={{ color: '#7d7c9b' }}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="relative group"
                  >
                    <span
                      className={`px-3 py-1 text-sm rounded-full border transition-colors ${skill.url ? 'cursor-pointer hover:bg-opacity-80' : 'cursor-default'}`}
                      style={{
                        backgroundColor: '#34334f',
                        borderColor: '#000000',
                        borderWidth: '1px'
                      }}
                      onClick={() => handleSkillClick(skill)}
                    >
                      {skill.name}
                    </span>
                    
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                      {skill.proficiency}
                      {/* Arrow */}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 