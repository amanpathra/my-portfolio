import React from 'react';
import '../styles/Skills.scss';
import {
    Skill1,
    Skill2,
    Skill3,
    Skill4,
    Skill5,
    Skill6,
    Skill7,
    Skill8,
    Skill9,
    Skill10,
    Skill11,
    Skill12,
    Skill13,
    Skill14,
    Skill15,
    Skill16,
    SkillsGraphics1,
    SkillsGraphics2,
    SkillsGraphics3,
    SkillsGraphics4,
    SkillsGraphics5,
    SkillsGraphics6,
    SkillsGraphics7,
    SkillsGraphics8,
    SkillsGraphics9,
    SkillsGraphics10
} from '../assets/export';

const Skills = () => {
    return (
        <section id='Skills'>
            <div className="skill-box-upper">
                <div className="skill">
                    <img src={Skill1} alt="" />
                    <span className="skill-name">HTML</span>
                </div>
                <div className="skill">
                    <img src={Skill2} alt="" />
                    <span className="skill-name">CSS</span>
                </div>
                <div className="skill">
                    <img src={Skill3} alt="" />
                    <span className="skill-name">JavaScript</span>
                </div>
                <div className="skill">
                    <img src={Skill4} alt="" />
                    <span className="skill-name">React</span>
                </div>
                <div className="skill">
                    <img src={Skill5} alt="" />
                    <span className="skill-name">Node</span>
                </div>
                <div className="skill">
                    <img src={Skill6} alt="" />
                    <span className="skill-name">Express</span>
                </div>
            </div>
            <div className="skill-middle-box">
                <div className="skill-middle-box-left">
                    <div className="skill">
                        <img src={Skill7} alt="" />
                        <span className="skill-name">MongoDB</span>
                    </div>
                    <div className="skill">
                        <img src={Skill8} alt="" />
                        <span className="skill-name">TypeScript</span>
                    </div>
                </div>
                <div className="skills-graphic">
                    <span>Skills</span>
                    <img src={SkillsGraphics1} alt="" />
                    <img src={SkillsGraphics2} alt="" />
                    <img src={SkillsGraphics3} alt="" />
                    <img src={SkillsGraphics4} alt="" />
                    <img src={SkillsGraphics5} alt="" />
                    <img src={SkillsGraphics6} alt="" />
                    <img src={SkillsGraphics7} alt="" />
                    <img src={SkillsGraphics8} alt="" />
                    <img src={SkillsGraphics9} alt="" />
                    <img src={SkillsGraphics10} alt="" />
                </div>
                <div className="skill-middle-box-right">
                    <div className="skill">
                        <img src={Skill9} alt="" />
                        <span className="skill-name">Next</span>
                    </div>
                    <div className="skill">
                        <img src={Skill10} alt="" />
                        <span className="skill-name">SASS</span>
                    </div>
                </div>
            </div>
            <div className="skill-box-lower">
                <div className="skill">
                    <img src={Skill11} alt="" />
                    <span className="skill-name">Tailwind</span>
                </div>
                <div className="skill">
                    <img src={Skill12} alt="" />
                    <span className="skill-name">Firebase</span>
                </div>
                <div className="skill">
                    <img src={Skill13} alt="" />
                    <span className="skill-name">Git</span>
                </div>
                <div className="skill">
                    <img src={Skill14} alt="" />
                    <span className="skill-name">Linux</span>
                </div>
                <div className="skill">
                    <img src={Skill15} alt="" />
                    <span className="skill-name">Redux</span>
                </div>
                <div className="skill">
                    <img src={Skill16} alt="" />
                    <span className="skill-name">Figma</span>
                </div>
            </div>
        </section>
    )
}

export default Skills;