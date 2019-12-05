import React from 'react';
import profile  from '../images/profile.jpg';

const About = () => {
    return(
        <div className='about'>
            <img className='profile' src={profile} alt='profile'/>
            <div className='profile-bio'>
                <h2>What I am about!</h2>
                <p>Hello, I am Patrick Steveson, a Full-Stack Developer, located in Northern Illinois. 
                    I have always been enthusiastic about technology and its limitless capabilities. 
                    I enjoy problem solving, improving my skills and have a passion for helping people.
                    I am very excited about the future of technology and what it will bring.
                </p>
            </div>
        </div>
    );
};

export default About;