import { Code, Database, Palette, BarChart } from 'lucide-react';
import { useState } from 'react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = {
    frontend: {
      icon: <Code size={24} />,
      title: "Frontend Development",
      skills: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "JavaScript", level: 90 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Figma", level: 80 }
      ]
    },
    backend: {
      icon: <Database size={24} />,
      title: "Backend & Database",
      skills: [
        { name: "Supabase", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "Firebase", level: 75 }
      ]
    },
    data: {
      icon: <BarChart size={24} />,
      title: "Data Analysis",
      skills: [
        { name: "CSPro", level: 85 },
        { name: "Python", level: 90 },
        { name: "Data Management", level: 90 },
        { name: "R", level: 85 }
      ]
    },
    design: {
      icon: <Palette size={24} />,
      title: "Design & Others",
      skills: [
        { name: "UI/UX Design", level: 80 },
        { name: "Virtual Assistant", level: 85 },
        { name: "Dashboard Design", level: 90 }
      ]
    }
  };

  return (
    <section id="skills" className="min-h-screen py-20 px-4 bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Skills & <span className="text-sage-400">Expertise</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(skillCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                activeCategory === key
                  ? 'bg-sage-500 text-white shadow-lg shadow-sage-500/30'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700 border border-gray-700'
              }`}
            >
              {category.icon}
              <span className="hidden sm:inline">{category.title}</span>
            </button>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 shadow-2xl">
            <h3 className="text-2xl font-semibold text-white mb-8 text-center">
              {skillCategories[activeCategory].title}
            </h3>
            <div className="space-y-6">
              {skillCategories[activeCategory].skills.map((skill, index) => (
                <div
                  key={index}
                  className="group"
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-sage-400 font-semibold">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-gray-900 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-sage-500 to-sage-400 rounded-full transition-all duration-1000 ease-out transform origin-left"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
