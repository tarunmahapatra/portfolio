import { Mail, Linkedin, Github } from 'lucide-react';

function ContactFooter({ profile }) {
  return (
    <div className="mt-6 bg-white rounded-xl border border-gray-200 p-5 shadow-sm text-center">
      <p className="text-gray-700 font-medium">Let’s connect.</p>
      <div className="mt-3 flex justify-center flex-wrap gap-3">
        <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 text-accent hover:underline text-sm">
          <Mail size={16} /> {profile.email}
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-accent hover:underline text-sm">
          <Linkedin size={16} /> LinkedIn
        </a>
        <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-accent hover:underline text-sm">
          <Github size={16} /> GitHub
        </a>
      </div>
    </div>
  );
}

export default ContactFooter;
