import React from 'react';
import './SynbioForEveryone.css';

/**
 * @returns {React.Component} a synbio subteam poster
 */
export default function SynbioForEveryone() {
    const synbioText = "Synbio for Everyone (SFE) is a nonprofit organization located in Washington State that was founded by members of the 2019 WA iGEM Outreach Team after receiving the Best Education and Public Engagement Award. SFE  strives to improve synthetic biology education accessibility and reduce educational equity gaps in STEM by writing curriculum and conducting educational outreach events. In the past, SFE’s curriculum has been translated into 16 different languages and implemented in a variety of settings with collaborators globally. SFE also promotes awareness about synthetic biology research and ethical issues by hosting a panel event featuring experts every year.  Overall, Synbio for Everyone strives for growth and collaboration across disciplines and across economic barriers, forging new paths in the future of synthetic biology education and its implications for the world."

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
                            <a href="https://synbioforeveryone.org/Home">-{'>'}View More</a>
                        </div>
                    </div>
                </div>
                <div className="synbio-text-block">
                    <div className="synbio-text-block-1">
                        <p>SynBio</p>
                    </div>
                    <div className="synbio-text-block-2">
                        <p>For</p>
                    </div>
                    <div className="synbio-text-block-3">
                        <p>Everyone</p>
                    </div>    
                </div>
                
                <div className="synbio-text-main mt-3">
                    {synbioText}
                </div>
            </div>
        </div>  
    </>;
}
