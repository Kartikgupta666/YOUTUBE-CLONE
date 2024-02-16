import React from 'react'


export default function Navbar() {

    const show = () => {
        document.getElementById('na').classList.toggle('active');
        document.getElementById('na-2').classList.toggle('deactive')

    }


    return (
        <div>
            <div className="nav">
                <nav>
                    <div className="logo">
                        <button id="slider" onClick={show} className="btn"
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
            {/* <!-- side-nav bar --> */}
            <div className="side-nav-bar" id="snv" >
                {/* <!-- 1st side-nav bar --> */}
                <div className="na" style={{
                    "display": "flex",
                    "flex - direction": "column",
                    "position": "absolute",
                    "top": "90px"
                }}>
                    <ul>
                        <li>Home</li>
                        <li>Shorts</li>
                        <li>Subscription</li>
                        <hr />
                        <li>You</li>
                        <li>History</li>
                        <hr />
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>

                </div>
                {/* <!-- 2nd side-nav bar --> */}
                <div className="na-2" id="na-2" style={{
                    "position": "absolute",
                    "display": "none",
                    "transition": "0.3s"
                }}>
                    <ul>
                        {/* <!-- home --> */}
                        <li className="bu"><i className='fas fa-home' style={{ " fontSize": " 25px" }}></i><span>Home</span></li>
                        {/* <!-- shorts --> */}
                        <li className="bu"><i className='fas fa-play-circle' style={{ " fontSize": " 25px" }}></i><span>Shorts</span></li>
                        {/* <!-- Subscription --> */}
                        <li className="bu">
                            {/* <i className='far fa-folder' style={{ " fontSize": " 25px" }}></i> */}
                            <i className="fas fa-play" style={{ "position": "relative", "left": "2px", " top": "-16px", " fontSize": "10px" }}></i>
                            <span> <h5>Subscription</h5></span>
                        </li>
                        {/* <!-- you --> */}
                        <li className="bu">
                            <i className='fas fa-user' style={{ " fontSize": " 25px" }}></i><span>You</span>
                        </li>
                        {/* <!-- download --> */}
                        <li className="bu"><i className='fas fa-download' style={{ "bottom ": " 10px" }}></i><span>Download</span></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
