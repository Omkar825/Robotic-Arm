import React from 'react';

export const FlowChart: React.FC = () => {
  return (
    <section id="flowchart" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Working Flow of the Robotic Arm
        </h2>
        
        <div className="relative group">
          <img
            src="/flow chart.jpeg"
            alt="Robotic Arm Flow Chart"
            className="w-full mx-auto rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity rounded-lg" />
        </div>
      </div>
    </section>
  );
};
