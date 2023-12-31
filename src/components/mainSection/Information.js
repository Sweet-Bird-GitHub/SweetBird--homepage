import React from "react";

import '../../styles/mainSection/Information.css'

const Information = () => {

    const introduce_to_club = "호서대학교 컴퓨터공학부 학생들이 모여 2023년에 시작된 웹 개발 모임입니다."

    return(
        <div className="information">
            <div className="introduce-club">
                <div className="ask-club">
                    <div className="introduce-QA">Q.</div>
                    <div className="information-highlight">　SWEET BIRD</div>는 어떤 모임인가요?
                </div>

                <div className="introduce-ment">
                <div className="introduce-QA">A.</div>
                    <div className="information-highlight">　SWEET BIRD</div>는 {introduce_to_club}
                </div>
            </div>
            
            <div className="introduce-activity">
                <div className="activity-title"><div className="information-highlight">SWEET BIRD</div>에서는 이런 활동을 합니다!</div>
                <div className="activities">
                    <div className="first-act">
                        <div className="first-act-name">친목도모</div>
                        <div className="first-act-information">모임 구성원 간의 친목 모도를 지향합니다.</div>
                    </div>
                    <div className="second-act">
                        <div className="second-act-name">포트폴리오 제작</div>
                        <div className="second-act-information">팀 프로젝트를 통해 포트폴리오를 제작하는데에 도움을 줍니다.</div>
                    </div>
                    <div className="third-act">
                        <div className="third-act-name">대회 참여</div>
                        <div className="third-act-information">모임원과 함께 다양한 대회에 참여합니다.</div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Information