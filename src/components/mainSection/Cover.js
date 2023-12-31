import React from "react";

import '../../styles/mainSection/Cover.css'

const Cover = () => {
    return(
        <div className="cover">
            <div className="club_title">SWEET BIRD</div>
            <div className="short_description_of_club">호서대학교 컴퓨터공학부<div>웹 개발</div> 소모임</div>
            <div className="using_language">
                <div className="lans">react</div>
                <div className="lans">spring</div>
                <div className="lans">...</div>
            </div>
        </div>
    )
}

export default Cover