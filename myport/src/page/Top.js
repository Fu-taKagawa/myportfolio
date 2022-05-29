import React from "react";

import green__bg from '../img/bg__green.svg'
import green__bgsp from "../img/bg__green-sp.svg"
import photo from '../img/Top-photo.png'
import catchfrase from "../img/Top-catch.svg"
import catchshadow from "../img/Top-catch-shadow.svg"
import aboutlogo from "../img/About-logo.svg"
import topAboutPhoto from "../img/Top-about-photo.jpg"
import workslogo from "../img/Works-logo.svg"
import kitaKensetsu from "../img/Works-kita-kensetsu.jpg"
import contactlogo from "../img/Contact-logo.svg"

const Top =()=>{
    return(
        <>
            <div className="TopPage">
                <section className="TopPage__top">
                    <div className="TopPage__top__bg">
                        <div className="green__bg-right-top pc-only">
                            <img src={green__bg} alt="green-background-right" />
                        </div>
                        <div className="green__bg-left-top pc-only">
                            <img src={green__bg} alt="green-background-left" />
                        </div>
                        <div className="green__bg-sp sp-only">
                            <img src={green__bgsp} alt="green-background-sp" />
                        </div>
                    </div>
                    <div className="TopPage__top__catchfrase pc-only">
                        <img src={catchfrase} alt="TopPage-catchfrase" className="catch-frase"/>
                        <img src={catchshadow} alt="TopPage-catchfrase-shadow" className="catch-shadow" />
                    </div>
                    <div className="TopPage__top__img">
                        <img src={photo} alt="TopPage-photo" />
                    </div>
                </section>
                <section className="TopPage__about">
                    <div className="TopPage__about__top">
                        <div className="TopPage__about__top-logo">
                            <img src={aboutlogo} alt="TopPage-aboutLogo" />
                        </div>
                        <div className="TopPage__about__top-text">
                            <p className="text-normal">兵庫・大阪を拠点としてプログラミングを学習をしながら</p>
                            <p className="text-normal">Webサイト・Webアプリケーション制作をしております。</p>
                        </div>
                        <div className="TopPage__about__content">
                            <div className="TopPage__about__content-img">
                                <img src={topAboutPhoto} alt="TopPage-aboutPhoto" />
                            </div>
                            <div className="TopPage__about__content-textbox">
                                <p>香川　颯大 / Kagawa Hayato</p>
                                <p>関西学院大学 社会学部 所属</p>
                                <p>使用言語：HTML, CSS, JavaScript, React.js</p>
                                <p>使用技術：Firebase, Docker</p>
                                <p>所在地：兵庫県伊丹市</p>
                                <p>お問い合わせ：kagahaya@gmail.com</p>
                            </div>
                            <p className="TopPage__about__content-link"><a href="">About details →</a></p>
                            <div className="green__bg-right-about pc-only">
                                <img src={green__bg} alt="green-background-right" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="TopPage__works">
                    <div className="TopPage__works__top">
                        <div className="TopPage__works__top-logo">
                            <img src={workslogo} alt="TopPage-worksLogo" />
                        </div>
                    </div>
                    <div className="TopPage__works__content">
                        <div className="TopPage__works__content-img blur">
                            <a href=""><img src={kitaKensetsu} alt="TopPage-kita-kensetsu" /></a>
                        </div>
                        <div className="TopPage__works__content-img blur">
                            <a href=""><img src={kitaKensetsu} alt="TopPage-worksLogo" /></a>
                        </div>
                        <p className="TopPage__works__content-link"><a href="">Works details →</a></p>
                    </div>
                </section>
                <section className="TopPage__contact" id="contact">
                    <div className="TOpPage_contact__top">
                        <div className="TopPage__contact__top-logo">
                            <img src={contactlogo} alt="TopPage-contactLogo" />
                        </div>
                    </div>
                    <div className="contact__form">
                        <form action="#" method="post" >
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