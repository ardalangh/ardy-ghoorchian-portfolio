"use client";
import React from "react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Back End",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M3 3h18v18H3V3zm16 16V5H5v14h14zM7 7h10v2H7V7zm0 4h10v2H7v-2zm0 4h6v2H7v-2z"/>
      </svg>
    ),
    skills: ["Python on  Django, FastAPI, Flask", "Java on Spring Boot", "JavaScript & TypeScript on Node", "Ruby on Rails", "Scala on Finagle"]
  },
  {
    title: "Front End",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7l-2 3v1h8v-1l-2-3h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 12H3V4h18v10z"/>
      </svg>
    ),
    skills: ["React", "React Native", "Redux", "HTML/CSS", "Sass", "JavaScript", "ES6", "jQuery", "Bootstrap", "MaterialUI", "RESTful API", "GraphQL", "Webpack", "ThreeJS"]
  },
  {
    title: "Database & Data",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
    ),
    skills: ["MySQL", "PostgreSQL", "SQLite", "MongoDB", "NoSQL", "ORM", "Data Modeling", "ETL", "Data Pipelines", "Machine Learning", "Data Science"]
  },
  {
    title: "DevOps & Tools",
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
      </svg>
    ),
    skills: ["Git", "GitHub", "Docker", "CI/CD", "Jest", "TravisCI", "Agile/Scrum", "Kanban", "MLOps", "Cloud Platforms", "Microservices", "API Design"]
  }
];

export default function TechnicalSkills() {
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
                  <span
                    key={skillIndex}
                    className="px-3 py-1 text-sm rounded-full border transition-colors"
                    style={{
                      backgroundColor: '#34334f',
                      borderColor: '#000000',
                      borderWidth: '1px'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 