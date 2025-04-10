import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export const TeamSection: React.FC = () => {
  const teamData = [
    {
      name: "Omkara Anjaneya Kumar",
      role: "Founder",
      image: "/Omkar.png",
      github: "https://github.com/Omkar825",
      linkedin: "https://www.linkedin.com/in/omkar-anjaneya-kumar/",
      email: "mailto:omkarratnala2565@gmail.com",
    },
    {
      name: "Pavan Siva Kumar",
      role: "Founder",
      image: "/Pavan.png",
      github: "https://github.com/Pavan8114",
      linkedin: "https://www.linkedin.com/in/somana-pavan-siva-kumar/",
      email: "mailto:pavansivakumar27@gmail.com",
    },
  ];

  return (
    <section className="py-12 px-4 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Meet Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {teamData.map((member, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg border border-gray-100 hover:-translate-y-1 transition-transform duration-300 text-center"
          >
            <div className="relative w-32 h-32 mx-auto mb-6">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full rounded-full object-cover"
              />
              <div className="absolute inset-0 rounded-full bg-black/5 group-hover:opacity-0 transition-opacity duration-300" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-700">{member.name}</h3>
            <p className="text-blue-500 mb-4 font-medium">{member.role}</p>
            <div className="flex justify-center space-x-4">
              <a
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-500 transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-500 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${member.email}`}
                className="text-gray-500 hover:text-blue-500 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
