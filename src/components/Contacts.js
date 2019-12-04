import React from 'react';
import { FaFile, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contacts = () => {
    return(
        <div>
            <a 
                href='https://github.com/mrsteveson'
                target='_blank'
                rel='noopener noreferrer'
            >
                <FaGithub/>
            </a>
            <a 
                href='https://linkedin.com/in/patricktsteveson'
                target='_blank'
                rel='noopener noreferrer'
            >
                <FaLinkedin/>
            </a>
            <a
                href='https://docs.google.com/document/d/1NRi__5oozf6C2neaxn-M2lzMI7kIOIxbfcqkWhDJINw/edit?usp=sharing'
                target='_blank'
                rel='noopener noreferrer'
            >
                <FaFile/>
            </a>
            <a href='mailto:patrick.steveson727@gmail.com'>
                <FaEnvelope/>
            </a>
        </div>
    );
};

export default Contacts;