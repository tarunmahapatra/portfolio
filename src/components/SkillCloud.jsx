import { skills } from '../data/skills';

function SkillCloud() {
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {skills.top.map(skill => (
          <span key={skill} className="px-3 py-1.5 rounded-full bg-blue-50 text-accent text-sm font-medium border border-blue-100">
            {skill}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.other.map(skill => (
          <span key={skill} className="px-3 py-1.5 rounded-full bg-gray-100 text-gray-700 text-sm border border-gray-200">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default SkillCloud;
