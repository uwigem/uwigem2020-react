import React from 'react';
import './BusinessCard.css';

/**
 * @returns {React.Component}
 */
const BusinessCard = (props) => {   
    return <>
        <div className="business-card-div m-5 p-5">
            <div className="business-card-title">
                WANT TO GET YOUR BUSINESS PROMOTED?
            </div>
            <div className="business-card-description mt-3">
                Our sponsors get attentions from 100+ countries and 500+ cities
            </div>
            <div className="business-card-more">
                by supporting this yearly international competition
            </div>
            <div className="business-card-contact mt-5 d-flex">
                <div>Contact: </div>
                <div className="ml-5 d-flex">
                    <div className="mr-5">
                        <a href="https://www.facebook.com/UWiGEMTeam/">
                        <img src="https://image.flaticon.com/icons/png/512/281/281769.png" alt="Washington iGEM Facebook" style={{height: '50px', width: '50px', padding: '1px'}}/></a>
                    </div>
                    <div className="mr-5">
                        <a href="https://www.instagram.com/washington_igem/">
                        <img src="https://vignette.wikia.nocookie.net/logopedia/images/f/fb/Facebook_icon_2013.svg/revision/latest/scale-to-width-down/340?cb=20130501121248" alt="Washington iGEM Instagram" style={{height: '50px', width: '50px', padding: '1px'}}/></a>
                    </div>
                    <div>
                        <a href="https://github.com/uwigem/uwigem2017">
                        <img src="https://i.stack.imgur.com/22WR2.png" alt="Washington iGEM Github" style={{height: '50px', width: '50px', padding: '1px'}}/></a>
                    </div>
                </div>
            </div>
        </div>
    </>;
}

export default BusinessCard;