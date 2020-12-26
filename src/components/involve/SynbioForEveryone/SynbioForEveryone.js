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
                        style={{backgroundImage: 'url(https://depts.washington.edu/advis104/wordpress/wp-content/uploads/2020/04/T-Washington-SSF1-1024x768.jpg)'}}/>
                    <div>
                        <div className="synbio-img-right"
                            style={{backgroundImage: 'url(http://students.washington.edu/uwigem/sitdownsynbio/img/sitdown2018.png)'}}/>
                        <div className="synbio-view-more mt-5" style={{fontSize: '5vw'}}>
                            <a href="http://students.washington.edu/uwigem/sitdownsynbio/">-{'>'}View More</a>
                        </div>
                    </div>
                </div>
                <div className="synbio-text-block-1">
                    <h2>SynBio</h2>
                </div>
                <div className="synbio-text-block-2">
                    <h2>For</h2>
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