import { FiArrowUpRight, FiGithub } from 'react-icons/fi';
import { motion, useReducedMotion } from 'framer-motion';
import type { ProjectCatalogueEntry } from '../data/projectCatalogue';

type ProjectShowcaseProps = {
  project: ProjectCatalogueEntry;
  index: number;
};

function ProjectVisual({ project, index }: ProjectShowcaseProps) {
  const dark = index % 2 === 0;

  if (project.visual.type === 'image') {
    return (
      <div className={`project-visual project-visual-${index} ${dark ? 'project-visual-dark' : ''}`}>
        <div className="project-logo-frame">
          <img src={project.visual.src} alt={project.visual.alt} />
          <span>Verified repository asset</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`project-visual project-visual-${index} ${dark ? 'project-visual-dark' : ''}`} role="img" aria-label={project.visual.alt}>
      <div className="project-system-visual">
        <div className="project-system-bar"><i /><i /><i /><span>{project.category}</span></div>
        <div className="project-system-grid">
          <span className="project-system-kicker">{project.technologies[0]}</span>
          <strong>{index === 2 ? 'Test every<br />important path.' : 'Automate the<br />work between.'}</strong>
          <div className="project-system-status"><b /> {index === 2 ? 'RUNNING IN CI' : 'READY TO RUN'} <FiArrowUpRight /></div>
        </div>
      </div>
    </div>
  );
}

export function ProjectShowcase({ project, index }: ProjectShowcaseProps) {
  const dark = index % 2 === 0;
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <motion.article
      className={`project-showcase ${dark ? 'project-showcase-dark' : ''}`}
      initial={reduceMotion ? false : { opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.7, delay: Math.min(index * 0.06, 0.18), ease: [0.2, 0.8, 0.2, 1] }}
    >
      <motion.div className="project-copy" initial={reduceMotion ? false : { opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.65, delay: 0.1 }}>
        <p className="eyebrow">{project.category}</p>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-details">
          <div><span>Problem</span><p>{project.problem}</p></div>
          <div><span>Approach</span><p>{project.approach}</p></div>
        </div>
        <div className="project-tags">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
        <div className="project-links">
          <a href={project.githubUrl} target="_blank" rel="noreferrer">View on GitHub <FiGithub /></a>
          {project.demoUrl ? <a href={project.demoUrl} target="_blank" rel="noreferrer">Live demo <FiArrowUpRight /></a> : null}
        </div>
      </motion.div>
      <motion.div initial={reduceMotion ? false : { opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8, delay: 0.12 }}>
        <ProjectVisual project={project} index={index} />
      </motion.div>
    </motion.article>
  );
}
