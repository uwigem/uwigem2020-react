import React from 'react';
import './Fundraising.css';

/**
 * @returns {React.Component}
 */
const Fundraising = (props) => {
    const title = "FUNDRAISING";

    return <>
        <div class="m-5">
            <div class="container">
                <div class="d-flex justify-content-between" style={{
                    width: 'auto',
                    height: '100%'
                }}>
                    <div class="fundraising-left">
                        <div>
                            <div class="fundraising-text-block-1">
                                {props.text}
                            </div>
                        </div>
                        <div>
                            <div class="fundraising-bottom-left-img" 
                                style={{backgroundImage: 'url(https://placekitten.com/800/600)'}}/>
                        </div>
                    </div>
                    <div class="fundraising-right">
                        <div class="fundraising-top-right-img"
                            style={{backgroundImage: 'url(https://placekitten.com/800/500)'}}/>
                        <div>
                            <div class="fundraising-text-block-2">
                                {props.text}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="fundraising-text">
                    <h2 style={{fontSize: "10vw"}}>{title}</h2>
                </div>
            </div>
        </div>  
    </>;
}

export default Fundraising;