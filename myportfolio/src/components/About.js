import React from 'react';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import {
    AboutGraphic1,
    AboutGraphic2,
    AboutGraphic3,
    AboutGraphic4,
    AboutGraphic5,
    AboutGraphic6,
    AboutGraphic7,
    AboutGraphic8,
    AboutGraphic9,
    AboutGraphic10,
    AboutGraphic11,
    AboutGraphic12,
    AboutGraphic13,
    AboutGraphic14
} from '../assets/export';
import '../styles/About.scss';

const About = () => {

    const handleEduClick = (direction) => {
        const element = document.getElementById('about-content');
        element.style.scrollBehavior = 'smooth';
        if (direction === 'forth'){
            element.scrollLeft = element.scrollWidth;
        } else if (direction === 'back'){
            element.scrollLeft = 0;
        }
    }

    return (
        <section id='About'>
            <div className="graphic">
                <span>About</span>
                <span>Me</span>
                <img src={AboutGraphic1} alt="" />
                <img src={AboutGraphic2} alt="" />
                <img src={AboutGraphic3} alt="" />
                <img src={AboutGraphic4} alt="" />
                <img src={AboutGraphic5} alt="" />
                <img src={AboutGraphic6} alt="" />
                <img src={AboutGraphic7} alt="" />
                <img src={AboutGraphic8} alt="" />
                <img src={AboutGraphic9} alt="" />
                <img src={AboutGraphic10} alt="" />
                <img src={AboutGraphic11} alt="" />
                <img src={AboutGraphic12} alt="" />
                <img src={AboutGraphic13} alt="" />
                <img src={AboutGraphic14} alt="" />
            </div>

            <div className="content" id='about-content'>
                <div className="brief-info">
                    <p>I'm a highly skilled and self-taught web developer proficient in HTML, CSS and JavaScript. Having a solid catch in ReactJS with over 6 months of practical project building experience and other cutting-edge frontend technologies and frameworks.
                        <br /><br />
                        As well as demonstrated expertise in backend technologies such as Node.js, Express.js and MongoDB, effectively delivering robust and scalable solutions. I'm constantly seeking new opportunities to expand knowledge and improve skills to ensure outstanding performance in web development.
                    </p>
                    <button onClick={() => handleEduClick('forth')} id='EduScrollBtn'>
                        <span>My Educational Background</span>
                        <FaAngleRight />
                    </button>
                </div>
                <div className="education">
                    <h3>My Educational Background</h3>
                    <div className="certificate">
                        <h4>SSC</h4>
                        <div className='background'>
                            <span className="institute">St. Joseph's Sr. Sec. School, Ajmer</span>
                            <span className="year">2017 - 2018</span>
                        </div>
                    </div>
                    <div className="certificate">
                        <h4>HSC</h4>
                        <div className='background'>
                            <span className="institute">St. Joseph's Sr. Sec. School, Ajmer</span>
                            <span className="year">2019 - 2020</span>
                        </div>
                    </div>
                    <div className="certificate">
                        <h4>Diploma</h4>
                        <div className='background'>
                            <span className="institute">Govt. Polytechnic College, Ajmer</span>
                            <span className="year">2020 - 2023</span>
                        </div>
                    </div>
                    <div className="certificate">
                        <h4>B. Tech</h4>
                        <div className='background'>
                            <span className="institute">St. Wilfred Intitute of Technology, Ajmer</span>
                            <span className="year">2023 - Current</span>
                        </div>
                    </div>
                    <button onClick={() => handleEduClick('back')} id='BackScrollBtn'>
                        <FaAngleLeft />
                        <span>Go Back</span>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default About;