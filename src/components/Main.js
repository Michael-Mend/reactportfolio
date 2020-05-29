import React from 'react';
import { Link } from 'react-router-dom';
import bp from '../images/bp.png'
import '../App.css';

function Main() {
    return (
        <div className='container'>
            <div className='body'>
                <h1>Michael Mendoza</h1>
                <div className='main'>
                    <img src={ bp } alt='myface'/>
                    <div className="card">
                        <ul>
                            <li><a href='https://github.com/Michael-Mend' target='_blank' rel='noopener noreferrer'>github</a></li>
                            <li><a href='https://www.linkedin.com/in/michael-mendoza-46a61b198/' target='_blank' rel='noopener noreferrer'>linkedIn</a></li>
                            <li><a href='/' target='_blank' rel='noopener noreferrer'>Resum&eacute; </a></li>
                        </ul>
                    </div>
                    <div>
                        <p>
                            I'm Mike, a 22 year old full-stack (MERN) web developer based in Orlando, Fl. I am new to programming but I have been using computers for as long as I can remember. Beyond coding; technological literacy, and technology as a whole, are very important to me. Being able to use and undestand technology is going to become an exponentially more relevant skill as time goes on; that being said, I feel like I have stumbled upon my passion with coding and I am excited to grow my knowledge in the years to come.
                        </p>
                    </div>
                </div>
                <div className='links'>
                    <Link to='/projects'>projects</Link>
                    <Link to='/print shop'>3Dprint shop</Link>
                </div>
            </div>
        </div>
    )
}

export default Main;