import React from 'react';
import './Contact.css';

export const Contact = () => {
    return (
        <div className='Contact__container'>
            <h2>Contact me</h2>
            <p>If you want to contact me or send me a message so I can read it, do not hesitate to write to me in the attached section or visit my social networks, I also leave you my email for more information.</p>
            <form className='Contact' action='mailto:hcrj99@hotmail.com'>
                <input type='text' placeholder='Name'/>
                <input type='text' placeholder='Last Name'/>
                <input type='text' placeholder='E-mail'/>
                <textarea type='text' placeholder='Message'/>
                <input type='submit' value='Submit'/>
            </form>
        </div>
    )
}
