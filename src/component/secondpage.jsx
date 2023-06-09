import React from 'react'

import './secondpage.css';

const secondpage = () => {
    return (
        <>
            <div className="sec-page" >
                <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 sec-cards">
                    <div className="col-md sec-card-f">
                        <p id='discover'>What do we do<span>?</span></p>
                    </div>
                    <div className="col-md sec-card">
                        <div className="head">
                            <h3>Performance</h3>
                        </div>
                        <div className="desc">
                            <p className="text-white" id="desc-text">Our team collaborates closely with
                                advertisers and publishers to craft compelling
                                campaign pitches. By using dynamic
                                optimization campaigns, we ensure that the
                                right audience is reached at the right time,
                                resulting in the best ROAS
                                (Returns On Ad Spent).</p>
                        </div>
                    </div>
                    <div className="col-md sec-card">
                        <div className="head">
                            <h3>Marketing</h3>
                        </div>
                        <div className="desc">
                            <p id="desc-text" className="text-black my-text">With the support of our engaged
                                global supply partners, advertisers
                                can concentrate on achieving their
                                essential KPIs (Key Performance
                                Indicators) and connect with their
                                most valuable customers.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default secondpage
