import { FaRegAddressBook } from "react-icons/fa";
import { PiPhoneCallLight } from "react-icons/pi";
import { MdMailOutline } from "react-icons/md";

const Contact = () => {
        return(
                <main className="part">
                        <div className="part1">
                        <div className="toptitle">Help us with your valuable feedback!!!</div>
                         <form className="contact-form" >
                                <label htmlFor="conname" className="conname">Name</label>
                                <input 
                                        type="text"
                                        placeholder="Enter your name" 
                                        className="name-input"       
                                /><br></br><br></br>
                                <label htmlFor="conmail" className="conmail">E-Mail</label>
                                <input 
                                        type="text"
                                        placeholder="Enter your mail id"   
                                        className="mail-input"     
                                />
                                <br></br><br></br>
                                <label htmlFor="feedback" className="labfeed">Feedback</label>
                                <textarea className="feedback" placeholder="Enter your feedback"></textarea>
                                <br></br><br></br>
                                <button type="submit" className="submitbtn zoom"> Submit</button>
                        </form>
                        </div> 
                        <div className="part2">
                                <h2 className="toptitle">Contact us</h2>
                                <div className="contactdet">
                                        <div className="address"><FaRegAddressBook className="zoom"/>&nbsp;&nbsp;&nbsp;StreamLite, No-85, Thiruvallvar Street, East Tambaram, Chennai-600059 </div><br></br><br></br>
                                        <div className="mob"><PiPhoneCallLight className="zoom"/>&nbsp;&nbsp;&nbsp;8523694156</div><br></br><br></br>
                                        <div className="mailid"><MdMailOutline className="zoom"/>&nbsp;&nbsp;&nbsp;contactstreamlite@gmail.com</div><br></br><br></br>
                                        <div className="work">
                                                <div>Working Hours</div><br></br><br></br>
                                                <div className="days">Monday - Friday    :  10am to 10pm</div><br></br>
                                                <div className="days">Saturday & Sunday  :  10am to 5pm </div>
                                        </div>
                                </div>
                        </div>
                </main>
               

        )
}
export default Contact;