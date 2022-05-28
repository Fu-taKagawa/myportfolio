import React from "react";

const Header =()=>{
    return(
        <>
            <div className="header">
                <h1 className="header__logo"><a href="">Logo</a></h1>
                <ul className="header__contents">
                    <li><a href="">About</a></li>
                    <li><a href="">Works</a></li>
                    <li><a href="">Contact</a></li>
                    <li><a href=""><img src="" alt="" /></a></li>
                </ul>
            </div>
        </>
    )
}
export default Header