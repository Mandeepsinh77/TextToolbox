import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">{props.aboutText}</Link>
                        </li>
                    </ul>
                    <form className="d-flex mx-3">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    <div className="d-flex">
                        <div className="bg-primary rounded mx-3 my-3 border" style={{ height: "20px", width: "20px", cursor: 'pointer' }} onClick={() => { props.toggleMode('primary') }} ></div>
                        <div className="bg-danger rounded mx-2 my-3 border" style={{ height: "20px", width: "20px", cursor: 'pointer' }} onClick={() => { props.toggleMode('danger') }} ></div>
                        <div className="bg-success rounded mx-2 my-3 border" style={{ height: "20px", width: "20px", cursor: 'pointer' }} onClick={() => { props.toggleMode('success') }} ></div>
                        <div className="bg-warning rounded mx-2 my-3 border" style={{ height: "20px", width: "20px", cursor: 'pointer' }} onClick={() => { props.toggleMode('warning') }} ></div>
                        <div className="bg-light rounded mx-2 my-3 border" style={{ height: "20px", width: "20px", cursor: 'pointer' }} onClick={() => { props.toggleMode('light') }} ></div>
                        <div className="bg-dark rounded mx-2 my-3 border" style={{ height: "20px", width: "20px", cursor: 'pointer' }} onClick={() => { props.toggleMode('dark') }} ></div>
                    </div>
                    {/* <div className={`form-check form-switch text-${props.mode === 'dark' ? 'light' : 'dark'} mx-5`}>
                        <input className="form-check-input" onClick={() => { props.toggleMode(null) }} type="checkbox" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">toggle Mode</label>
                    </div> */}
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes = { title: PropTypes.string, aboutText: PropTypes.string }
// Navbar.defaultProps={
//     title:"JAVA",
//     aboutText:"IT is Platform Independent"
// }