import { Mail, Linkedin, Github } from 'lucide-react';

function ContactFooter({ profile }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm text-center">
      <p className="text-slate-700 font-semibold text-base">Let's connect.</p>
      <p className="text-sm text-slate-400 mt-1">Open to work opportunities, collaborations, or just a good conversation.</p>
      <div className="mt-4 flex justify-center flex-wrap gap-3">
        <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 text-accent hover:bg-indigo-100 text-sm font-medium transition border border-indigo-100">
          <Mail size={15} /> {profile.email}
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 text-sm font-medium transition">
          <Linkedin size={15} /> LinkedIn
        </a>
        <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 text-sm font-medium transition">
          <Github size={15} /> GitHub
        </a>
      </div>
    </div>
  );
}

export default ContactFooter;
