import React from "react";
import { Link } from "react-router-dom";
import Header from "../component/header/Header";
import jQuery from "jquery";

import green__bg from '../img/top/bg__green.svg'
import green__bgsp from "../img/top/bg__green-sp.svg"
import photo from '../img/top/Top-photo.png'
import catchfrase from "../img/top/Top-catch.svg"
import catchshadow from "../img/top/Top-catch-shadow.svg"
import aboutlogo from "../img/top/About-logo.svg"
import aboutlogosp from "../img/top/About-logo-sp.svg"
import topAboutPhoto from "../img/top/Top-about-photo.jpg"
import workslogo from "../img/works/Works-logo.svg"
import workslogosp from "../img/works/Works-logo-sp.svg"
import kitaKensetsu from "../img/works/Works-kita-kensetsu.jpg"
import GZmedia from "../img/works/Works-GZ-media.jpg"
import contactlogo from "../img/top/Contact-logo.svg"
import contactlogosp from "../img/top/Contact-logo-sp.svg"

const Top =()=>{
    (window.onload = function() {
    // フェードイン処理
    jQuery(window).scroll(function (){
        jQuery(".fade").each(function(){
        var winheight = jQuery(window).height();
        var posi = jQuery(this).offset().top;
        var scroll = jQuery(window).scrollTop();
        if (scroll + winheight > posi){
            jQuery(this).addClass("fadein");
        } else {
            //　スクロールで画面上部に戻った際に要素を非表示にしたい場合は、下記の行のコメントを外し有効にしてください。
            //jQuery(this).removeClass("fadein");
        }
        });
    });
})();
    return(
        <>
            <Header/>
            <div className="TopPage">
                <section className="TopPage__top fade">
                    <div className="TopPage__top__bg">
                        <div className="green__bg-right-top pc-only">
                            <img src={green__bg} alt="green-background-right" />
                        </div>
                        <div className="green__bg-left-top pc-only">
                            <img src={green__bg} alt="green-background-left" />
                        </div>
                        <div className="green__bg-top-sp sp-only">
                            <img src={green__bgsp} alt="green-background-sp" />
                        </div>
                    </div>
                    <div className="TopPage__top__catchfrase pc-only">
                        <img src={catchfrase} alt="TopPage-catchfrase" className="catch-frase"/>
                        <img src={catchshadow} alt="TopPage-catchfrase-shadow" className="catch-shadow" />
                    </div>
                    <div className="TopPage__top__catchfrase sp-only">
                        <p className="text-left">そんな社会を制作します</p>
                        <p className="text-center">人と人とのつながりが広がっていく社会</p>
                        <p className="text-right">楽しいと思える瞬間を共有することで</p>
                    </div>
                    <div className="TopPage__top__img">
                        <img src={photo} alt="TopPage-photo" />
                    </div>
                </section>
                <section className="TopPage__about fade">
                    <div className="TopPage__about__top">
                        <div className="TopPage__about__top-logo pc-only">
                            <img src={aboutlogo} alt="TopPage-aboutLogo" />
                        </div>
                        <div className="TopPage__about__top-logo sp-only">
                            <img src={aboutlogosp} alt="TopPage-aboutLogo-sp" />
                        </div>
                        <div className="TopPage__about__top-text">
                            <p className="text-normal">兵庫・大阪を拠点としてプログラミングを学習をしながら<br className="pc-only"/>Webサイト・Webアプリケーション制作をしております。</p>
                        </div>
                        <div className="TopPage__about__content">
                            <div className="TopPage__about__content-img">
                                <img src={topAboutPhoto} alt="TopPage-aboutPhoto" />
                            </div>
                            <div className="TopPage__about__content-textbox">
                                <p className="text-normal">香川　颯大 / Kagawa Hayato</p>
                                <p className="text-normal">関西学院大学 社会学部 所属</p>
                                <p className="text-normal">使用言語：HTML, CSS, JavaScript, React.js</p>
                                <p className="text-normal">使用技術：Firebase, Docker</p>
                                <p className="text-normal">所在地：兵庫県伊丹市</p>
                                <p className="text-normal">お問い合わせ：kagahaya@gmail.com</p>
                            </div>
                            <p className="TopPage__about__content-link"><Link to={"/About"}>About details →</Link></p>
                            <div className="green__bg-right-top-about pc-only">
                                <img src={green__bg} alt="green-background-right" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="TopPage__works fade">
                    <div className="TopPage__works__top">
                        <div className="TopPage__works__top-logo pc-only">
                            <img src={workslogo} alt="TopPage-worksLogo" />
                        </div>
                        <div className="TopPage__works__top-logo sp-only">
                            <img src={workslogosp} alt="TopPage-worksLogo-sp" />
                        </div>
                    </div>
                    <div className="TopPage__works__content">
                        <div className="TopPage__works__content-img blur">
                            <a href="https://kita-kensetsu.jp/"><img src={kitaKensetsu} alt="TopPage-kita-kensetsu" /></a>
                        </div>
                        <div className="TopPage__works__content-img blur">
                            <a href="https://gz-media.jp/"><img src={GZmedia} alt="TopPage-GZ-media" /></a>
                        </div>
                        <p className="TopPage__works__content-link"><Link to={"/Works"}>Works details →</Link></p>
                    </div>
                </section>
                <section className="TopPage__contact" id="contact">
                    <div className="TOpPage_contact__top">
                        <div className="TopPage__contact__top-logo pc-only">
                            <img src={contactlogo} alt="TopPage-contactLogo" />
                        </div>
                        <div className="TopPage__contact__top-logo sp-only">
                            <img src={contactlogosp} alt="TopPage-contactLogo-sp" />
                        </div>
                    </div>
                    <div className="contact__form fade">
                        <form action="" method="post" >
                            <div className="contact__form-content">
                                <label for="name" className="text-normal"> お名前</label>
                                <br />
                                <input type="text" id="name" name="name"/>
                            </div>
                            <div className="contact__form-content">
                                <label for="email" className="text-normal">メールアドレス</label>
                                <br />
                                <input type="mail" id="email" name="email"/>
                            </div>
                            <div className="contact__form-content">
                                <label for="tell" className="text-normal">電話番号</label>
                                <br />
                                <input type="mail" id="email" name="tell"/>
                            </div>
                            <div className="contact__form-content">
                                <label for="message" className="text-normal">お問い合わせ内容</label>
                                <br />
                                <textarea id="message" name="message"></textarea>
                            </div>
                            <input type="submit" value="送信する" className="submitBtn"/>
                        </form>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Top