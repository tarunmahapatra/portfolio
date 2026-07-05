import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Hash } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { posts } from '../data/posts';
import { getMarkdown } from '../lib/markdownLoader';

function PostDetail() {
  const { id } = useParams();
  const post = posts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
        <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm text-center max-w-md">
          <h1 className="text-xl font-bold text-gray-900 mb-2">Post not found</h1>
          <p className="text-gray-600 mb-4">The post you’re looking for doesn’t exist.</p>
          <Link to="/" className="inline-flex items-center gap-2 text-accent hover:underline font-medium">
            <ArrowLeft size={16} /> Back to home
          </Link>
        </div>
      </div>
    );
  }

  const content = post.type === 'markdown' ? getMarkdown(post.id) : post.body.join('\n\n');

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-accent mb-5"
        >
          <ArrowLeft size={16} /> Back to feed
        </Link>

        <article className="bg-white rounded-xl border border-gray-200 p-6 md:p-8 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-blue-50 text-accent text-xs font-semibold">
              {post.category}
            </span>
            <span className="inline-flex items-center gap-1 text-xs text-gray-500">
              <Calendar size={12} />
              {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
            </span>
          </div>

          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{post.title}</h1>
          {post.subtitle && <p className="text-sm text-gray-500 mb-4">{post.subtitle}</p>}

          <div className="prose prose-base max-w-none text-gray-700 mt-4">
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>

          {post.tags && post.tags.length > 0 && (
            <div className="mt-6 pt-6 border-t border-gray-100 flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <span key={tag} className="inline-flex items-center gap-1 text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-md">
                  <Hash size={10} /> {tag}
                </span>
              ))}
            </div>
          )}
        </article>
      </div>
    </div>
  );
}

export default PostDetail;
