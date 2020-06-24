import React from 'react';
import { Link } from 'react-router-dom';
import bp from '../images/bp.png';
import '../App.css';

function Main() {
    return (
        <div className='container'>
            <div className='body'>
                <h1>Michael Mendoza</h1>
                <div className='main'>
                    <img src={ bp } alt='myface'/>
                    <div>
                        <p>
                            I'm Mike, a 22 year old full-stack (MERN) web developer based in Orlando, Fl. Technological literacy, and technology as a whole, are very important to me. Being able to use and understand technology is going to become an exponentially more relevant skill as time goes on; that being said, I feel like I have stumbled upon my passion with coding.
                        </p>
                        <p>
                            In my time coding I have become proficient in the entirety of the MERN stack. In addition those 4 technologies, I have also become familiar with MySql, Handlebars, Axios, jquery, and many others that are useful in the process of building a full stack application. I am confident in my skills as a developer and I am excited for new problem solving opportunities that come along with software development. 
                        </p>
                    </div>
                </div>
                <div className='links'>
                    <Link to='/projects'>projects</Link>
                    <a href='mailto:michael.mend97@gmail.com'>email</a>
                    <a href='https://github.com/Michael-Mend' target='_blank' rel='noopener noreferrer'>github</a>
                    <a href='https://www.linkedin.com/in/michael-mendoza-46a61b198/' target='_blank' rel='noopener noreferrer'>linkedIn</a>
                    <a href='https://docs.google.com/document/d/1cHk4VTyfRINCzof0V6orUb2DXPspRU5PTVZaHaiNXts/edit?usp=sharing' target='_blank' rel='noopener noreferrer'>Resum&eacute; </a>
                </div>
            </div>
            <div className='bodyM'>
                <h1>Michael Mendoza</h1>
                <div className='main'>
                    <img src={ bp } alt='myface'/>
                    <div>
                        <p>
                            I'm Mike, a 22 year old full-stack (MERN) web developer based in Orlando, Fl. I am new to programming but I have been using computers for as long as I can remember. Beyond coding; technological literacy, and technology as a whole, are very important to me. Being able to use and undestand technology is going to become an exponentially more relevant skill as time goes on; that being said, I feel like I have stumbled upon my passion with coding and I am excited to grow my knowledge in the years to come.
                        </p>
                    </div>
                </div>
                <div className='links'>
                    <Link to='/projects'>projects</Link>
                    <a href='mailto:michael.mend97@yahoo.com'>email</a>
                </div>
                <div className='links'>
                    <a href='https://github.com/Michael-Mend' target='_blank' rel='noopener noreferrer'>github</a>
                    <a href='https://www.linkedin.com/in/michael-mendoza-46a61b198/' target='_blank' rel='noopener noreferrer'>linkedIn</a>
                </div>
                <div className ='links'>
                    <a href='https://docs.google.com/document/d/1cHk4VTyfRINCzof0V6orUb2DXPspRU5PTVZaHaiNXts/edit?usp=sharing' target='_blank' rel='noopener noreferrer'>Resum&eacute; </a>
                </div>
            </div>
        </div>
    )
}

export default Main;