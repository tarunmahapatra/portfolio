import { Calendar, Hash } from 'lucide-react';
import { Link } from 'react-router-dom';

function PostCard({ post, children, to }) {
  const title = to ? (
    <Link to={to} className="hover:text-accent transition">
      {post.title}
    </Link>
  ) : (
    post.title
  );

  return (
    <article className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-blue-50 text-accent text-xs font-semibold">
          {post.category}
        </span>
        <span className="inline-flex items-center gap-1 text-xs text-gray-500">
          <Calendar size={12} />
          {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
        </span>
      </div>

      <h2 className="text-lg font-bold text-gray-900">{title}</h2>
      {post.subtitle && <p className="text-sm text-gray-500 mt-0.5">{post.subtitle}</p>}

      <div className="mt-3 text-gray-700 leading-relaxed">
        {children}
      </div>

      {post.tags && post.tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.map(tag => (
            <span key={tag} className="inline-flex items-center gap-1 text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-md">
              <Hash size={10} /> {tag}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}

export default PostCard;
