import { FaCopyright } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { BiLogoPlayStore } from "react-icons/bi";

const Footer = () => {
        return(
                <footer className="footer">
                        <div>
                                <ul className="footli">
                                        <li>Terms of use</li>
                                        <li>Privacy-Policy</li>
                                        <li>Blog</li>
                                        <li>FAQ</li>
                                </ul>
                                <div className="footdet">
                                        {<FaCopyright className="zoom"/>} 2024 STREAMLITE. All Rights Reserved. All videos and shows on this platform are trademarks of, and all related images and content are the property of, Streamit Inc. Duplication and copy of this is strictly prohibited. All rights reserved.
                                </div>
                        </div>
                        <div className="media">
                                <h3>Follow Us</h3>
                                <FaFacebook className="icons zoom" /><FaTwitter className="icons zoom" /><FaInstagram className="icons zoom" />
                        </div>
                        <div className="apps">
                                <h3>StreamLite Apps</h3>
                                <BiLogoPlayStore className="icons zoom"  />
                        </div>
                </footer>
        )
}
export default Footer;