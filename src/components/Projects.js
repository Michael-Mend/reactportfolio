import React from 'react';
import Object from '../Object';
import bp from '../images/bp.png';
import { Link } from 'react-router-dom';
import '../App.css';

function Projects() {

    return (
        <div className='projects'>
            <Link to='/reactportfolio' className='return' title='home'><img className='returnImg' src= { bp } alt=''/></Link>
            {Object.map(info => {
                return (
                    <div className='project'>
                        <h2>{info.name}</h2>
                        <a href={info.link} target='_blank' rel='noopener noreferrer' title={info.desc}>
                            <img src={info.img} className='projectImg' alt=''/>
                        </a>
                    </div>
                )
            })}
        </div>
    )
}

export default Projects;

