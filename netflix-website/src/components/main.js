import React from 'react'
import './style.css';
import logo from './assets/Images/logo.svg'
import TV1 from './assets/Images/TV1.png'
import VD1 from './assets/Videos/VD1.m4v'
import ST1 from './assets/Images/ST1.jpg'
import TV2 from './assets/Images/TV2.png'
import VD2 from './assets/Videos/VD2.m4v'
import cartoon from './assets/Images/cartoon.png'

export default function Main() {
    return (
        <>
            <body>
                <div className="main">
                    <nav>
                        <span><img width="53" src={logo} alt=""/></span>
                        <div className="eng">
                            <button id="bt" className="btn">English<svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            </button>
                            <button className="btn btn-red-sm">Sign In</button>
                        </div>
                    </nav>
                    <div className="box">

                    </div>
                    <div className="hero">
                        <span>Unlimited movies, TV shows and more</span>
                        <span>Watch anywhere. Cancel anytime.</span>
                        <span>Ready to watch? Enter your email to create or restart your membership.</span>
                        <div className="hero-buttons">
                            <input type="text" placeholder="Enter your email"/>
                                <button className="btn btn-red">Get Started &gt;</button>
                        </div>
                    </div>
                    <div className="seperation"></div>
                </div>
                <section className="first">
                    <div>
                        <span>Enjoy on your TV</span>
                        <span>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</span>
                    </div>
                    <div className="secimg">
                        <img src={TV1} alt=""/>
                            <video src={VD1} autoPlay loop muted></video>
                    </div>
                </section>
                <div className="seperation"></div>
                <section className="first">
                    <div className="secimg">
                        <img id="st1" src={ST1} alt=""/>
                    </div>
                    <div>
                        <span>Download your shows to watch offline</span>
                        <span>Save your favourites easily and always have something to watch.</span>
                    </div>
                </section>
                <div className="seperation"></div>
                <section className="first">
                    <div>
                        <span>Watch everywhere</span>
                        <span>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</span>
                    </div>
                    <div className="secimg">
                        <img src={TV2} alt=""/>
                            <video id="vd2" src={VD2} autoPlay loop muted></video>
                    </div>
                </section>
                <div className="seperation"></div>
                <section className="first">
                    <div className="secimg">
                        <img src={cartoon} alt=""/>
                    </div>
                    <div>
                        <span>Create profiles for kids</span>
                        <span>Send children on adventures with their favourite characters in a space made just for them—free with
                            your membership.</span>
                    </div>
                </section>
                <div className="seperation"></div>

                <div className="faq">
                    <h2>Frequently asked questions</h2>
                    <div className="faqbox">
                        <span>What is Netflix?</span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 4V20M20 12H4" stroke="#141B34" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </div>
                    <div className="faqbox">
                        <span>How much does netflix cost?</span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 4V20M20 12H4" stroke="#141B34" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </div>
                    <div className="faqbox">
                        <span>Where can i watch?</span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 4V20M20 12H4" stroke="#141B34" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </div>
                    <div className="faqbox">
                        <span>How do i cancel?</span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 4V20M20 12H4" stroke="#141B34" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </div>
                    <div className="faqbox">
                        <span>Where can i watch on netflix?</span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 4V20M20 12H4" stroke="#141B34" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </div>
                    <div className="faqbox">
                        <span>Is netflix good for kids?</span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 4V20M20 12H4" stroke="#141B34" stroke-width="1.5" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </div>
                    <div className="end">
                        <span>Ready to watch? Enter your email to create or restart your membership.</span>
                        <div className="hero-buttons">
                            <input type="text" placeholder="Enter your email"/>
                                <button className="btn btn-red">Get Started &gt;</button>
                        </div>
                    </div>
                </div>

                <div className="seperation"></div>
                <footer>
                    <div>Questions? Call 000-800-919-1694</div>
                    <div className="footer">
                        <div className="footer-item">
                            <a href="/">FAQ</a>
                            <a href="/">Investor Relations</a>
                            <a href="/">Privacy</a>
                            <a href="/">Speed Test</a>
                        </div>
                        <div className="footer-item">
                            <a href="/">Help Centre</a>
                            <a href="/">Jobs</a>
                            <a href="/">Cookie Preferences</a>
                            <a href="/">Legal Notices</a>
                        </div>
                        <div className="footer-item">
                            <a href="/">Account</a>
                            <a href="/">Ways to Watch</a>
                            <a href="/">Corporate Information</a>
                            <a href="/">Only on Netflix</a>
                        </div>
                        <div className="footer-item">
                            <a href="/">Media Centre</a>
                            <a href="/">Terms of Use</a>
                            <a href="/">Contact Us</a>
                        </div>
                    </div>
                </footer>
            </body>
        </>
    )
}



