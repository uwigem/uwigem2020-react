import React from 'react';
import './SynbioForEveryone.css';
import Image from 'react-bootstrap/Image'
import Figure from 'react-bootstrap/Figure'

/**
 * @returns {React.Component}
 *                         <img width="40%" height="auto" src="PlaceholderImage/arknights6.png"/>
                            <img width="100%" height="auto" src="PlaceholderImage/arknights2.jpg"/>
                        <div width="40%" class="ml-5 d-flex flex-column">

 */
const SynbioForEveryone = (props) => {
    const title = "Synbio for Everyone";

    return <>
        <div className="m-5">
            <div className="mb-4">
                <div class="container">
                    <div class="d-flex justify-content-between" style={{
                        width: 'auto',
                        height: '100%'
                    }}>
                        <img class="synbio-img" width="40%" height="auto" src="https://placekitten.com/430/553"/>
                        <div class="ml-5">
                            <img class="synbio-img" width="100%" height="80%" src="https://placekitten.com/417/439"/>
                            <div className="synbio-view-more mt-5">
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
            </div>
            <div class="synbio-text-main">
                {props.text}
            </div>
        </div>  
    </>;
}

export default SynbioForEveryone;