import React from 'react'
import './event.css';



import p1 from "../assets/ourpresence/1.jpg";
import p2 from "../assets/ourpresence/2.jpg";
import p3 from "../assets/ourpresence/3.jpg";
import p4 from "../assets/ourpresence/4.jpg";
import p5 from "../assets/ourpresence/5.jpg";
import p6 from "../assets/ourpresence/6.jpg";
import p7 from "../assets/ourpresence/7.jpg";
import p8 from "../assets/ourpresence/8.jpg";
import p9 from "../assets/ourpresence/9.jpg";


import { GoLocation } from 'react-icons/go';

const event = () => {
    return (
        <>
            <div className="team-container">
                <div className="team-heading t-head">
                    <p>Our <span>Presence</span></p>
                </div>
                <div className="event-carousel">
                    <div className="event">
                        <img src={p1} alt="" />                       
                    </div>
                    <div className="event">
                        <img src={p2} alt="" />                       
                    </div>
                    <div className="event">
                        <img src={p3} alt="" />                       
                    </div>
                    <div className="event">
                        <img src={p4} alt="" />                       
                    </div>
                    <div className="event">
                        <img src={p5} alt="" />                       
                    </div>
                    <div className="event">
                        <img src={p6} alt="" />                       
                    </div>
                    <div className="event">
                        <img src={p7} alt="" />                       
                    </div>
                    <div className="event">
                        <img src={p8} alt="" />                       
                    </div>
                    <div className="event">
                        <img src={p9} alt="" />                       
                    </div>
                    
                    
                </div>
            </div>
        </>
    )
}

export default event
