import React from 'react';

interface NavigationProps {
  isOpen: boolean;
}

export const Navigation: React.FC<NavigationProps> = ({ isOpen }) => {
  const links = [
    { href: '#about', text: 'About' },
    { href: '#feasibility', text: 'Feasibility' },
    { href: '#impact', text: 'Impact' },
    { href: '#team', text: 'Team' },
    { href: '#contact', text: 'Contact' },
  ];

  return (
    <ul 
      className={`
        lg:flex lg:space-x-8 
        ${isOpen ? 'absolute top-full left-0 right-0 bg-white shadow-md p-4' : 'hidden'}
        lg:relative lg:bg-transparent lg:shadow-none lg:p-0
      `}
    >
      {links.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            className="block py-2 lg:py-0 text-gray-700 hover:text-blue-600 transition-colors"
          >
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  );
};