import React from 'react';
import './Fundraising.css';

/**
 * @returns {React.Component}
 */
const Fundraising = (props) => {
    const title = "FUNDRAISING";

    return <>
        <div className="m-5">
            <div className="container">
                <div className="d-flex justify-content-between" style={{
                    width: 'auto',
                    height: '100%'
                }}>
                    <div className="fundraising-left">
                        <div>
                            <div className="fundraising-text-block-1">
                                {props.text}
                            </div>
                        </div>
                        <div>
                            <div className="fundraising-bottom-left-img" 
                                style={{backgroundImage: 'url(https://placekitten.com/800/600)'}}/>
                        </div>
                    </div>
                    <div className="fundraising-right">
                        <div className="fundraising-top-right-img"
                            style={{backgroundImage: 'url(https://placekitten.com/800/500)'}}/>
                        <div>
                            <div className="fundraising-text-block-2">
                                {props.text}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fundraising-text">
                    <h2 style={{fontSize: "10vw"}}>{title}</h2>
                </div>
            </div>
        </div>  
    </>;
}

export default Fundraising;