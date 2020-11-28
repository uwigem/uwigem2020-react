import React from 'react';
import './SynbioForEveryone.css';

/**
 * @param text description of the synbio team
 * @returns {React.Component} a synbio subteam poster
 */
const SynbioForEveryone = (props) => {

    return <>
        <div className="m-5">
            <div className="container">
                <div className="d-flex justify-content-between" style={{
                    width: 'auto',
                    height: '100%'
                }}>
                    <div className="synbio-img-left" 
                        style={{backgroundImage: 'url(https://placekitten.com/700/800)'}}/>
                    <div>
                        <div className="synbio-img-right"
                            style={{backgroundImage: 'url(https://placekitten.com/800/900)'}}/>
                        <div className="synbio-view-more mt-5" style={{fontSize: '5vw'}}>
                            <a href="http://students.washington.edu/uwigem/">-{'>'}View More</a>
                        </div>
                    </div>
                </div>
                <div className="synbio-text-block-1">
                    <h2>SynBio</h2>
                </div>
                <div className="synbio-text-block-2">
                    <h2>for</h2>
                </div>
                <div className="synbio-text-block-3">
                    <h2>Everyone</h2>
                </div>
                <div className="synbio-text-main mt-3">
                    {props.text}
                </div>
            </div>
        </div>  
    </>;
}

export default SynbioForEveryone;