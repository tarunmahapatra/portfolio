import { Mail, Linkedin, Github, Star, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import { profile } from '../data/profile';
import { posts } from '../data/posts';

const featuredPosts = posts.filter(post => post.type === 'markdown');
const experiencePosts = posts
  .filter(post => post.type === 'experience')
  .sort((a, b) => new Date(b.date) - new Date(a.date));

function RightSidebar() {
  return (
    <aside className="space-y-5 lg:sticky lg:top-24">
      <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
        <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2"><Mail size={16} /> Contact</h3>
        <div className="space-y-2 text-sm">
          <a href={`mailto:${profile.email}`} className="block text-slate-600 hover:text-accent truncate transition">{profile.email}</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-slate-600 hover:text-accent transition"><Linkedin size={16} /> LinkedIn</a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-slate-600 hover:text-accent transition"><Github size={16} /> GitHub</a>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
        <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
          <Briefcase size={16} />
          <Link to="/me" className="hover:text-accent transition">Experience</Link>
        </h3>
        <div className="relative pl-4 border-l-2 border-slate-200 space-y-4">
          {experiencePosts.map(post => (
            <div key={post.id} className="relative">
              <span className="absolute -left-[21px] top-1 w-3 h-3 rounded-full bg-accent border-2 border-white" />
              <p className="text-xs text-slate-400 mb-0.5">{post.subtitle}</p>
              <p className="text-sm font-medium text-slate-900">{post.title}</p>
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-1 mt-1.5">
                  {post.tags.map(tag => (
                    <span key={tag} className="text-xs text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
        <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2"><Star size={16} /> Featured</h3>
        <ul className="space-y-2 text-sm text-slate-600">
          {featuredPosts.map(post => (
            <li key={post.id}>
              <Link to={`/post/${post.id}`} className="hover:text-accent transition">
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default RightSidebar;
