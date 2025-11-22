import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resumeData';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="section" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto', paddingBottom: '100px' }}>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                style={{ fontFamily: 'var(--font-mono)', fontSize: '16px', marginBottom: '20px', color: 'var(--text-secondary)' }}
            >
                <span style={{ color: 'var(--accent-color)', fontSize: '20px', marginRight: '10px' }}>07.</span>
                What's Next?
            </motion.p>
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
                style={{ fontSize: 'clamp(40px, 5vw, 60px)', color: 'var(--text-primary)', marginBottom: '20px' }}
            >
                Get In Touch
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                style={{ color: 'var(--text-secondary)', fontSize: '18px', marginBottom: '50px' }}
            >
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}
            >
                <a
                    href="https://www.linkedin.com/in/vipinraip/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                    style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '16px' }}
                >
                    <FaLinkedin size={20} /> LinkedIn
                </a>
                <a
                    href="https://github.com/VipinRaiP"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                    style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '16px' }}
                >
                    <FaGithub size={20} /> GitHub
                </a>
            </motion.div>
        </section>
    );
};

export default Contact;
