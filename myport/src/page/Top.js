import React from "react";

import green__bg from '../img/bg__green.svg'
import photo from '../img/bit-smile.png'

const Top =()=>{
    return(
        <>
            <div className="TopPage">
                <div className="TopPage__top">
                    <div className="TopPage__top__bg">
                        <div >
                            <img src={green__bg} alt="" />
                        </div>
                    </div>
                    <div className="TopPage__top__textBox">
                        
                    </div>
                    <div className="TopPage__top__img">
                        <img src={photo} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Top