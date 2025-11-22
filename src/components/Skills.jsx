import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';

const Skills = () => {
    return (
        <section id="skills" className="section">
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <span style={{ color: 'var(--accent-color)', fontFamily: 'var(--font-mono)', fontSize: '20px', marginRight: '10px' }}>03.</span>
                Skills
            </motion.h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                {Object.entries(resumeData.skills).map(([category, skills], index) => (
                    <motion.div
                        key={category}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        style={{
                            background: 'var(--card-bg)',
                            padding: '20px',
                            borderRadius: '4px',
                            boxShadow: '0 10px 30px -15px rgba(2,12,27,0.7)'
                        }}
                    >
                        <h3 style={{ fontSize: '18px', color: 'var(--accent-color)', marginBottom: '15px', textTransform: 'capitalize' }}>
                            {category}
                        </h3>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {skills.map((skill, i) => (
                                <li key={i} style={{ display: 'inline-block', margin: '0 10px 5px 0', fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--text-secondary)' }}>
                                    <span style={{ color: 'var(--accent-color)', marginRight: '5px' }}>▹</span>{skill}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
