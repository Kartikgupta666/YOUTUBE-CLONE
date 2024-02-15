import React from 'react'
// import './App.css';

export default function Navbar() {

    return (
        <div>
            <div className="nav">
                <nav>
                    <div className="logo">
                        <button id="slider" className="btn"
                            style={{ "position": "relative", "left": "-90px", "fontSize": "30px" }}>
                            <i className="fas fa-sliders"></i></button>

                        <h1><a href="#"><i className="fab fa-youtube"
                            style={{ "fontSize": "30px", "align-items": "center", "color": "red" }}></i></a>&nbsp;Youtube</h1>
                    </div>
                    <div className="search">
                        <input type="search" name="" id="ser" placeholder="Search" />
                        <button className="bt"><i className='fas fa-search'></i></button>
                        <button className="btn" style={{ "position": "relative", "left": "-50px" }}><i
                            className='fas fa-microphone'></i></button>
                    </div>
                    <div className="side">
                        <button className="btn"><i className="fas fa-video"></i></button>
                        <button className="btn"><i className='far fa-bell'></i></button>
                        &nbsp;
                        {/* <!-- <img className="account" src="IMG20231028145200-removebg-preview (1).jpg" alt=""> --> */}
                        <button className="btm"><i className="far fa-user" style={{ "color": "rgb(0, 136, 255)", "fontSize": "15px" }}></i>
                            Sign in</button>

                    </div>
                </nav>
            </div>
        </div>
    )
}
