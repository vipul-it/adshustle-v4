import React from 'react'
import './event.css';

import dubai from '../assets/events/dubai.jpeg';
import delhi from '../assets/events/delhi.jpg';
import unknown from '../assets/events/unknown.jpeg';
import unknown1 from '../assets/events/unknown2.jpg';
import unknown2 from '../assets/events/unknown3.jpg';


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
                        <img src={dubai} alt="" />
                        <div className="event-title">
                            <GoLocation />
                            <p>Dubai</p>
                        </div>
                    </div>
                    <div className="event">
                        <img src={delhi} alt="" />
                        <div className="event-title">
                            <GoLocation />
                            <p>Delhi</p>
                        </div>
                    </div>
                    <div className="event">
                        <img src={unknown} alt="" />
                        <div className="event-title">
                            <GoLocation />
                            <p>Delhi</p>
                        </div>
                    </div>
                    <div className="event">
                        <img src={unknown1} alt="" />
                        <div className="event-title">
                            <GoLocation />
                            <p>Noida</p>
                        </div>
                    </div>
                    <div className="event">
                        <img src={unknown2} alt="" />
                        <div className="event-title">
                            <GoLocation />
                            <p>Delhi</p>
                        </div>
                    </div>
                    <div className="event">
                        <img src={dubai} alt="" />
                        <div className="event-title">
                            <GoLocation />
                            <p>Dubai</p>
                        </div>
                    </div>
                    <div className="event">
                        <img src={delhi} alt="" />
                        <div className="event-title">
                            <GoLocation />
                            <p>Delhi</p>
                        </div>
                    </div>
                    <div className="event">
                        <img src={unknown} alt="" />
                        <div className="event-title">
                            <GoLocation />
                            <p>Delhi</p>
                        </div>
                    </div>
                    <div className="event">
                        <img src={unknown1} alt="" />
                        <div className="event-title">
                            <GoLocation />
                            <p>Noida</p>
                        </div>
                    </div>
                    <div className="event">
                        <img src={unknown2} alt="" />
                        <div className="event-title ">
                            <GoLocation />
                            <p>Delhi</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default event
