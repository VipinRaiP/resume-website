import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';

const Achievements = () => {
    return (
        <section id="achievements" className="section" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <span style={{ color: 'var(--accent-color)', fontFamily: 'var(--font-mono)', fontSize: '20px', marginRight: '10px' }}>06.</span>
                Achievements
            </motion.h2>

            <div style={{ marginTop: '30px' }}>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {resumeData.achievements.map((achievement, index) => (
                        <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            style={{
                                marginBottom: '20px',
                                display: 'flex',
                                alignItems: 'flex-start',
                                color: 'var(--text-secondary)',
                                fontSize: '16px'
                            }}
                        >
                            <span style={{ color: 'var(--accent-color)', marginRight: '15px', marginTop: '2px' }}>▹</span>
                            {achievement}
                        </motion.li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Achievements;
