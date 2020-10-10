import React from 'react';
import './SynbioForEveryone.css';

/**
 * @returns {React.Component}
 *                         <img width="40%" height="auto" src="PlaceholderImage/arknights6.png"/>
                            <img width="100%" height="auto" src="PlaceholderImage/arknights2.jpg"/>
                        <div width="40%" class="ml-5 d-flex flex-column">

 */
const SynbioForEveryone = (props) => {

    return <>
        <div class="m-5">
            <div class="container">
                <div class="d-flex justify-content-between" style={{
                    width: 'auto',
                    height: '100%'
                }}>
                    <div class="synbio-img-left" 
                        style={{backgroundImage: 'url(https://placekitten.com/700/800)'}}/>
                    <div>
                        <div class="synbio-img-right"
                            style={{backgroundImage: 'url(https://placekitten.com/800/900)'}}/>
                        <div className="synbio-view-more mt-5" style={{fontSize: '5vw'}}>
                            <a href="http://students.washington.edu/uwigem/">-{'>'}View More</a>
                        </div>
                    </div>
                </div>
                <div class="synbio-text-block-1">
                    <h2>SynBio</h2>
                </div>
                <div class="synbio-text-block-2">
                    <h2>for</h2>
                </div>
                <div class="synbio-text-block-3">
                    <h2>Everyone</h2>
                </div>
            </div>
            <div class="synbio-text-main mt-3">
                    {props.text}
            </div>
        </div>  
    </>;
}

export default SynbioForEveryone;