import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';
import { FaGithub, FaExternalLinkAlt, FaFolder } from 'react-icons/fa';

const Projects = () => {
    return (
        <section id="projects" className="section">
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <span style={{ color: 'var(--accent-color)', fontFamily: 'var(--font-mono)', fontSize: '20px', marginRight: '10px' }}>04.</span>
                Some Things I've Built
            </motion.h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '15px' }}>
                {resumeData.projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        style={{
                            background: 'var(--card-bg)',
                            padding: '2rem 1.75rem',
                            borderRadius: '4px',
                            boxShadow: '0 10px 30px -15px rgba(2,12,27,0.7)',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            height: '100%',
                            transition: 'transform 0.25s ease'
                        }}
                        whileHover={{ y: -7 }}
                    >
                        <header>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
                                <div style={{ color: 'var(--accent-color)', fontSize: '40px' }}>
                                    <FaFolder />
                                </div>
                                <div style={{ display: 'flex', gap: '10px' }}>
                                    {project.github && (
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', fontSize: '20px' }}>
                                            <FaGithub />
                                        </a>
                                    )}
                                    <a href="#" style={{ color: 'var(--text-secondary)', fontSize: '20px' }}><FaExternalLinkAlt /></a>
                                </div>
                            </div>
                            <h3 style={{ marginBottom: '10px', color: 'var(--text-primary)', fontSize: '22px' }}>
                                <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>{project.title}</a>
                            </h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '15px' }}>
                                {project.description}
                            </p>
                        </header>
                        <footer style={{ marginTop: '20px' }}>
                            <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', padding: 0, listStyle: 'none' }}>
                                {project.technologies.map((tech, i) => (
                                    <li key={i} style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-secondary)' }}>
                                        {tech}
                                    </li>
                                ))}
                            </ul>
                        </footer>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
