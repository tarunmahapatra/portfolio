import { Home, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { profile } from '../data/profile';
import ResumeActions from './ResumeActions';

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-accent text-white flex items-center justify-center font-bold text-sm">
            TM
          </div>
          <Link to="/" className="font-bold text-slate-900 hover:text-accent transition">{profile.name}</Link>
        </div>
        <div className="hidden sm:flex items-center gap-1 text-sm font-medium text-slate-600">
          <Link to="/" className="px-3 py-2 rounded-lg hover:bg-slate-100 flex items-center gap-1.5"><Home size={16} /> Home</Link>
          <Link to="/me" className="px-3 py-2 rounded-lg hover:bg-slate-100 flex items-center gap-1.5"><User size={16} /> Me</Link>
          <ResumeActions className="px-3 py-2 rounded-lg bg-accent text-white hover:bg-indigo-600 font-medium" menuAlign="right" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
