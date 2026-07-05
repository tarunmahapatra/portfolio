import { User, Heart, Music, Trophy, Briefcase, Hash, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { profile } from '../data/profile';
import { posts } from '../data/posts';

const experiencePosts = posts
  .filter(post => post.type === 'experience')
  .sort((a, b) => new Date(b.date) - new Date(a.date));

function SectionCard({ icon, title, children }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
      <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
        {icon} {title}
      </h2>
      <div className="text-gray-700 leading-relaxed space-y-2">
        {children}
      </div>
    </div>
  );
}

function Me() {
  return (
    <div className="max-w-3xl mx-auto w-full px-4 py-6">
      <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-accent mb-5">
        <ArrowLeft size={16} /> Back to home
      </Link>

      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">About Me</h1>
        <p className="text-gray-600 mt-1">{profile.headline}</p>
      </div>

      <div className="space-y-5">
        <SectionCard icon={<User size={20} className="text-accent" />} title="Who I am">
          <p>
            I'm an AI Engineer at Dell Technologies, building backend systems that make enterprise support workflows faster, more reliable, and more scalable.
          </p>
          <p>
            Over the past few years, I've moved from full-stack product development to designing AI orchestration platforms that use Retrieval-Augmented Generation (RAG), Neo4j Knowledge Graphs, and Agentic AI to streamline high-volume workflows.
          </p>
          <p>
            My core stack includes Python, Neo4j, vector databases, prompt engineering, and microservices. I also work with MongoDB and Supabase.
          </p>
        </SectionCard>

        {/* Experience Timeline */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <h2 className="text-lg font-bold text-gray-900 mb-5 flex items-center gap-2">
            <Briefcase size={20} className="text-accent" /> Experience
          </h2>
          <div className="relative pl-6 border-l-2 border-gray-200 space-y-8">
            {experiencePosts.map((post, idx) => (
              <div key={post.id} className="relative">
                {/* Timeline dot */}
                <span className="absolute -left-[29px] top-1 w-3.5 h-3.5 rounded-full bg-accent border-2 border-white shadow-sm" />

                <p className="text-xs text-gray-400 mb-0.5">{post.subtitle}</p>
                <h3 className="text-base font-semibold text-gray-900 mb-2">{post.title}</h3>

                <ul className="space-y-1.5 text-sm text-gray-700 list-disc pl-4 mb-3">
                  {post.body.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>

                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {post.tags.map(tag => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 text-xs text-gray-600 bg-gray-100 px-2 py-0.5 rounded-md border border-gray-200"
                      >
                        <Hash size={9} /> {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <SectionCard icon={<Heart size={20} className="text-accent" />} title="Hobbies">
          <p>
            I enjoy exploring new AI tools, reading about system design, and experimenting with side projects that combine backend engineering with clean UI.
          </p>
          <p>
            Outside of tech, I like staying active, discovering new music, and learning how things work under the hood.
          </p>
        </SectionCard>

        <SectionCard icon={<Music size={20} className="text-accent" />} title="Activities">
          <p>
            I regularly attend tech meetups and internal knowledge-sharing sessions at Dell. I also enjoy mentoring interns and helping teammates debug complex backend issues.
          </p>
          <p>
            On weekends, I usually spend time on personal coding projects, reading, or catching up on the latest developments in AI and LLMs.
          </p>
        </SectionCard>

        <SectionCard icon={<Trophy size={20} className="text-accent" />} title="Co-curriculars">
          <p>
            During college, I actively participated in coding clubs and hackathons, which helped me build a strong foundation in software engineering and teamwork.
          </p>
          <p>
            I also organized internal networking events and collaborated with cross-functional teams during my internships at Dell.
          </p>
        </SectionCard>
      </div>
    </div>
  );
}

export default Me;
