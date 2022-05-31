import React from "react";
import twitter from "../../img/top/twitter-logo.png"

const Header =()=>{
    return(
        <>
            <div className="pc-only">
                <div className="header">
                    <h1 className="header__logo"><a href="">Logo</a></h1>
                    <ul className="header__contents">
                        <li><a href="/about">About</a></li>
                        <li><a href="/works">Works</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li className="twitter"><a href="https://twitter.com/WEaKknN5HncADku"><img src={twitter} alt="" /></a></li>
                    </ul>
                </div>
            </div>
            <div className="sp-only">
                <div className="header-sp">
                    <h1 className="header-sp__logo"><a href="">Logo</a></h1>
                    <ul className="header-sp__contents">
                        <li className="list-about"><a href="/about">About</a></li>
                        <li className="list-works"><a href="/works">Works</a></li>
                        <li className="list-contact"><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default Header