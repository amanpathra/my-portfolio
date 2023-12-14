import React from 'react';
import '../styles/Contact.scss';
import {
    ContactGraphics1,
    ContactGraphics2,
    ContactGraphics3,
    ContactGraphics4,
    ContactGraphics5,
    ContactGraphics6,
    ContactGraphics7,
    ContactGraphics8,
    ContactIcon1,
    ContactIcon2,
    ContactIcon3,
    ContactIcon4,
    ContactIcon5,
    ContactIcon6,
    ContactIcon7
} from '../assets/export';

const Contact = () => {

    function openDiscordProfile(userId) {
        // Check if the Discord app is installed
        if (navigator.userAgent.includes("Discord")) {
            window.location.href = `discord://open?`;
        } else {
            // If the Discord app is not installed, open the web app
            window.open(`https://discord.com/users/${encodeURIComponent(userId)}`);
        }
    }

    function openInstagramProfile(username) {
        // Check if the Instagram app is installed
        if (navigator.userAgent.includes("Instagram")) {
            window.location.href = `instagram://user?username=${username}`;
        } else {
            // If the Instagram app is not installed, open the web app
            window.open(`https://www.instagram.com/${username}`);
        }
    }

    return (
        <section id='Contact'>
            <div className="contact-graphics">
                <span>Contact Me</span>
                <img src={ContactGraphics1} alt="" />
                <img src={ContactGraphics2} alt="" />
                <img src={ContactGraphics3} alt="" />
                <img src={ContactGraphics4} alt="" />
                <img src={ContactGraphics5} alt="" />
                <img src={ContactGraphics6} alt="" />
                <img src={ContactGraphics7} alt="" />
                <img src={ContactGraphics8} alt="" />
            </div>
            <a href="https://dribbble.com/amanpathra" target='_blank' className='contact-icons'>
                <img src={ContactIcon1} alt="" />
            </a>
            <a href="https://github.com/amanpathra" target='_blank' className='contact-icons'>
                <img src={ContactIcon2} alt="" />
            </a>
            <a href={`mailto:amanpathra22@gmail.com?subject=${encodeURIComponent("Let's Work")}`} className='contact-icons'>
                <img src={ContactIcon3} alt="" />
            </a>
            <a href="discord://open" onclick={openDiscordProfile('Aman Pathrak#4318')} className='contact-icons'>
                <img src={ContactIcon4} alt="" />
            </a>
            <a href="https://www.instagram.com/amanpathra" target='_blank' onClick={openInstagramProfile('amanpathra')} className='contact-icons'>
                <img src={ContactIcon5} alt="" />
            </a>
            <a href="https://www.linkedin.com/in/aman-pathra-5bb388267" target='_blank' className='contact-icons'>
                <img src={ContactIcon6} alt="" />
            </a>
            <a href="https://twitter.com/AmanPathra" target='_blank' className='contact-icons'>
                <img src={ContactIcon7} alt="" />
            </a>
        </section>
    )
}

export default Contact;