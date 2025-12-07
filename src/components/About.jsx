import { Upload, Award, Briefcase, GraduationCap } from 'lucide-react';
import { useState } from 'react';

export default function About() {
  const [resume, setResume] = useState(null);

  const handleResumeUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setResume(file.name);
    }
  };

  const experiences = [
    {
      icon: <GraduationCap className="text-sage-400" size={24} />,
      title: "Bachelor in Applied Statistics",
      subtitle: "Honor in Actuarial Science"
    },
    {
      icon: <Briefcase className="text-sage-400" size={24} />,
      title: "Professional Intern",
      subtitle: "NISR - Big Data Department"
    },
    {
      icon: <Briefcase className="text-sage-400" size={24} />,
      title: "Data Manager",
      subtitle: "Kairos Health Center"
    },
    {
      icon: <Award className="text-sage-400" size={24} />,
      title: "Hackathon Winner",
      subtitle: "NISR Dashboard Competition"
    }
  ];

  const certifications = [
    "Frontend Development - Igire Rwanda Organization",
    "Virtual Assistant - ALX Rwanda",
    "Web Fundamentals - Udacity"
  ];

  return (
    <section id="about" className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          About <span className="text-sage-400">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Applied Statistics graduate with a unique blend of data science expertise and frontend development skills.
              Currently contributing to Rwanda's digital transformation as a Professional Intern in NISR's Big Data Department.
            </p>

            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 mb-6">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Award className="text-sage-400" size={20} />
                Certifications
              </h3>
              <ul className="space-y-2">
                {certifications.map((cert, index) => (
                  <li key={index} className="text-gray-300 flex items-start gap-2">
                    <span className="text-sage-400 mt-1">•</span>
                    {cert}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border border-sage-500/30">
              <h3 className="text-lg font-semibold text-white mb-4">Upload Resume</h3>
              <label className="flex items-center justify-center gap-3 border-2 border-dashed border-gray-600 hover:border-sage-400 rounded-lg p-6 cursor-pointer transition-all duration-300 group">
                <Upload className="text-gray-400 group-hover:text-sage-400 transition-colors" size={24} />
                <span className="text-gray-400 group-hover:text-sage-400 transition-colors">
                  {resume || "Choose file"}
                </span>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleResumeUpload}
                  className="hidden"
                />
              </label>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">Experience & Education</h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-sage-500 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-gray-900 p-3 rounded-lg">
                      {exp.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">{exp.title}</h4>
                      <p className="text-gray-400">{exp.subtitle}</p>
                    </div>
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
