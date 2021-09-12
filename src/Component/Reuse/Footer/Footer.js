import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const noNamed = [
        { name: "Top News", link: "/top" },
        { name: "Breaking News", link: "/news" },
        { name: "ALl Type", link: "/a" },
    ]
    const ourAddress = [
        { name: "ABC Tower", link: "//google.com/map" },
        { name: "Dhaka, Bangladesh", link: "//google.com/map" },

    ]
    const news = [
        { name: "Country News", link: "/news" },
        { name: "International News", link: "/news" },
        { name: "Sports News", link: "/news" },
        { name: "Entertainment News", link: "/news" }
    ]
    const category = [
        { name: "Country News", link: "/news" },
        { name: "International News", link: "/news" },
        { name: "Sports News", link: "/news" },
        { name: "Entertainment News", link: "/news" }
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"."} menuItems={noNamed} />
                    <FooterCol key={2} menuTitle="Category" menuItems={category} />
                    <FooterCol key={3} menuTitle="News Category" menuItems={news} />
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}>
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="btn btn-primary">+88012233345</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>

    );
};

export default Footer;