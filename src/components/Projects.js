import React from 'react';
import Object from '../Object';
import b from '../images/b.png';
import { Link } from 'react-router-dom';
import '../App.css';

function Projects() {

    return (
        <div className='projects'>
            <Link to='/reactportfolio' className='return' title='home'><img className='returnImg' src= { b } alt=''/></Link>
            {Object.map(info => {
                return (
                    <div className='project'>
                        <div className='g7'>
                            <h2>{info.name}</h2>
                            <div className='p3'> 
                                <p>{info.desc}</p>
                                <a href={info.git} target='_blank' rel='noopener noreferrer'>GitHub Repo</a>
                            </div>
                        </div>
                        <a className='f5' href={info.link} target='_blank' rel='noopener noreferrer' title={info.desc}>
                            <img src={info.img} className='projectImg' alt=''/>
                        </a>
                    </div>
                )
            })}
        </div>
    )
}

export default Projects;

