import { Briefcase, MapPin, Mail, Linkedin, Github } from 'lucide-react';
import ResumeActions from './ResumeActions';

function ProfileHeader({ profile }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6 shadow-sm">
      <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent to-blue-400 flex items-center justify-center text-white text-2xl font-bold shrink-0">
          {profile.name.split(' ').map(n => n[0]).join('')}
        </div>
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-gray-900">{profile.name}</h1>
          <p className="text-gray-600 mt-1">{profile.headline}</p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mt-3">
            <span className="flex items-center gap-1"><Briefcase size={14} /> {profile.stats.role}</span>
            <span className="flex items-center gap-1"><MapPin size={14} /> {profile.location}</span>
          </div>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 text-sm font-medium transition">
          <Mail size={16} /> Email
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 text-sm font-medium transition">
          <Linkedin size={16} /> LinkedIn
        </a>
        <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 text-sm font-medium transition">
          <Github size={16} /> GitHub
        </a>
        <ResumeActions className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-white hover:bg-blue-700 text-sm font-medium transition" menuAlign="right" />
      </div>
    </div>
  );
}

export default ProfileHeader;
