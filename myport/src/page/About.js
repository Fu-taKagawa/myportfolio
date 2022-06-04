import React from "react";
import { Link } from "react-router-dom";
import Header from "../component/header/Header";

import green__bg from '../img/top/bg__green.svg'
import green__bgsp from "../img/top/bg__green-sp.svg"
import aboutlogo from "../img/top/About-logo.svg"
import aboutlogosp from "../img/top/About-logo-sp.svg"
import topAboutPhoto from "../img/top/Top-about-photo.jpg"
import bike from "../img/about/fuuta-bike.jpg"
import guitar from "../img/about/fuuta-guitar.jpg"

const About =()=>{
    return(
        <>
            <Header/>
            <section className="About">
                    <div className="About__top">
                        <div className="About__top-logo pc-only">
                            <img src={aboutlogo} alt="AboutLogo" />
                        </div>
                        <div className="About__top-logo sp-only">
                            <img src={aboutlogosp} alt="AboutLogo-sp" />
                        </div>
                        <div className="About__top-text">
                            <p className="text-normal">兵庫・大阪を拠点としてプログラミングを学習をしながら<br className="pc-only"/>Webサイト・Webアプリケーション制作をしております。</p>
                        </div>
                        <div className="About__circumstance">
                            <h3 className="About__content__title">- Circumstance -</h3>
                            <p>2021年よりWebサイト制作の学習を始める。</p>
                            <p>2021年にyahoo!! hack day2021に出場。 </p>
                            <p>2022年より株式会社COOONにてインターンシップ生としてコーポレートサイト・LPサイト制作の業務を行う。</p>
                        </div>
                        <div className="About__content">
                            <div className="About__content-img">
                                <img src={topAboutPhoto} alt="AboutPhoto" />
                            </div>
                            <div className="About__content-textbox">
                                <p className="text-normal">香川　颯大 / Kagawa Hayato</p>
                                <p className="text-normal">関西学院大学 社会学部 所属</p>
                                <p className="text-normal">使用言語：HTML, CSS, JavaScript, React.js</p>
                                <p className="text-normal">使用技術：Firebase, Docker</p>
                                <p className="text-normal">所在地：兵庫県伊丹市</p>
                                <p className="text-normal">お問い合わせ：kagahaya@gmail.com</p>
                            </div>
                        </div>
                        <div className="About__attitude">
                            <h3 className="About__content__title">- Attitude -</h3>
                            <p>Webサイト・Webアプリケーションを制作していく上で大切にしている姿勢として、何よりも楽しむことを重視しております。<br />
                            そのサービスを制作することでどれだけワクワク出来るのか、ページ訪問者やユーザーが楽しんで使って頂けるのか<br className="pc-only"/>
                            ということを軸として考え、サイト・アプリケーション制作にあたります。</p>
                            <p>チーム開発の時はメンバーと慎重なコミュニケーションをとりながら、楽しみながらプロジェクトを開発していけるよう心掛けております。</p>
                            <div className="green__bg-right-about pc-only">
                                <img src={green__bg} alt="green-background-right" />
                            </div>
                        </div>
                        <div className="About__hobby">
                            <div className="green__bg-left-about pc-only">
                                <img src={green__bg} alt="green-background-left" />
                            </div>
                            <h3 className="About__content__title">- Hobby -</h3>
                            <p>ランニング・サイクリング</p>
                            <p>アコースティックギターの演奏</p>
                            <p>球技スポーツ（バドミントン・バレー・バスケ等）</p>
                        </div>
                        <div className="About__hobby__photo">
                            <div className="hobby__guitar"><img src={guitar} alt="guitar" /></div>
                            <div className="hobby__bike"><img src={bike} alt="bike" /></div>
                            <div className="TopPage-link"><p><Link to={"../"}>Top Page →</Link></p></div>
                        </div>
                </div>
            </section>
        </>
    )
}

export default About