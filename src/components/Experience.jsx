import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';

const Experience = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section id="experience" className="section" style={{ maxWidth: '900px' }}>
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <span style={{ color: 'var(--accent-color)', fontFamily: 'var(--font-mono)', fontSize: '20px', marginRight: '10px' }}>02.</span>
                Where I've Worked
            </motion.h2>

            <div className="experience-content">
                <div className="experience-tabs">
                    {resumeData.experience.map((job, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTab(index)}
                            className={`experience-tab-button ${activeTab === index ? 'active' : ''}`}
                        >
                            {job.company}
                        </button>
                    ))}
                </div>

                <div style={{ flex: 1, padding: '10px 0' }}>
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h3 style={{ fontSize: '22px', fontWeight: 500, marginBottom: '5px', color: 'var(--text-primary)' }}>
                            {resumeData.experience[activeTab].role} <span style={{ color: 'var(--accent-color)' }}>@ {resumeData.experience[activeTab].company}</span>
                        </h3>
                        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '20px' }}>
                            {resumeData.experience[activeTab].period}
                        </p>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {resumeData.experience[activeTab].description.map((desc, i) => (
                                <li key={i} style={{ position: 'relative', paddingLeft: '20px', marginBottom: '10px', color: 'var(--text-secondary)', fontSize: '15px' }}>
                                    <span style={{ position: 'absolute', left: 0, color: 'var(--accent-color)' }}>▹</span>
                                    {desc}
                                </li>
                            ))}
                        </ul>
                        <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                            {resumeData.experience[activeTab].technologies.map((tech, i) => (
                                <span key={i} style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-secondary)', background: 'var(--card-bg)', padding: '5px 10px', borderRadius: '4px' }}>
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
