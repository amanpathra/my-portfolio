import React from 'react';
import '../styles/Footer.scss';
import { BiSolidUpvote } from "react-icons/bi";

const Footer = () => {

    const handleTopClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    
    return (
        <section id='Footer'>
            <button onClick={handleTopClick}>
                <BiSolidUpvote size={20}/>
                Go to top
            </button>
            <span>aman.dev</span>
        </section>
    )
}

export default Footer;