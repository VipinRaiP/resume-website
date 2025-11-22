import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                height: '80px',
                backgroundColor: scrolled ? 'var(--nav-bg)' : 'transparent',
                backdropFilter: scrolled ? 'blur(10px)' : 'none',
                boxShadow: scrolled ? '0 10px 30px -10px rgba(2,12,27,0.7)' : 'none',
                zIndex: 100,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 50px',
                transition: 'all 0.25s ease-in-out'
            }}
        >
            <div style={{ color: 'var(--accent-color)', fontFamily: 'var(--font-mono)', fontSize: '1.5rem', fontWeight: 'bold' }}>
                VR
            </div>
            <ul style={{ display: 'flex', gap: '2rem', margin: 0 }}>
                {['About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item, i) => (
                    <motion.li
                        key={item}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * i, duration: 0.5 }}
                    >
                        <a
                            href={`#${item.toLowerCase()}`}
                            style={{
                                color: 'var(--text-primary)',
                                fontFamily: 'var(--font-mono)',
                                fontSize: '13px',
                                textDecoration: 'none'
                            }}
                            onMouseEnter={(e) => e.target.style.color = 'var(--accent-color)'}
                            onMouseLeave={(e) => e.target.style.color = 'var(--text-primary)'}
                        >
                            <span style={{ color: 'var(--accent-color)', marginRight: '5px' }}>0{i + 1}.</span>
                            {item}
                        </a>
                    </motion.li>
                ))}
                <motion.li
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                >
                    <a href="/resume.pdf" target="_blank" className="btn" style={{ padding: '0.5rem 1rem' }}>Resume</a>
                </motion.li>
            </ul>
        </motion.nav>
    );
};

export default Navbar;
