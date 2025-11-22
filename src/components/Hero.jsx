import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';

const Hero = () => {
    return (
        <section id="hero" style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            padding: '0 0'
        }}>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                style={{ color: 'var(--accent-color)', fontFamily: 'var(--font-mono)', fontSize: '16px', marginBottom: '20px' }}
            >
                Hi, my name is
            </motion.p>
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                style={{ fontSize: 'clamp(40px, 8vw, 80px)', fontWeight: '600', color: 'var(--text-primary)', lineHeight: 1.1, marginBottom: '10px' }}
            >
                {resumeData.name}.
            </motion.h1>
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                style={{ fontSize: 'clamp(40px, 8vw, 80px)', fontWeight: '600', color: 'var(--text-secondary)', lineHeight: 1.1, marginBottom: '20px' }}
            >
                I build robust and scalable software systems.
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                style={{ maxWidth: '540px', color: 'var(--text-secondary)', fontSize: '18px', marginBottom: '50px' }}
            >
                {resumeData.headline}. {resumeData.about}
            </motion.p>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
            >
                <a href="#experience" className="btn" style={{ fontSize: '16px', padding: '1.25rem 1.75rem' }}>
                    Check out my work!
                </a>
            </motion.div>
        </section>
    );
};

export default Hero;
