import React from "react";
import logo from '../assets/logo-green-2x.png'
const Footer = () => (
    <div>
        <footer className="footer">
            <div className="footer__logo-box">
                <img src={logo} alt="full logo" className="footer__logo" />
            </div>
            <div className="row">
                <div className="col-1-of-2">
                    <div className="footer__navigation">
                        <ul className="footer__list">
                            <li className="footer__item"><a href="" className="footer__link">Company</a></li>
                            <li className="footer__item"><a href="" className="footer__link">Contact</a></li>
                            <li className="footer__item"><a href="" className="footer__link">Careers</a></li>
                            <li className="footer__item"><a href="" className="footer__link">Privacy</a></li>
                            <li className="footer__item"><a href="" className="footer__link">Terms</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-1-of-2">
                    <div className="footer__copyright">
                        Built by <a href="https://www.linkedin.com/in/kumarnwb/" className="footer__link">Rohit Kumar</a> for learning  Advanced CSS with Sass. Copyright &copy;
                        You are allowed to use this as needed.
                    </div>
                </div>
            </div>
        </footer>
    </div>
)


export default Footer;