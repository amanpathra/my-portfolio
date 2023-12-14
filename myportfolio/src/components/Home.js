import React, { useEffect } from 'react';

import { FaAngleDown } from "react-icons/fa6";
import { AiFillHome, AiFillProject } from "react-icons/ai";
import { IoInformationCircle } from "react-icons/io5";
import { RiStackFill, RiLinksFill } from "react-icons/ri";
import { GrProjects } from "react-icons/gr";
import '../styles/Home.scss';
import Pfp from '../assets/images/PFP.png';

const Home = () => {

    useEffect(() => {
        window.addEventListener('scroll', switchNavMenu);

        // Cleanup the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', switchNavMenu);
        };
    })

    const switchNavMenu = () => {
        let scrollPosition = window.scrollY + 10;
        let windowHeight = window.innerHeight;

        const menuBtns = document.getElementsByClassName('nav-menu-item');
        Array.from(menuBtns).forEach(btn => {
            btn.classList.remove('active');
        })

        if (scrollPosition < windowHeight){
            menuBtns[0].classList.add('active');
        } else if (scrollPosition > windowHeight && scrollPosition < 2*windowHeight){
            menuBtns[1].classList.add('active');
        } else if (scrollPosition > 2*windowHeight && scrollPosition < 3*windowHeight){
            menuBtns[2].classList.add('active');
        } else if (scrollPosition > 3*windowHeight && scrollPosition < 4*windowHeight){
            menuBtns[3].classList.add('active');
        } else if (scrollPosition > 4*windowHeight && scrollPosition < 5*windowHeight){
            menuBtns[4].classList.add('active');
        }
    }

    const handleDownClick = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        })
    }

    const scrollToContact = () => {
        const elem = document.getElementById('Contact');
        elem.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    const downloadCV = async () => {
        const response = await fetch('http://localhost:8000/cv');
        const fileBlob = await response.blob();

        const blob = new Blob([fileBlob], { type: 'application/pdf' });

        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        console.log(blob)

        link.download = 'Aman-CVv.pdf';

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

    };

    const handleMenuClick = (e) => {
        const menuBtns = document.getElementsByClassName('nav-menu-item');
        Array.from(menuBtns).forEach(btn => {
            btn.classList.remove('active');
        })
        e.target.classList.add('active');
    }

    return (
        <section id='Home'>
            <nav id='navbar' className='nav-logo'>
                <a href="">
                    <span>aman.dev</span>
                </a>
                <ul className='nav-menu'>
                    <a className='nav-menu-item active' href='#Home' onClick={handleMenuClick}>
                        <AiFillHome size={20}/>
                        <span>Home</span>
                    </a>
                    <a className='nav-menu-item' href='#About' onClick={handleMenuClick}>
                        <IoInformationCircle size={20}/>
                        <span>About</span>
                    </a>
                    <a className='nav-menu-item' href='#Skills' onClick={handleMenuClick}>
                        <RiStackFill size={20}/>
                        <span>Skills</span>
                    </a>
                    <a className='nav-menu-item' href='#Projects' onClick={handleMenuClick}>
                        <AiFillProject size={20}/>
                        <span>Projects</span>
                    </a> 
                    <a className='nav-menu-item' href='#Contact' onClick={handleMenuClick}>
                        <RiLinksFill size={20}/>
                        <span>Contact</span>
                    </a>
                </ul>
            </nav>
            <div id="hero">
                <div className="hero-pfp">
                    <img src={Pfp} alt="User Pfp" />
                    <div></div>
                </div>
                <div className="hero-content">
                    <span className="greet">Hi, I'm</span>
                    <span className="name">Aman Pathra</span>
                    <p className="brief-info">A Full Stack Web Developer from India with a keen eye in design and user experience.</p>
                </div>
            </div>
            <div className="call-to-action">
                <button className='contact' onClick={scrollToContact}>Contact Me</button>
                <button className='cv' onClick={downloadCV}>Download CV</button>
            </div>
            <div className="drag-down">
                <FaAngleDown size={24} strokeWidth={2} color='#E47B00' onClick={handleDownClick} />
            </div>
            <div className="confetti confetti-1"></div>
            <div className="confetti confetti-2"></div>
            <div className="confetti confetti-3"></div>
            <div className="confetti confetti-4"></div>
            <div className="confetti confetti-5"></div>
            <div className="confetti confetti-6"></div>
        </section>
    )
}

export default Home;