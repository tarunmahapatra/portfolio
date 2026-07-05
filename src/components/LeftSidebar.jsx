import { MapPin, Briefcase, GraduationCap, Calendar, FileText, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { profile } from '../data/profile';
import { skills } from '../data/skills';

function LeftSidebar() {
  return (
    <aside className="space-y-5 lg:sticky lg:top-24">
      <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-violet-400 flex items-center justify-center text-white text-xl font-bold mb-3">
          {profile.name.split(' ').map(n => n[0]).join('')}
        </div>
        <h2 className="text-lg font-bold text-slate-900">{profile.name}</h2>
        <p className="text-sm text-slate-600 mt-1">{profile.headline}</p>
        <div className="mt-3 text-sm text-slate-500 space-y-1">
          <p className="flex items-center gap-1.5"><Briefcase size={14} /> {profile.stats.role}</p>
          <p className="flex items-center gap-1.5"><MapPin size={14} /> {profile.location}</p>
        </div>
        <div className="mt-4 flex flex-col gap-2">
          <Link to="/me" className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 text-sm font-medium transition">
            <User size={16} /> More About Me
          </Link>
          <a href={profile.resume} download className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-accent text-white hover:bg-indigo-600 text-sm font-medium transition">
            <FileText size={16} /> Download Resume
          </a>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
        <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2"><Briefcase size={16} /> Skills</h3>
        <div className="flex flex-wrap gap-2">
          {skills.top.slice(0, 10).map(skill => (
            <span key={skill} className="px-2.5 py-1 rounded-full bg-indigo-50 text-accent text-xs font-medium border border-indigo-100">
              {skill}
            </span>
          ))}
          {skills.other.slice(0, 6).map(skill => (
            <span key={skill} className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 text-xs border border-slate-200">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
        <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2"><GraduationCap size={16} /> Education</h3>
        <p className="text-sm font-medium text-slate-800">B.Tech, Computer Science</p>
        <p className="text-sm text-slate-500">KIIT University</p>
        <p className="text-xs text-slate-400 mt-1 flex items-center gap-1"><Calendar size={12} /> 2019 — 2023 · CGPA 8.97</p>
      </div>
    </aside>
  );
}

export default LeftSidebar;
