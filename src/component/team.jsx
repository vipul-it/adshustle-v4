import React from 'react'
import './team.css';
import Team from '../helper/team';

const team = () => {
    return (
        <>
            <div className="team-container" id="team">
                <div className="team-heading">
                    <p>Meet The <span>Hustlers</span></p>
                </div>
                <div className="team-details">
                    <div className="container team-card">
                        <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-4 teams">
                            {Team.map((value, index) => (
                                <div className="col-md team" key={index}>
                                    <div className="team-img">
                                        <img src={value.img} alt="" />
                                    </div>
                                    <div className="team-name">
                                        <p className="text-black">{value.name}</p>
                                    </div>
                                    <div className="team-role">
                                        <p className="text-black">{value.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default team
