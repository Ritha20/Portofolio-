import { ExternalLink, Github, Award } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "Mental Health Dashboard",
      description: "Award-winning dashboard built for National Institute of Statistics Rwanda. Winner of NISR hackathon competition.",
      tags: ["React", "JavaScript"],
      featured: true,
      icon: <Award className="text-yellow-400" size={20} />,
      image: "dashboard.png", 
      githubLink: "https://github.com/yourusername/nisr-dashboard",
      liveLink: "https://hackfuturehealth.netlify.app/"
    },
    {
      title: "Freelance Dashboard",
      description: "Data management system developed during academic internship at Kairos Health Center.",
      tags: ["React js","HTML","Tailwind Css"],
      image: "Freelancer dashboard.png", 
      githubLink: "https://github.com/Ritha20/Freelancer-Dashboard",
      liveLink: "https://freelancer-dashboard-lwd6.vercel.app/"
    },
    {
      title: "A blog",
      description: "A simple blog built in Next Js with a simple interactivity",
      tags: ["Next js", "Tailwind CSS"],
      image: "Blog.png",
      githubLink: "https://github.com/Ritha20/Next-js",
      liveLink: "https://next-js-chi-mauve.vercel.app/"
    },
    {
      title: "Movie-website",
      description: "movie website with a good and Interactive features with herocorousel slide on movies",
      tags: ["React js"],
      image: "Movie-page.png",
      githubLink: "https://github.com/Ritha20/Movie-Explorer",
      liveLink: "https://movie-explorer-unbv.vercel.app/"
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
              {/* Image Section - Added at the top of the card */}
              <div className="h-48">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    // Fallback if image doesn't load
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `
                      <div class="w-full h-full bg-gradient-to-br from-gray-900 to-sage-900 flex items-center justify-center">
                        <div class="text-center p-4">
                          <div class="text-4xl mb-2">📊</div>
                          <div class="text-sage-400 font-bold">${project.title}</div>
                        </div>
                      </div>
                    `;
                  }}
                />
              </div>

              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-sage-400 transition-colors flex items-center gap-2">
                    {project.title}
                    {project.icon}
                  </h3>
                  <div className="flex gap-2">
                    <a 
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-900 rounded-lg hover:bg-sage-500 transition-all text-gray-400 hover:text-white"
                    >
                      <Github size={20} />
                    </a>
                    <a 
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-900 rounded-lg hover:bg-sage-500 transition-all text-gray-400 hover:text-white"
                    >
                      <ExternalLink size={20} />
                    </a>
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