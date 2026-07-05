import ReactMarkdown from 'react-markdown';
import { getMarkdown } from '../lib/markdownLoader';

function MarkdownPost({ post }) {
  const content = getMarkdown(post.id);

  return (
    <div className="prose prose-sm max-w-none text-gray-700">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}

export default MarkdownPost;
