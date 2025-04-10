import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  email: string;
  github: string;
  linkedin: string;
  image: string;
}

export const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  role,
  email,
  github,
  linkedin,
  image,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-100 hover:-translate-y-1 transition-transform duration-300 text-center">
      <div className="relative w-32 h-32 mx-auto mb-6">
        <img
          src={image}
          alt={name}
          className="w-full h-full rounded-full object-cover"
        />
        <div className="absolute inset-0 rounded-full bg-black/5 group-hover:opacity-0 transition-opacity duration-300" />
      </div>
      
      <h3 className="text-xl font-semibold mb-2 text-gray-700">{name}</h3>
      <p className="text-blue-500 mb-4 font-medium">{role}</p>
      
      <div className="flex justify-center space-x-4">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-blue-500 transition-colors"
        >
          <Github className="h-5 w-5" />
        </a>
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-blue-500 transition-colors"
        >
          <Linkedin className="h-5 w-5" />
        </a>
        <a
          href={`mailto:${email}`}
          className="text-gray-500 hover:text-blue-500 transition-colors"
        >
          <Mail className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
};
