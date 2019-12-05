import React from 'react';
import { FaGithub, FaShareAlt } from 'react-icons/fa';
import RIY from '../images/RIY.jpg';
import Cave from '../images/Cave.jpg';
import Lookbook from '../images/Lookbook.jpg';
import Journal from '../images/journal.jpg';
import TechX from '../images/TechX.jpg';
import Treasure from '../images/treasure.jpg';

const Projects = () => {
    return(
        <div className='projects'>
            <h2>Projects</h2>
            <img className='project-img' src={RIY} alt='Review It Yourself' />
            <h3>Review It Yourself</h3>
            <p>Description</p>
            <p>Role: Full-Stack Developer</p>
            <p>Tech Stack:</p>
            <a href = '' target='_blank' rel='noopener noreferer'><FaGithub/></a>
            <a href = '' target='_blank' rel='noopener noreferer'><FaShareAlt/></a>

            <img className='project-img' src={Treasure} alt='Treasure Hunt' />
            <h3>Treasure Hunt</h3>
            <p>Description</p>
            <p>Role: Full-Stack Developer</p>
            <p>Tech Stack:</p>
            <a href = '' target='_blank' rel='noopener noreferer'><FaGithub/></a>
            <a href = '' target='_blank' rel='noopener noreferer'><FaShareAlt/></a>

            <img className='project-img' src={Cave} alt='Cave Maze' />
            <h3>Cave Maze</h3>
            <p>Description</p>
            <p>Role: Full-Stack Developer</p>
            <p>Tech Stack:</p>
            <a href = '' target='_blank' rel='noopener noreferer'><FaGithub/></a>
            <a href = '' target='_blank' rel='noopener noreferer'><FaShareAlt/></a>

            <img className='project-img' src={TechX} alt='Tech Xchange' />
            <h3>Tech Xchange</h3>
            <p>Description</p>
            <p>Role: Front-End Developer</p>
            <p>Tech Stack:</p>
            <a href = '' target='_blank' rel='noopener noreferer'><FaGithub/></a>
            <a href = '' target='_blank' rel='noopener noreferer'><FaShareAlt/></a>

            <img className='project-img' src={Journal} alt='LambdaFit' />
            <h3>LambdaFit</h3>
            <p>Description</p>
            <p>Role: Back-End Developer</p>
            <p>Tech Stack:</p>
            <a href = '' target='_blank' rel='noopener noreferer'><FaGithub/></a>
            <a href = '' target='_blank' rel='noopener noreferer'><FaShareAlt/></a>

            <img className='project-img' src={Lookbook} alt='The Lookbook' />
            <h3>The Lookbook</h3>
            <p>Description</p>
            <p>Role: UI Developer</p>
            <p>Tech Stack:</p>
            <a href = '' target='_blank' rel='noopener noreferer'><FaGithub/></a>
            <a href = '' target='_blank' rel='noopener noreferer'><FaShareAlt/></a>

            <p>More Coming Soon . . .</p>
        </div>
    );
};

export default Projects;