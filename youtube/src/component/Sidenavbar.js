import React from 'react'

export default function Sidenavbar() {
    return (

        <>
            {/* <!-- side-nav bar --> */}
            <div className="side-nav-bar" id="snv">
                {/* <!-- 1st side-nav bar --> */}

                {/* <!-- 2nd side-nav bar --> */}
                <div className="na-2" id="na-2">
                    <ul>
                        {/* <!-- home --> */}
                        <li className="bu"><i className='fas fa-home' style={{ " fontSize": " 25px" }}></i><span>Home</span></li>
                        {/* <!-- shorts --> */}
                        <li className="bu"><i className='fas fa-play-circle' style={{ " fontSize": " 25px" }}></i><span>Shorts</span></li>
                        {/* <!-- Subscription --> */}
                        <li className="bu">
                            <i className='far fa-folder' style={{ " fontSize": " 25px" }}></i>
                            <i className="fas fa-play" style={{ "position": "relative", "left": "2px", " top": "-16px", " fontSize": "10px" }}></i>
                            <span> Subscription</span>
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

        </>

    )
}
