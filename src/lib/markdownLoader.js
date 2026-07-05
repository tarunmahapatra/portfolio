import genaiSupport from '../posts/genai-support.md?raw';
import dellGenaiSearch from '../posts/dell-genai-search.md?raw';
import internalLeadershipDashboard from '../posts/internal-leadership-dashboard.md?raw';
import sapBasisAutomation from '../posts/sap-basis-automation.md?raw';
import pdfExtraction from '../posts/pdf-extraction.md?raw';

const markdownMap = {
  'genai-support': genaiSupport,
  'dell-genai-search': dellGenaiSearch,
  'internal-leadership-dashboard': internalLeadershipDashboard,
  'sap-basis-automation': sapBasisAutomation,
  'pdf-extraction': pdfExtraction,
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
