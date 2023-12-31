import React from "react";

import '../styles/Main.css'
import Cover from '../components/mainSection/Cover.js'
import Information from '../components/mainSection/Information.js'
import Detail from "./mainSection/Detail.js";

const Main = () => {

    return(
        <div className="main">
            <Cover></Cover>
            <Information></Information>
            <Detail></Detail>
        </div>
    )
}

export default Main