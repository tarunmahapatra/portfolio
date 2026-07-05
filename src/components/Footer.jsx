import { Linkedin, Github, Mail } from 'lucide-react';
import { profile } from '../data/profile';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-8 border-t border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500">
          © {year} {profile.name}. Built with React, Vite & Tailwind.
        </p>
        <div className="flex items-center gap-4">
          <a href={`mailto:${profile.email}`} className="text-gray-500 hover:text-accent"><Mail size={18} /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-accent"><Linkedin size={18} /></a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-accent"><Github size={18} /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
