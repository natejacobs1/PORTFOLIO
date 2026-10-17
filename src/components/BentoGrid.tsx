import React, { useState } from 'react';
import { HeroCard } from './HeroCard';
import { AvatarCard } from './AvatarCard';
import { ClockCard } from './ClockCard';
import { ExperienceCard } from './ExperienceCard';
import { ProjectCard } from './ProjectCard';
import { SkillsCard } from './SkillsCard';
import { EducationCard } from './EducationCard';
import { AchievementsCard } from './AchievementsCard';
import { ContactCard } from './ContactCard';
import { SocialCard } from './SocialCard';
import { ResumeCard } from './ResumeCard';
import { StatsCard } from './StatsCard';
import { CurrentlyFocusCard } from './CurrentlyFocusCard';
import { ProjectModal } from './ProjectModal';
import { ResumeModal } from './ResumeModal';
import { PROJECTS_DATA } from '../utils/portfolio-data';
import { ProjectItem } from '../types/portfolio';

interface BentoGridProps {
  isResumeOpen: boolean;
  onOpenResume: () => void;
  onCloseResume: () => void;
}

export const BentoGrid: React.FC<BentoGridProps> = ({
  isResumeOpen,
  onOpenResume,
  onCloseResume,
}) => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const chessterProject = PROJECTS_DATA.find((p) => p.id === 'chesster')!;
  const liraProject = PROJECTS_DATA.find((p) => p.id === 'lira')!;
  const systuneProject = PROJECTS_DATA.find((p) => p.id === 'systune')!;

  const handleContactScroll = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Bento Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[minmax(180px,auto)] gap-4 sm:gap-5 [grid-auto-flow:dense]">
        {/* 1. Hero / Intro Card (Large 2x2) */}
        <HeroCard onContactClick={handleContactScroll} />

        {/* 2. Avatar / Profile Card (1x1) */}
        <AvatarCard />

        {/* 3. Live IST Clock & Location Card (1x1) */}
        <ClockCard />

        {/* 4. Experience Card - Venu AI (Wide 2x1) */}
        <ExperienceCard />

        {/* 5. Major Project 1: Chesster (Large 2x2) */}
        <ProjectCard
          project={chessterProject}
          onSelect={setSelectedProject}
          className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2"
        />

        {/* 6. Skills Card: Interactive Categorized Competencies (Large 2x2) */}
        <SkillsCard />

        {/* 7. Major Project 2: LIRA Web GIS (Large 2x2) */}
        <ProjectCard
          project={liraProject}
          onSelect={setSelectedProject}
          className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2"
        />

        {/* 8. Education Card (Tall 1x2) */}
        <EducationCard />

        {/* 9. Achievements & Certifications (1x1) */}
        <AchievementsCard />

        {/* 10. Major Project 3 / Hackathon Winner: SysTune (1x1 or wide) */}
        <ProjectCard
          project={systuneProject}
          onSelect={setSelectedProject}
          className="col-span-1 md:col-span-1 lg:col-span-1 row-span-1"
        />

        {/* 11. Stats at a Glance Card (1x1) */}
        <StatsCard />

        {/* 12. Currently Focusing On / R&D Card (1x1) */}
        <CurrentlyFocusCard />

        {/* 13. Social Links Card (1x1) */}
        <SocialCard />

        {/* 14. Resume View & Download Card (1x1) */}
        <ResumeCard onOpenResume={onOpenResume} />

        {/* 15. Contact & Collaboration Card (Wide 2x1) */}
        <ContactCard />
      </div>

      {/* Interactive Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={onCloseResume}
      />
    </main>
  );
};
