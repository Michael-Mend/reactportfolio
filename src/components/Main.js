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
                            <li><button>Email</button></li>
                        </ul>
                    </div>
                    <div>
                        <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque modi dolores praesentium, aut eius deserunt alias eum, soluta itaque laudantium placeat laborum magnam voluptatum repellendus reiciendis omnis excepturi dolor similique? Doloremque modi dolores praesentium, aut eius deserunt alias eum, soluta itaque laudantium placeat laborum magnam voluptatum repellendus reiciendis omnis excepturi dolor similique?
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