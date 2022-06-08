import React from "react";
import { Link } from "react-router-dom";
import Header from "../component/header/Header";

import workslogo from "../img/works/Works-logo.svg"
import workslogosp from "../img/works/Works-logo-sp.svg"
import workspage from "../img/works/Works-pagelogo.svg"
import kitakensetsu from "../img/works/Works-kita-kensetsu.jpg"
import gzmedia from "../img/works/Works-GZ-media.jpg"

const Works=()=>{
    return(
        <>
            <Header/>
            <section className="Works">
                <div className="Works__top-logo pc-only">
                    <img src={workslogo} alt="WorksLogo" />
                </div>
                <div className="Works__top-logo sp-only">
                    <img src={workslogosp} alt="WorksLogo-sp" />
                </div>
                <div className="Works__list">
                    <div className="Works__list__left">
                        <div className="Works__list__img blur"><a href="https://kita-kensetsu.jp/"><img src={kitakensetsu} alt="kita-kensetsu" /></a></div>
                        <div className="Works__list__textbox">
                            <div className="Works__company text-title"><a href="https://kita-kensetsu.jp/">喜多建設株式会社<img src={workspage} alt="pagelogo" /></a></div>
                            <div className="Works__skill text-normal">
                                <p>-使用技術- <br /> HTML / CSS / JavaScript / Wordpress</p>
                            </div>
                            <div className="text-normal">
                                <p>ホームページ制作・その後の修正や新たなページの追加など<br className="pc-only" />主にコーディングを担当させて頂きました。</p>
                            </div>
                        </div>
                    </div>
                    <div className="Works__list__right">
                        <div className="Works__list__img blur"><a href="https://gz-media.jp/"><img src={gzmedia} alt="GZ-Media" /></a></div>
                        <div className="Works__list__textbox">
                            <div className="Works__company text-title"><a href="https://gz-media.jp/">GZ Media<img src={workspage} alt="pagelogo" /></a></div>
                            <div className="Works__skill text-normal">
                                <p>-使用技術- <br /> HTML / CSS / JavaScript / Wordpress</p>
                            </div>
                            <div className="text-normal">
                                <p>ホームページ制作・その後の修正や新たなページの追加など<br className="pc-only" />主にコーディングを担当させて頂きました。</p>
                                <p>※現在はサイト内の企業紹介を停止しております。</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Works-TopPage-link"><p><Link to={"../"}>Top Page →</Link></p></div>
            </section>
        </>
        
    )
}

export default Works