import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';

const Education = () => {
    return (
        <section id="education" className="section">
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <span style={{ color: 'var(--accent-color)', fontFamily: 'var(--font-mono)', fontSize: '20px', marginRight: '10px' }}>05.</span>
                Education
            </motion.h2>

            <div style={{ display: 'grid', gap: '20px' }}>
                {resumeData.education.map((edu, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        style={{
                            background: 'var(--card-bg)',
                            padding: '20px',
                            borderRadius: '4px',
                            borderLeft: '4px solid var(--accent-color)'
                        }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px' }}>
                            <div>
                                <h3 style={{ fontSize: '20px', color: 'var(--text-primary)', marginBottom: '5px' }}>{edu.school}</h3>
                                <p style={{ fontSize: '16px', color: 'var(--text-secondary)' }}>{edu.degree}</p>
                            </div>
                            <div style={{ textAlign: 'right' }}>
                                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--text-secondary)' }}>{edu.period}</p>
                                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--accent-color)' }}>{edu.grade}</p>
                            </div>
                        </div>
                        <p style={{ marginTop: '10px', color: 'var(--text-secondary)' }}>{edu.location}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Education;
