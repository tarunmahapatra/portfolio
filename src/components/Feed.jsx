import { useState } from 'react';
import { Search, X } from 'lucide-react';
import { posts } from '../data/posts';
import PostCard from './PostCard';
import MarkdownPost from './MarkdownPost';

const blogPosts = posts.filter(post => post.type === 'markdown');

function Feed() {
  const [query, setQuery] = useState('');

  const filtered = query.trim()
    ? blogPosts.filter(post => {
        const q = query.toLowerCase();
        return (
          post.title.toLowerCase().includes(q) ||
          (post.tags && post.tags.some(tag => tag.toLowerCase().includes(q)))
        );
      })
    : blogPosts;

  return (
    <div className="space-y-5">
      {/* Search bar */}
      <div className="relative">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search posts by title or tag…"
          className="w-full pl-9 pr-9 py-2.5 rounded-xl border border-slate-200 bg-white shadow-sm text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition"
        />
        {query && (
          <button
            onClick={() => setQuery('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
          >
            <X size={15} />
          </button>
        )}
      </div>

      {/* Blog posts */}
      {filtered.length === 0 ? (
        <div className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm text-center text-slate-500 text-sm">
          No posts match <span className="font-medium text-slate-700">"{query}"</span>
        </div>
      ) : (
        filtered.map(post => (
          <div key={post.id} id={post.id} className="scroll-mt-24">
            <PostCard post={post} to={`/post/${post.id}`}>
              <MarkdownPost post={post} />
            </PostCard>
          </div>
        ))
      )}
    </div>
  );
}

export default Feed;
