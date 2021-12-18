import React, {useState} from 'react';
import Logo from '../../data/img/logo.svg'
import './header.css'

export const Header: React.FC =()=>{
    const [IsNavVisible, setNavVisible] = useState(true);
    return (
        <div className='header_container'>
            <img src={Logo} alt="Logo" className="header_logo" />
            { IsNavVisible && <div className="header_container header_links">
                <p>Pricing</p>
                <p>Testimonial</p>
                <span style={{width:"60px"}}></span>
                <p className='bold'>Sign In</p>
                <p className='focus'>Sign Up</p>
            </div>}

            <button className='header_button' onClick={()=>setNavVisible(true)}>CLick me</button>
        </div>
    )
}