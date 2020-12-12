import React from 'react';
import Synbio from './SynbioForEveryone/SynbioForEveryone'
// import Fundraising from './Fundraising/Fundraising'
// import TeamStructure from '../team/teamStructure/teamStructure'
import RecruitmentMenu from './Recruitment/RecruitmentMenu'
import './involve.css';

/**
 * @returns {React.Component} a get involved page
 */
const GetInvolve = (props) => {
    const synbio = "Synbio for Everyone (SFE) is a nonprofit organization located in Washington State that was founded by members of the 2019 WA iGEM Outreach Team after receiving the Best Education and Public Engagement Award. SFE  strives to improve synthetic biology education accessibility and reduce educational equity gaps in STEM by writing curriculum and conducting educational outreach events. In the past, SFE’s curriculum has been translated into 16 different languages and implemented in a variety of settings with collaborators globally. SFE also promotes awareness about synthetic biology research and ethical issues by hosting a panel event featuring experts every year.  Overall, Synbio for Everyone strives for growth and collaboration across disciplines and across economic barriers, forging new paths in the future of synthetic biology education and its implications for the world."
    // const text2 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid enim dolore ipsa nihil blanditiis consectetur dolorem atque sint molestiae, ut dolores soluta perspiciatis temporibus quibusdam accusantium? Quo est dicta consequuntur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate laboriosam voluptas nam vel corporis?";

    return <>
        <h1 className="get-involve-title">Get Involved</h1>
        <hr className="get-involve-linebar"></hr>
        <RecruitmentMenu />
        <Synbio text={synbio} />
        {/* <Fundraising text1={text2} text2={text2}/> */}
    </>;
}

export default GetInvolve;