import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import profile from '../assets/profile2.jpeg';
import bye from '../assets/bye.png';

import About from './About';
import Exp from './Exp';
import Skill from './Skill';
import Education from './Education';
import Projects from './Projects';
import Tech from './Tech';
import ContactForm from './ContactForm';
import { Toaster, toast } from 'sonner';

function Landing() {
    const contactRef = useRef(null);
    const scrollToContact = () => {
        contactRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    // Framer Motion Variants
    const fadeInVariant = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
    };

    const staggerContainer = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.3 } }
    };

    const staggerItem = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <>
            <Toaster richColors position="top-center" closeButton />

            <div className='landing-container'>
                {/* Fixed Left Section */}
                <motion.div className="col-5 pcc"
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}>
                    <div className="profile-card">
                        <motion.img
                            src={profile}
                            alt="Rohan Ram"
                            className="profile-pic"
                            variants={staggerItem}
                        />
                        <motion.h2 className='hello' variants={staggerItem}>
                            Hello <img className='bye-img' src={bye} alt="Waving hand" />
                            <br /> <span className='im'> I'm</span> <span className='name'>r</span>
                            <span className='name'>o</span>
                            <span className='name'>h</span>
                            <span className='name'>a</span>
                            <span className='name'>n</span>
                            <span>  </span>
                            <span className='name'>r</span>
                            <span className='name'>a</span>
                            <span className='name'>m</span>
                        </motion.h2>
                        <motion.p className='gfont' variants={staggerItem}>MEARN | Python Dev</motion.p>

                        <motion.div className="contact-info mb-4" variants={staggerItem}>
                            <a href="https://www.google.com/maps/@11.8667766,75.3495785,14z?entry=ttu" target="_blank" rel="noopener noreferrer" variants={staggerItem}>
                                <span className="contact-info"><i className='bx bxs-map me-2'></i>Kerala, India</span>
                            </a>
                            <p>
                                <a href="https://github.com/rohanram" target="_blank" rel="noopener noreferrer">
                                    <i className='bx bxl-github me-2'></i>rohanram
                                </a>
                            </p>
                            <p>
                                <a href="https://www.linkedin.com/in/rohanram86" target="_blank" rel="noopener noreferrer">
                                    <i className='bx bxl-linkedin-square me-2'></i>rohanram86
                                </a>
                            </p>
                            <p>
                                <a href="tel:+917012049520" className="phone-link">
                                    <i className='bx bxs-phone me-1'></i>+91 7012049520</a>
                            </p>
                            <p>
                                <a href="mailto:rohanram86@gmail.com" className="email-link">
                                    <i className='bx bxs-envelope me-2'></i>rohanram86@gmail.com</a>
                            </p>
                        </motion.div>

                        {/* Download CV button */}
                        <motion.a href="/ROHAN_profile.pdf" download="ROHAN_CV.pdf" variants={staggerItem}>
                            <button className="download-btn">Download CV</button>
                        </motion.a>

                        {/* Contact Me button */}
                        <motion.a  variants={staggerItem}>
                            <button onClick={scrollToContact} className="contact-btn"> Contact Me</button>
                        </motion.a>
                        
                    </div>
                </motion.div>

                {/* Scrollable Right Section */}
                <div className="col-7 scrollable-content">
                    {[About, Exp, Tech, Skill, Projects, Education].map((Component, index) => (
                        <motion.div
                            key={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.2 }}
                            variants={fadeInVariant}
                        >
                            <Component />
                        </motion.div>
                    ))}

                    {/* Contact section with ref */}
                    <motion.div ref={contactRef}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.2 }}
                        variants={fadeInVariant}
                    >
                        <ContactForm />
                    </motion.div>
                </div>
            </div>
        </>
    );
}

export default Landing;