import genaiSupport from '../posts/genai-support.md?raw';
import pdfExtraction from '../posts/pdf-extraction.md?raw';
import dellSupportAutomation from '../posts/dell-support-automation.md?raw';

const markdownMap = {
  'genai-support': genaiSupport,
  'pdf-extraction': pdfExtraction,
  'dell-support-automation': dellSupportAutomation,
};

export function getMarkdown(id) {
  return markdownMap[id] || `Post not found: ${id}`;
}

export async function loadMarkdown(path) {
  const response = await fetch(path);
  if (!response.ok) {
    return `Failed to load post: ${path}`;
  }
  return response.text();
}
