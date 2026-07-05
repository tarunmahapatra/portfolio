import { Heart, Zap, Briefcase, Hash, Mail, Linkedin, Github, FileText, MapPin, Building2 } from 'lucide-react';
import { profile } from '../data/profile';
import { posts } from '../data/posts';
import { skills } from '../data/skills';
import ContactFooter from '../components/ContactFooter';

const experiencePosts = posts
  .filter(post => post.type === 'experience')
  .sort((a, b) => new Date(b.date) - new Date(a.date));

function Me() {
  return (
    <div className="max-w-5xl mx-auto w-full px-4 py-8">
      <div className="grid grid-cols-12 gap-4 auto-rows-min">

        {/* 1 — Hero (full width) */}
        <div className="col-span-12 bg-gradient-to-br from-indigo-50 via-white to-white rounded-2xl border border-slate-200 p-5 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent to-violet-400 flex items-center justify-center text-white text-2xl font-bold shrink-0 shadow-md">
              {profile.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">{profile.name}</h1>
              <p className="text-sm sm:text-base text-slate-600 mt-1">{profile.headline}</p>
              <p className="text-xs sm:text-sm text-slate-400 mt-1.5 max-w-xl">{profile.tagline}</p>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 text-sm font-medium transition">
              <Mail size={15} /> Email
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 text-sm font-medium transition">
              <Linkedin size={15} /> LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 text-sm font-medium transition">
              <Github size={15} /> GitHub
            </a>
            <a href={profile.resume} download className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-white hover:bg-indigo-600 text-sm font-medium transition">
              <FileText size={15} /> Resume
            </a>
          </div>
        </div>

        {/* 2 — Stat chips (stack on mobile, 3-col on md+) */}
        <div className="col-span-12 sm:col-span-6 md:col-span-4 flex items-center gap-3 px-5 py-4 bg-white rounded-xl border border-slate-200 shadow-sm">
          <Briefcase size={18} className="text-accent shrink-0" />
          <div className="min-w-0">
            <p className="text-xs text-slate-400 leading-none">Experience</p>
            <p className="text-sm font-semibold text-slate-800 mt-0.5 truncate">{profile.stats.experience}</p>
          </div>
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-4 flex items-center gap-3 px-5 py-4 bg-white rounded-xl border border-slate-200 shadow-sm">
          <Building2 size={18} className="text-accent shrink-0" />
          <div className="min-w-0">
            <p className="text-xs text-slate-400 leading-none">Current Company</p>
            <p className="text-sm font-semibold text-slate-800 mt-0.5 truncate">{profile.stats.company}</p>
          </div>
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-4 flex items-center gap-3 px-5 py-4 bg-white rounded-xl border border-slate-200 shadow-sm">
          <MapPin size={18} className="text-accent shrink-0" />
          <div className="min-w-0">
            <p className="text-xs text-slate-400 leading-none">Based in</p>
            <p className="text-sm font-semibold text-slate-800 mt-0.5 truncate">{profile.location}</p>
          </div>
        </div>

        {/* 3 — Who I am (col-span-5) */}
        <div className="col-span-12 md:col-span-5 bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
          <h2 className="text-base font-bold text-slate-900 mb-3">Who I am</h2>
          <div className="text-sm text-slate-600 leading-relaxed space-y-3">
            <p>
              I'm an AI Engineer at Dell Technologies, working on the backend systems that power GenAI-driven enterprise support.
            </p>
            <p>
              I started in full-stack development and gradually moved into AI — now focused on RAG pipelines, knowledge graphs, and orchestration systems that work reliably at production scale.
            </p>
          </div>
        </div>

        {/* 4 — Skills (col-span-7) */}
        <div className="col-span-12 md:col-span-7 bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
          <h2 className="text-base font-bold text-slate-900 mb-3">Core Stack</h2>
          <div className="flex flex-wrap gap-2">
            {skills.top.slice(0, 8).map(skill => (
              <span key={skill} className="px-2.5 py-1 rounded-full bg-indigo-50 text-accent text-xs font-medium border border-indigo-100">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* 5 — Experience (col-span-8) */}
        <div className="col-span-12 md:col-span-8 bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
          <h2 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
            <Briefcase size={17} className="text-accent" /> Experience
          </h2>
          <div className="space-y-4">
            {experiencePosts.map((post, idx) => (
              <div key={post.id} className="rounded-xl border border-slate-200 border-l-4 border-l-accent p-4">
                <div className="flex items-center gap-2 mb-1">
                  <p className="text-xs text-slate-400">{post.subtitle}</p>
                  {idx === 0 && (
                    <span className="text-xs font-medium bg-green-50 text-green-700 px-2 py-0.5 rounded-full border border-green-100">
                      ● Current
                    </span>
                  )}
                </div>
                <h3 className="text-sm font-semibold text-slate-900 mb-2">{post.title}</h3>
                <ul className="space-y-1 text-xs text-slate-600 list-disc pl-4 mb-2">
                  {post.body.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-2">
                    {post.tags.map(tag => (
                      <span key={tag} className="inline-flex items-center gap-1 text-xs text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200">
                        <Hash size={9} /> {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 6 — Hobbies + Activities stacked (col-span-4) */}
        <div className="col-span-12 md:col-span-4 flex flex-col gap-4">
          {/* Hobbies */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm flex-1">
            <Heart size={26} className="text-accent mb-2" />
            <h2 className="text-base font-semibold text-slate-900 mb-3">Hobbies</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Outside of work, I spend most of my time playing football and cricket — both are a big part of how I unwind. I also swim regularly and go hiking when I get the chance. On quieter evenings, you'll usually find me playing racing games.
            </p>
          </div>

          {/* Activities */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm flex-1">
            <Zap size={26} className="text-accent mb-2" />
            <h2 className="text-base font-semibold text-slate-900 mb-3">Activities</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              I'm part of Dell's Football Club and play in local tournaments around Bangalore. I also try to attend hackathons when they're on — it's a good way to stay sharp and meet people working on interesting problems.
            </p>
          </div>
        </div>

        {/* Photo carousel placeholder — col-span-12 */}
        {/* <div className="col-span-12"> <PhotoCarousel /> </div> */}

        {/* 7 — Let's Connect CTA (full width) */}
        <div className="col-span-12">
          <ContactFooter profile={profile} />
        </div>

      </div>
    </div>
  );
}

export default Me;
