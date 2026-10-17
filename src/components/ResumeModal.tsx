import React, { useState, useEffect } from 'react';
import { X, Printer, Copy, Check, Mail } from 'lucide-react';
import {
  PERSONAL_INFO,
  EDUCATION_DATA,
  EXPERIENCE_DATA,
  PROJECTS_DATA,
  ACHIEVEMENTS_DATA,
  SKILLS_DATA
} from '../utils/portfolio-data';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const resumeText = `
${PERSONAL_INFO.name}
Email: ${PERSONAL_INFO.email} | LinkedIn: ${PERSONAL_INFO.linkedinUrl} | GitHub: ${PERSONAL_INFO.githubUrl}
Location: ${PERSONAL_INFO.location}

EDUCATION
- Canara Engineering College (2023 - 2027)
  B.E in Computer Science and Engineering | CGPA: 7.7/10
- Centre for Advanced Learning (CFAL) (2021 - 2023)
  Pre-University Course (PCMS) | Percentage: 87%

EXPERIENCE
- Software Engineering Intern - Venu AI (Remote, San Jose, CA) | June 2026 - Aug 2026
  * Contributing to an AI-powered SaaS platform using Django, React, PostgreSQL, Redis, Docker, GitHub Actions, and Microsoft Azure.
  * Improving GitHub Actions CI/CD pipelines while contributing to backend bug fixes, campaign scheduling, feature development, deployments, and code reviews.

PROJECTS
- Chesster (2025)
  Technologies: React 19, TypeScript, Node.js, Express, Tailwind CSS, Vite, Google Gemini API
  * Developed an interactive chess analysis chatbot combining engine evaluations with the Google Gemini API to explain games and complex positions conversationally.
  * Built a full-stack web application for loading games from URLs, navigating moves, processing board positions, and providing secure, responsive real-time chatbot analysis.
- LIRA - Landslide Intelligence & Risk Analytics (2026)
  Technologies: Python, QGIS, React, TypeScript, Leaflet, Tailwind CSS, GeoJSON, GeoTIFF
  * Developing a Web GIS dashboard to visualize classified susceptibility tiers (Low, High, Very High), landslide hazard points, road networks, and district boundaries across four Karnataka districts.
  * Implementing interactive coordinate raster sampling, feature inspection telemetry, spatial risk analytics, and selectable 10-factor Landslide Conditioning Factor (LCF) maps using React and Leaflet.

ACHIEVEMENTS
- FOSS Hack 2025 Winner - Kochi: Awarded Rs. 10,000 cash prize as part of Team Fulgur Code for developing SysTune (lightweight GTK Linux settings manager).
- GitHub Foundations Certification: Git workflows, repository management, CI/CD, and fundamental DevOps concepts.

SKILLS
- Programming Languages: Python, C, Java, SQL, JavaScript, TypeScript
- Web Technologies: HTML5, CSS3, React.js, Tailwind CSS, Node.js, Express, Vite
- GIS & Data: QGIS, GeoJSON, GeoTIFF, Spatial Data Analysis, Leaflet
- Cloud & DevOps: Docker, Kubernetes, GitHub Actions, AWS IAM, Amazon ECR, Vercel, Microsoft Azure
- Tools: Git, GitHub, VS Code, GitHub Copilot
    `.trim();

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[92vh] flex flex-col rounded-3xl border bg-white border-neutral-200 text-neutral-900 shadow-2xl dark:bg-[#12161E] dark:border-[#1F2633] dark:text-neutral-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 bg-neutral-50 dark:border-[#1F2633] dark:bg-[#0D1016] shrink-0">
          <div className="flex items-center gap-2">
            <h3 id="resume-title" className="text-base font-bold text-neutral-900 dark:text-white">
              Curriculum Vitae · {PERSONAL_INFO.name}
            </h3>
            <span className="text-xs px-2 py-0.5 rounded-md bg-lime-100 text-lime-700 dark:bg-lime-950/80 dark:text-[#CCFF00] font-mono border border-lime-300/60 dark:border-[#2D4518]">
              Verified
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopyText}
              title="Copy plain text"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white border border-neutral-300 text-neutral-700 hover:bg-neutral-100 dark:bg-[#161B26] dark:border-[#263142] dark:text-neutral-200 dark:hover:bg-[#1E2535] transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-lime-600 dark:text-[#CCFF00]" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Text</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={handlePrint}
              title="Print or save as PDF"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold active:scale-95 transition-all shadow-sm bg-neutral-950 text-[#CCFF00] hover:bg-neutral-800 dark:bg-[#CCFF00] dark:text-[#0B0D10] dark:hover:bg-[#B8E600] dark:shadow-[0_0_20px_rgba(204,255,0,0.25)]"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close modal"
              className="p-1.5 rounded-lg text-neutral-400 hover:text-neutral-900 hover:bg-neutral-200 dark:hover:text-white dark:hover:bg-[#1C2230] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Resume Sheet */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-6 text-neutral-800 dark:text-neutral-200 text-sm leading-relaxed font-sans print:p-0 print:bg-white print:text-black">
          {/* Header Block */}
          <div className="text-center pb-6 border-b border-neutral-200 dark:border-[#1F2633]">
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-neutral-950 dark:text-white uppercase">
              {PERSONAL_INFO.name}
            </h1>
            <div className="mt-2 flex flex-wrap items-center justify-center gap-3 text-xs text-neutral-600 dark:text-neutral-400">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:underline flex items-center gap-1 text-lime-600 dark:text-[#CCFF00]">
                <Mail className="w-3 h-3" />
                {PERSONAL_INFO.email}
              </a>
              <span>•</span>
              <a href={PERSONAL_INFO.linkedinUrl} target="_blank" rel="noreferrer" className="hover:underline text-cyan-600 dark:text-[#00F2FE]">
                linkedin.com/in/{PERSONAL_INFO.linkedinHandle}
              </a>
              <span>•</span>
              <a href={PERSONAL_INFO.githubUrl} target="_blank" rel="noreferrer" className="hover:underline text-cyan-600 dark:text-[#00F2FE]">
                github.com/{PERSONAL_INFO.githubHandle}
              </a>
            </div>
          </div>

          {/* Education */}
          <section>
            <h2 className="text-sm font-bold uppercase tracking-wider text-lime-600 dark:text-[#CCFF00] pb-1 border-b border-neutral-200 dark:border-[#1F2633] mb-3">
              Education
            </h2>
            <div className="space-y-3">
              {EDUCATION_DATA.map((edu, i) => (
                <div key={i} className="flex justify-between items-start gap-4 flex-wrap">
                  <div>
                    <h3 className="font-bold text-neutral-900 dark:text-white">{edu.institution}</h3>
                    <p className="text-xs text-neutral-700 dark:text-neutral-300 italic">{edu.degree}</p>
                  </div>
                  <div className="text-right text-xs">
                    <span className="font-mono text-neutral-600 dark:text-neutral-400">{edu.period}</span>
                    <p className="font-bold text-lime-600 dark:text-[#CCFF00]">{edu.scoreLabel}: {edu.score}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section>
            <h2 className="text-sm font-bold uppercase tracking-wider text-lime-600 dark:text-[#CCFF00] pb-1 border-b border-neutral-200 dark:border-[#1F2633] mb-3">
              Projects
            </h2>
            <div className="space-y-4">
              {PROJECTS_DATA.map((proj) => (
                <div key={proj.id} className="space-y-1">
                  <div className="flex justify-between items-baseline flex-wrap">
                    <h3 className="font-bold text-neutral-900 dark:text-white">{proj.title}</h3>
                    <span className="text-xs font-mono text-neutral-600 dark:text-neutral-400">{proj.year}</span>
                  </div>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 italic">
                    Technologies: {proj.technologies.join(', ')}
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-xs text-neutral-700 dark:text-neutral-300">
                    {proj.bulletPoints.map((pt, idx) => (
                      <li key={idx}>{pt}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Internships & Certificates */}
          <section>
            <h2 className="text-sm font-bold uppercase tracking-wider text-lime-600 dark:text-[#CCFF00] pb-1 border-b border-neutral-200 dark:border-[#1F2633] mb-3">
              Internships & Certificates
            </h2>
            <div className="space-y-4">
              {EXPERIENCE_DATA.map((exp, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex justify-between items-baseline flex-wrap">
                    <h3 className="font-bold text-neutral-900 dark:text-white">
                      {exp.role} - <span className="text-cyan-600 dark:text-[#00F2FE]">{exp.company}</span> <span className="text-xs font-normal text-neutral-500">({exp.location})</span>
                    </h3>
                    <span className="text-xs font-mono text-neutral-600 dark:text-neutral-400">{exp.period}</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-xs text-neutral-700 dark:text-neutral-300">
                    {exp.bulletPoints.map((pt, idx) => (
                      <li key={idx}>{pt}</li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className="pt-2">
                <h4 className="text-xs font-bold text-neutral-800 dark:text-neutral-300 mb-1">Certificates</h4>
                <p className="text-xs text-neutral-700 dark:text-neutral-300">
                  <span className="font-semibold text-neutral-900 dark:text-white">GitHub Foundations Certification – GitHub:</span> Demonstrated proficiency in Git, GitHub workflows, repository management, collaboration, version control, GitHub Actions, and fundamental DevOps concepts.
                </p>
              </div>
            </div>
          </section>

          {/* Skills */}
          <section>
            <h2 className="text-sm font-bold uppercase tracking-wider text-lime-600 dark:text-[#CCFF00] pb-1 border-b border-neutral-200 dark:border-[#1F2633] mb-3">
              Skills
            </h2>
            <div className="grid grid-cols-1 gap-1.5 text-xs text-neutral-700 dark:text-neutral-300">
              <p><span className="font-semibold text-neutral-900 dark:text-white">Programming Languages:</span> Python, C, Java, SQL, JavaScript</p>
              <p><span className="font-semibold text-neutral-900 dark:text-white">Web Technologies:</span> HTML5, CSS3, React.js, TypeScript</p>
              <p><span className="font-semibold text-neutral-900 dark:text-white">GIS & Data:</span> QGIS, GeoJSON, GeoTIFF, Spatial Data Analysis</p>
              <p><span className="font-semibold text-neutral-900 dark:text-white">Cloud & DevOps:</span> Docker, Kubernetes, GitHub Actions, AWS IAM, Amazon ECR, Vercel</p>
              <p><span className="font-semibold text-neutral-900 dark:text-white">Tools:</span> Git, GitHub, VS Code, GitHub Copilot</p>
            </div>
          </section>

          {/* Achievements */}
          <section>
            <h2 className="text-sm font-bold uppercase tracking-wider text-lime-600 dark:text-[#CCFF00] pb-1 border-b border-neutral-200 dark:border-[#1F2633] mb-3">
              Achievements
            </h2>
            <div className="text-xs text-neutral-700 dark:text-neutral-300">
              <p>
                <span className="font-semibold text-neutral-900 dark:text-white">FOSS Hack 2025 Winner - Kochi:</span> Awarded a Rs. 10,000 cash prize at a national-level hackathon as part of Team Fulgur Code for developing SysTune, a lightweight GTK-based Linux system settings manager with a desktop-environment-independent interface for managing system, connectivity, and security settings.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
