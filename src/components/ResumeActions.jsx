import { useState, useEffect, useRef } from 'react';
import { FileText, ChevronDown, Copy, Download, Check } from 'lucide-react';

const resumeUrl = import.meta.env.BASE_URL + 'resume.md';
const resumePdfUrl = import.meta.env.BASE_URL + 'resume.pdf';

function ResumeActions({ className = '', menuAlign = 'right' }) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [resumeText, setResumeText] = useState('');
  const dropdownRef = useRef(null);

  useEffect(() => {
    fetch(resumeUrl)
      .then(res => {
        if (!res.ok) throw new Error('Failed to load resume');
        return res.text();
      })
      .then(setResumeText)
      .catch(err => console.error('Failed to load resume:', err));
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCopy = async (text, label) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(label);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Copy failed:', err);
    }
    setOpen(false);
  };

  const copyForLLM = () => handleCopy(`Here is my resume:\n\n${resumeText}`, 'LLM');
  const copyAsText = () => handleCopy(resumeText, 'text');

  const downloadMarkdown = () => {
    const blob = new Blob([resumeText], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'tarun-mahapatra-resume.md';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    setOpen(false);
  };

  const downloadPDF = () => {
    const a = document.createElement('a');
    a.href = resumePdfUrl;
    a.download = 'tarun-mahapatra-resume.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setOpen(false);
  };

  const menuPosition = menuAlign === 'left' ? 'left-0' : 'right-0';

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`inline-flex items-center gap-2 ${className}`}
      >
        <FileText size={16} />
        <span>Resume</span>
        <ChevronDown
          size={16}
          className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <div
          className={`absolute ${menuPosition} top-full mt-2 w-60 rounded-xl bg-white border border-slate-200 shadow-lg z-50 py-1 overflow-hidden`}
        >
          <button
            type="button"
            onClick={copyForLLM}
            className="w-full text-left px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 flex items-center gap-3 transition"
          >
            <Copy size={16} className="text-slate-400" />
            <span className="flex-1">Copy for LLM</span>
            {copied === 'LLM' && <Check size={16} className="text-green-600" />}
          </button>
          <button
            type="button"
            onClick={copyAsText}
            className="w-full text-left px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 flex items-center gap-3 transition"
          >
            <Copy size={16} className="text-slate-400" />
            <span className="flex-1">Copy as text</span>
            {copied === 'text' && <Check size={16} className="text-green-600" />}
          </button>
          <button
            type="button"
            onClick={downloadMarkdown}
            className="w-full text-left px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 flex items-center gap-3 transition"
          >
            <Download size={16} className="text-slate-400" />
            <span className="flex-1">Download as markdown</span>
          </button>
          <button
            type="button"
            onClick={downloadPDF}
            className="w-full text-left px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 flex items-center gap-3 transition"
          >
            <Download size={16} className="text-slate-400" />
            <span className="flex-1">Download as PDF</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default ResumeActions;
