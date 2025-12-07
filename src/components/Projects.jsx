import { ExternalLink, Github, Award } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "NISR Dashboard",
      description: "Award-winning dashboard built for National Institute of Statistics Rwanda. Winner of NISR hackathon competition.",
      tags: ["React", "JavaScript", "Data Visualization"],
      featured: true,
      icon: <Award className="text-yellow-400" size={20} />
    },
    {
      title: "Healthcare Data Management",
      description: "Data management system developed during academic internship at Kairos Health Center.",
      tags: ["Data Analysis", "CSPro", "Statistics"]
    },
    {
      title: "Web Applications",
      description: "Modern, responsive web applications built with React, Next.js, and Tailwind CSS.",
      tags: ["React", "Next.js", "Tailwind CSS", "Supabase"]
    },
    {
      title: "Database Solutions",
      description: "Database design and implementation using PostgreSQL, Supabase, and Firebase.",
      tags: ["PostgreSQL", "Supabase", "Firebase"]
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Featured <span className="text-sage-400">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group bg-gray-800 rounded-xl overflow-hidden border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                project.featured
                  ? 'border-sage-500 shadow-lg shadow-sage-500/20'
                  : 'border-gray-700 hover:border-sage-500'
              }`}
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-sage-400 transition-colors flex items-center gap-2">
                    {project.title}
                    {project.icon}
                  </h3>
                  <div className="flex gap-2">
                    <button className="p-2 bg-gray-900 rounded-lg hover:bg-sage-500 transition-all text-gray-400 hover:text-white">
                      <Github size={20} />
                    </button>
                    <button className="p-2 bg-gray-900 rounded-lg hover:bg-sage-500 transition-all text-gray-400 hover:text-white">
                      <ExternalLink size={20} />
                    </button>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-900 text-sage-400 rounded-full text-sm border border-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="h-1 bg-gradient-to-r from-transparent via-sage-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
