import { Github, Linkedin, Mail, Download } from 'lucide-react';

export default function Hero() {
  const handleDownloadCV = () => {
    // This would be the path to your actual CV file in your project
    const link = document.createElement('a');
    link.href = '/path/to/your-cv.pdf'; // Update this path to your actual CV file
    link.download = 'Ritha-Theonestine-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Irakoze Ritha<br />
              <span className="text-sage-400">Theonestine</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-400 mb-6">
              Data Analyst & Frontend Developer
            </p>
            <p className="text-gray-300 mb-8 max-w-2xl">
              Applied Statistics graduate with expertise in data analysis and modern web development.
              Transforming data into insights and creating elegant digital experiences.
            </p>
            
            {/* Buttons section */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-6">
              <a href="#contact" className="bg-sage-500 hover:bg-sage-600 text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get in Touch
              </a>
              <a href="#projects" className="border border-sage-500 text-sage-400 hover:bg-sage-500/10 px-8 py-3 rounded-lg transition-all duration-300">
                View Work
              </a>
              <button
                onClick={handleDownloadCV}
                className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-lg transition-all duration-300"
              >
                <Download size={20} />
                Download CV
              </button>
            </div>

            <div className="flex gap-6 mt-8 justify-center md:justify-start">
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-sage-400 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/irakoze-ritha/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-sage-400 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:your.email@example.com" className="text-gray-400 hover:text-sage-400 transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="flex-shrink-0">
            <div className="relative group">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-sage-500 shadow-2xl shadow-sage-500/20">
                {/* Replace with your actual image path */}
                <img 
                  src="IMG_1454.jpg" 
                  alt="Irakoze Ritha Theonestine" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    // Fallback styling if image doesn't load
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `
                      <div class="w-full h-full bg-gradient-to-br from-sage-400 to-sage-600 flex items-center justify-center text-white text-4xl font-bold">
                        RT
                      </div>
                    `;
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}