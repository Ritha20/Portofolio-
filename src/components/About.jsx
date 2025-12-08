import { Upload, Award, Briefcase, GraduationCap, ExternalLink, FileText } from 'lucide-react';
import { useState } from 'react';

export default function About() {
  const [resume, setResume] = useState(null);
  const [selectedCert, setSelectedCert] = useState(null);

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

  // Updated certifications array with links/images
  const certifications = [
    {
      name: "Frontend Development",
      issuer: "Igire Rwanda Organization",
      date: "2023",
      link: "https://example.com/frontend-certificate.pdf",
      type: "pdf", 
      preview: "https://example.com/cert-thumbnail.jpg" 
    },
    {
      name: "Web Fundamentals",
      issuer: "Udacity",
      date: "2023",
      link: "https://www.udacity.com/certificate/e/96a26430-75e4-11ef-a036-2bb46d250522",
      type: "credly",
    },
    {
      name: "Hackathon Winner",
      issuer: "Nation Institute Statistics of Rwanda",
      date: "2023",
      link: "",
      type: "image",
    },
    {
      name: "Virtual Assistant",
      issuer: "ALX Rwanda",
      date: "2023",
      link: "https://savanna.alxafrica.com/certificates/yGCXsrhHLe",
      type: "https://imgur.com/a/oM15jOU",
    },
  ];

  // Modal for certificate preview
  const CertificateModal = ({ cert, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-bold text-white">{cert.name}</h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white text-2xl"
            >
              ×
            </button>
          </div>
          <p className="text-gray-300 mb-4">Issued by: {cert.issuer}</p>
          
          {cert.type === 'image' || cert.preview ? (
            <div className="mb-4">
              <img 
                src={cert.preview || cert.link} 
                alt={`${cert.name} Certificate`}
                className="w-full h-auto rounded-lg border border-gray-700"
              />
            </div>
          ) : cert.type === 'pdf' ? (
            <div className="bg-gray-900 p-6 rounded-lg mb-4">
              <FileText className="text-sage-400 mx-auto mb-4" size={64} />
              <p className="text-gray-300 text-center mb-4">
                PDF Certificate - Click below to view/download
              </p>
            </div>
          ) : (
            <div className="bg-gray-900 p-6 rounded-lg mb-4">
              <Award className="text-sage-400 mx-auto mb-4" size={64} />
              <p className="text-gray-300 text-center">
                Digital Credential
              </p>
            </div>
          )}
          
          <div className="flex gap-4">
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-sage-500 hover:bg-sage-600 text-white py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
            >
              <ExternalLink size={20} />
              View Certificate
            </a>
            <button
              onClick={onClose}
              className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-3 px-4 rounded-lg transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );

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

            {/* Updated Certifications Section */}
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 mb-6">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Award className="text-sage-400" size={20} />
                Certifications
              </h3>
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="group cursor-pointer"
                    onClick={() => setSelectedCert(cert)}
                  >
                    <div className="bg-gray-900 hover:bg-gray-850 p-4 rounded-lg border border-gray-700 hover:border-sage-500 transition-all duration-300">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="text-white font-medium">{cert.name}</h4>
                            <ExternalLink 
                              className="text-gray-500 group-hover:text-sage-400 transition-colors" 
                              size={16} 
                            />
                          </div>
                          <div className="flex items-center gap-4 text-sm">
                            <span className="text-gray-400">{cert.issuer}</span>
                            <span className="text-sage-400">{cert.date}</span>
                          </div>
                        </div>
                        <div className="ml-4">
                          {cert.type === 'pdf' ? (
                            <FileText className="text-sage-400" size={20} />
                          ) : cert.type === 'image' ? (
                            <Award className="text-sage-400" size={20} />
                          ) : (
                            <Award className="text-sage-400" size={20} />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Resume Upload Section */}
            {/* <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Upload className="text-sage-400" size={20} />
                Resume
              </h3>
              <div className="flex items-center gap-4">
                <label className="flex-1">
                  <input
                    type="file"
                    className="hidden"
                    accept=".pdf,.doc,.docx"
                    onChange={handleResumeUpload}
                  />
                  <div className="bg-sage-500 hover:bg-sage-600 text-white py-3 px-4 rounded-lg cursor-pointer text-center transition-colors">
                    Upload Resume
                  </div>
                </label>
                {resume && (
                  <div className="flex-1">
                    <p className="text-gray-300 truncate">{resume}</p>
                  </div>
                )}
              </div>
            </div> */}
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

      {/* Certificate Modal */}
      {selectedCert && (
        <CertificateModal 
          cert={selectedCert} 
          onClose={() => setSelectedCert(null)} 
        />
      )}
    </section>
  );
}