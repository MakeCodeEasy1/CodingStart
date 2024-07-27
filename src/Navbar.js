import React, { useState } from 'react'


export default function Navbar(props) {
    return (
        <div>



            <div className={`navbar navbar-${props.mode} bg-${props.mode} `}>
                <div className='navbar-brand ms-2 '>Text-Utils

                </div>
                <ul className='nav'>
                    <li className='nav-item '><a href="#" className='nav-link' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Home</a> </li>


                    <li className='nav-item'><a href="#" className='nav-link' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>About me</a> </li>
                    <li className='nav-item'><a href="#" className='nav-link' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Gallery</a> </li>
                    <li className='nav-item'><a href="#" className='nav-link' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Projets</a> </li>
                    <li className='nav-item'><a href="#" className='nav-link' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Contact us</a> </li>
                </ul>


                <form className='d-flex mx-2'>
                    <input type='text' className='form-control mx-2' placeholder='Search here...' />
                    <button className='btn btn-outline-light' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Search</button>
                </form>
                <div className={`form-check form-switch ${props.mode == 'dark' ? 'light' : 'dark'}`}>
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.togglemode} />
                    <label className="form-check-label mx-3" htmlFor="flexSwitchCheckDefault" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Enable dark mode</label>
                </div>



            </div>

        </div>
    )
}
