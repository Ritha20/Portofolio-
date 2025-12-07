import { Upload, Github, Linkedin, Mail } from 'lucide-react';
import { useState } from 'react';

export default function Hero() {
  const [photo, setPhoto] = useState(null);

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result);
      };
      reader.readAsDataURL(file);
    }
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
            <div className="flex gap-4 justify-center md:justify-start">
              <a href="#contact" className="bg-sage-500 hover:bg-sage-600 text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get in Touch
              </a>
              <a href="#projects" className="border border-sage-500 text-sage-400 hover:bg-sage-500/10 px-8 py-3 rounded-lg transition-all duration-300">
                View Work
              </a>
            </div>
            <div className="flex gap-6 mt-8 justify-center md:justify-start">
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-sage-400 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/irakoze-ritha/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-sage-400 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" className="text-gray-400 hover:text-sage-400 transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="flex-shrink-0">
            <div className="relative group">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-sage-500 shadow-2xl shadow-sage-500/20">
                {photo ? (
                  <img src={photo} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                    <Upload size={48} className="text-gray-600" />
                  </div>
                )}
              </div>
              <label className="absolute bottom-4 right-4 bg-sage-500 hover:bg-sage-600 text-white p-3 rounded-full cursor-pointer transition-all duration-300 transform hover:scale-110 shadow-lg">
                <Upload size={20} />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoUpload}
                  className="hidden"
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
