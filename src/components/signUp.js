import React from "react";

import '../styles/SignUp.css'

const SignUp = () => {
    return(
        <div className="signUp-background">
            <div className="signUp-page">
                <div className="signUp-title">SWEET BIRD</div>
                <div className="signUp-id">
                    <div className="signUp-id-title">아이디　</div>
                    <input className="signUp-id-input"></input>
                </div>
                <div className="signUp-password">
                    <div className="signUp-password-title">비밀번호</div>
                    <input className="signUp-password-input"></input>
                </div>
                <button className="signUp-button">회원가입 하기 ▶</button>
                <div className="signUp-to-signIn">계정이 이미 있으신가요?</div>
            </div>
        </div>
        
    )
}


export default SignUp