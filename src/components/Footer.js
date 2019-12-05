import React from 'react';
import Contacts from './Contacts.js'

const Footer = () => {
    return(
        <div className='footer'>
            <p>Thank you for viewing my portfolio, enjoy my work?<br/> Please reach out and connect with me below . . .</p>
            <Contacts/>
            <p>© Patrick Steveson, 2019</p>
        </div>
    );
};

export default Footer;