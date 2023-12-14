import React, { useEffect } from 'react';

import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    })

    const handleScroll = () => {
        let scrollPosition = window.scrollY;
        let windowHeight = window.innerHeight - 10;

        if (scrollPosition > windowHeight) {
            document.getElementById('navbar').classList.add('triggered');
        } else {
            document.getElementById('navbar').classList.remove('triggered');
        }
    }

    return (
        <main id='App'>
            <Home />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </main>
    );
}

export default App;