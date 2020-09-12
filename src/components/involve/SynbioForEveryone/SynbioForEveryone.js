import React from 'react';
import './SynbioForEveryone.css';

/**
 * @returns {React.Component}
 */
const SynbioForEveryone = (props) => {
    const title = "Synbio for Everyone";

    return <>
        <div className="m-5">
            <div className="mb-4">
                <div class="container">
                    <div class="d-flex justify-content-between" style={{
                        width: 'auto',
                        height: '400px'
                    }}>
                        <img width="40%" src="PlaceholderImage/arknights6.png"/>
                        <div width="40%" class="ml-5 d-flex flex-column">
                            <img width="100%" height="80%" src="PlaceholderImage/arknights2.jpg"/>
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