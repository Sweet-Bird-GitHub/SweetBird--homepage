import React from "react";

import '../styles/SignIn.css'

const SignIn = () => {
    return(
        <div className="signIn-background">
            <div className="signIn-page">
                <div className="signIn-title">SWEET BIRD</div>
                <div className="signIn-id">
                    <div className="signIn-id-title">아이디　</div>
                    <input className="signIn-id-input"></input>
                </div>
                <div className="signIn-password">
                    <div className="signIn-password-title">비밀번호</div>
                    <input className="signIn-password-input"></input>
                </div>
                <button className="signIn-button">로그인 하기 ▶</button>
                <div className="signIn-to-signUp">계정을 새로 만들고 싶으신가요?</div>
            </div>
        </div>
        
    )
}


export default SignIn