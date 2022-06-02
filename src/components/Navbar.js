import React from 'react'
import '../App.css'

export default function Navbar(props) {
    return (
        <nav className="navbar blueColor ">
            <div className="container-fluid">
                <a className={`navbar-brand ${props.mode ==='light'?'whiteColor':'darkBlueColor'}`} href='/'><h2>TEXT MANIPULATOR</h2></a>
                <div className={`form-check form-switch ${props.mode ==='light'?'whiteColor':'darkBlueColor'}`}>
                    <h3>
                    Dark Mode
                    <input className="form-check-input blueColor blackColor" style={{boxShadow:"rgba(99, 99, 99, 0.2) 0px 2px 8px 2px"}} type="checkbox" role="switch" id="switch" onChange={props.toggle} />

                    </h3>
                </div>
            </div>
        </nav>
    )
}
