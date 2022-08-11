import React from "react"
import "./Contact.css"
const Contact = () =>{
    return (
        <div className = "contact-container">
            <div class="container">
                <div class="content">
                    <div class="left-side">
                        <div class="address details">
                        <i class="fa fa-map-marker"></i>
                        <div class="topic">Address</div>
                        <div class="text-one">56/1,Mamara Thottam,Ganapathy Nagar</div>
                        <div class="text-two">Coimbatore 06.</div>
                        </div>
                        <div class="phone details">
                        <i class="fa fa-phone"></i>
                        <div class="topic">Phone</div>
                        <div class="text-one">
                            +91 9788040444</div>
                        <div class="text-two">04222333718</div>
                        </div>
                        <div class="email details">
                        <i class="fa fa-envelope"></i>
                        <div class="topic">Email</div>
                        <div class="text-one">hilinetooling@rediffmail.com</div>
                        </div>
                    </div>
                    <div class="right-side">
                        <div class="topic-text">Send us a message</div><br>
                        <p>If you need any help from me or any types of queries related to website, you can send me message from here. It's my pleasure to help you.</p></br>
                        <form action="#">
                            <div class="input-box">
                                <input type="text" placeholder="Enter your name" />
                            </div>
                            <div class="input-box">
                                <input type="text" placeholder="Enter your email" />
                            </div>
                            <div class="input-box message-box">
                                <textarea placeholder="Enter your message"></textarea>
                            </div>
                            <div class="button">
                                <input type="button" value="Send Now" />
                            </div>
                            <a  style={{float:"right",textDecoration :"none",color:"#3e2093", marginTop:"25px"}} href="">back to home</a>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Contact;
