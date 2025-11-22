import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';
import profilePhoto from '../assets/photo.jpg';

const About = () => {
    return (
        <section id="about" className="section">
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <span style={{ color: 'var(--accent-color)', fontFamily: 'var(--font-mono)', fontSize: '20px', marginRight: '10px' }}>01.</span>
                About Me
            </motion.h2>
            <div style={{ display: 'grid', gridTemplateColumns: '3fr 2fr', gap: '50px' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <p style={{ marginBottom: '15px', color: 'var(--text-secondary)' }}>
                        Hello! My name is Vipin and I am a passionate Software Engineer dedicated to building robust and scalable solutions. My journey in software development is driven by a deep curiosity for solving complex engineering challenges and optimizing distributed systems.
                    </p>
                    <p style={{ marginBottom: '15px', color: 'var(--text-secondary)' }}>
                        {resumeData.about}
                    </p>
                    <p style={{ marginBottom: '15px', color: 'var(--text-secondary)' }}>
                        Here are a few technologies I've been working with recently:
                    </p>
                    <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(140px, 200px))', gap: '10px', padding: 0, margin: '20px 0 0 0', overflow: 'hidden', listStyle: 'none' }}>
                        {["Java", "Python", "Go", "Kubernetes", "SpringBoot", "Apache Flink"].map((skill) => (
                            <li key={skill} style={{ position: 'relative', paddingLeft: '20px', fontFamily: 'var(--font-mono)', fontSize: '13px', color: 'var(--text-secondary)' }}>
                                <span style={{ position: 'absolute', left: 0, color: 'var(--accent-color)' }}>▹</span>
                                {skill}
                            </li>
                        ))}
                    </ul>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    style={{ position: 'relative' }}
                >
                    <div style={{
                        width: '100%',
                        maxWidth: '300px',
                        height: 'auto',
                        position: 'relative',
                        borderRadius: '4px',
                        backgroundColor: 'var(--accent-color)',
                    }}>
                        <img
                            src={profilePhoto}
                            alt="Vipin Rai P"
                            style={{
                                width: '100%',
                                height: 'auto',
                                borderRadius: '4px',
                                display: 'block',
                                mixBlendMode: 'multiply',
                                filter: 'grayscale(100%) contrast(1)',
                                transition: 'var(--transition)',
                                cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.mixBlendMode = 'normal';
                                e.target.style.filter = 'none';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.mixBlendMode = 'multiply';
                                e.target.style.filter = 'grayscale(100%) contrast(1)';
                            }}
                        />
                        <div style={{
                            position: 'absolute',
                            top: '20px',
                            left: '20px',
                            width: '100%',
                            height: '100%',
                            border: '2px solid var(--accent-color)',
                            borderRadius: '4px',
                            zIndex: -1,
                            transition: 'var(--transition)'
                        }}></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
