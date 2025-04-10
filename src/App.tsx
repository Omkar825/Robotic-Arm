import React, { useState } from 'react';
import { Menu, Notebook as Robot, ChevronDown, Github, Linkedin, Mail, X } from 'lucide-react';
import { ContactForm } from './components/ContactForm';
import { TeamMember } from './components/TeamMember';
import { Section } from './components/Section';
import { FlowChart } from './components/FlowChart';
import { Navigation } from './components/Navigation';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const teamMembers = [
    {
      name: "Omkara Anjaneya Kumar",
      role: "Software Developer & Designing",
      image: "images/Omkar.png",
      github: "https://github.com/Omkar825",
      linkedin: "https://www.linkedin.com/in/omkar-anjaneya-kumar/",
      email: "mailto:omkarratnala2565@gmail.com",
    },
    {
      name: "Pavan Siva Kumar",
      role: "Hardware Developer & Designing",
      image: "images/Pavan.png",
      github: "https://github.com/Pavan8114",
      linkedin: "https://www.linkedin.com/in/somana-pavan-siva-kumar/",
      email: "mailto:pavansivakumar27@gmail.com",
    },
  ];

  const scrollToContent = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="relative group">
              <Robot className="h-8 w-8 text-blue-500 transform transition-transform group-hover:rotate-180 duration-700" />
            </div>
            <span className="text-xl font-bold text-gray-700">
              Dual-Mode Robotic Arm
            </span>
          </div>
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>

          <Navigation isOpen={isMenuOpen} />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(1.1)' }}
          >
            <source src="https://player.vimeo.com/external/537905275.hd.mp4?s=9e5ed11c14431c21581f91c47b70e40b89c20ac3&profile_id=175" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-white/70" />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 animate-fade-in">
            Dual-Mode Robotic Arm
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12 animate-slide-up">
            Combining manual precision with autonomous intelligence
          </p>
          <button
            onClick={scrollToContent}
            className="group relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-blue-500 bg-white border-2 border-blue-500 rounded-lg hover:bg-blue-50 transition-colors animate-bounce-slow"
          >
            <ChevronDown className="h-6 w-6" />
            <span className="ml-2">Explore</span>
          </button>
        </div>
      </section>

      <Section title="About the Project" id="about">
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600">
            Our Dual-Mode Robotic Arm represents a breakthrough in robotic automation,
            offering unprecedented flexibility through two distinct operational modes:
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="bg-white p-8 rounded-lg border border-gray-100">
              <h3 className="text-2xl font-semibold mb-4 text-gray-700">Mimic Mode</h3>
              <p className="text-gray-600">
                Enables precise manual control through a smaller sensor-equipped arm,
                perfect for tasks requiring human expertise and intuition.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg border border-gray-100">
              <h3 className="text-2xl font-semibold mb-4 text-gray-700">Automatic Mode</h3>
              <p className="text-gray-600">
                Utilizes YOLOv5 for autonomous object detection and manipulation,
                ideal for repetitive tasks and automated operations.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <FlowChart />

      <Section title="Project Feasibility" id="feasibility" className="bg-blue-50">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: 'Cost-Effective',
              description: 'Built using readily available, affordable components'
            },
            {
              title: 'Versatile Design',
              description: 'Dual-mode operation with minimal setup requirements'
            },
            {
              title: 'Easy Integration',
              description: 'Compatible with existing industrial infrastructure'
            },
            {
              title: 'Scalable Solution',
              description: 'Supports additional sensors and algorithm upgrades'
            }
          ].map((item, index) => (
            <div key={index} className="p-8 bg-white rounded-lg border border-gray-100">
              <h3 className="text-xl font-semibold mb-3 text-gray-700">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Impact & Benefits" id="impact">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Enhanced Efficiency',
              description: 'Reduces human labor in repetitive tasks while maintaining precision'
            },
            {
              title: 'Wide Application',
              description: 'Suitable for healthcare, logistics, and manufacturing sectors'
            },
            {
              title: 'Hybrid Operation',
              description: 'Combines human expertise with autonomous capabilities'
            }
          ].map((benefit, index) => (
            <div key={index} className="bg-white p-8 rounded-lg border border-gray-100 hover:-translate-y-1 transition-transform duration-300">
              <h3 className="text-xl font-semibold mb-4 text-gray-700">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Meet the Team" id="team" className="bg-blue-50">
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </div>
      </Section>

      <Section title="Contact Us" id="contact">
        <ContactForm />
      </Section>

      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">About</h3>
              <p className="text-gray-300">
                Innovating the future of robotics through intelligent automation and human-machine collaboration.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a></li>
                <li><a href="#team" className="text-gray-300 hover:text-white transition-colors">Team</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Github className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="mailto:omkarratnala2565@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
            <p>&copy; {new Date().getFullYear()} Dual-Mode Robotic Arm Project. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
