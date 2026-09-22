import React from 'react';
import { motion } from 'framer-motion';
import { FolderGit2 } from 'lucide-react';
import { cn } from '../lib/utils';

interface ProjectsProps {
  className?: string;
}

export const Projects: React.FC<ProjectsProps> = ({ className }) => {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4 }}
      className={cn(
        'scroll-mt-24 space-y-8 border-t border-neutral-200/80 pt-12 dark:border-neutral-800/80',
        className,
      )}
    >
      <div className="space-y-1">
        <span className="text-xs font-semibold tracking-wider text-neutral-500 uppercase dark:text-neutral-400">
          Selected Projects
        </span>
        <h2 className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl dark:text-white">프로젝트</h2>
      </div>

      <div className="flex min-h-[160px] flex-col items-center justify-center rounded-2xl border border-dashed border-neutral-200 bg-neutral-50/50 p-8 text-center dark:border-neutral-800 dark:bg-neutral-900/40">
        <FolderGit2 className="h-8 w-8 text-neutral-400 dark:text-neutral-500" />
        <p className="mt-2 text-sm font-medium text-neutral-500 dark:text-neutral-400">
          등록된 프로젝트 내용이 없습니다.
        </p>
      </div>
    </motion.section>
  );
};

export default Projects;
