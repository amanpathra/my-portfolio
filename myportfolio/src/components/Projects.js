import React from 'react';
import '../styles/Projects.scss';
import {
    ProjectsGraphics1,
    ProjectsGraphics2,
    ProjectsGraphics3,
    ProjectsGraphics4,
    ProjectsGraphics5,
    ProjectsGraphics6,
    ProjectsGraphics7,
    ProjectsGraphics8,
    projects
} from '../assets/export';
import { FaGithub } from "react-icons/fa";
import { IoMdOpen } from "react-icons/io";

const Project = ({ project, idx }) => {
    return (
        <div
            className="project"
            style={{ '--after-content': `'${project.description}'` }}
        >
            <div className="project-head">
                <span className="name">{project.name}</span>
                <span className="stack">{project.stack}</span>
            </div>
            <div className="image"></div>
            <div className="project-links">
                <a href={project.githubLink} target='_blank' rel='noreferrer' className="github">
                    <FaGithub />
                    <span>View Repo</span>
                </a>
                <a href={project.liveLink} target='_blank' rel='noreferrer' className="live">
                    <IoMdOpen />
                    <span>Open Live</span>
                </a>
            </div>
        </div>
    )
}


const Projects = () => {
    return (
        <section id='Projects'>
            <div className="content">
                <div className="project-graphics">
                    <span>Projects</span>
                    <img src={ProjectsGraphics1} alt="" />
                    <img src={ProjectsGraphics2} alt="" />
                    <img src={ProjectsGraphics3} alt="" />
                    <img src={ProjectsGraphics4} alt="" />
                    <img src={ProjectsGraphics5} alt="" />
                    <img src={ProjectsGraphics6} alt="" />
                    <img src={ProjectsGraphics7} alt="" />
                    <img src={ProjectsGraphics8} alt="" />
                </div>
                <div className="brief-info">
                    <p>I have successfully crafted over 80+ projects that showcase my expertise in the MERN stack. My diverse portfolio encompasses a wide array of projects, ranging from static websites and personal portfolios to engaging games, dynamic social sites, efficient SaaS applications, and immersive music and news apps. Explore through these projects that highlight my skills and dedication to the art of web development.</p>
                </div>
            </div>
            <div className="projects-showcase">
                {projects.map((project, idx) => (
                    <Project project={project} idx={idx} key={idx} />
                ))}
            </div>
        </section>
    )
}

export default Projects;