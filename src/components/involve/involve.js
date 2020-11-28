import React from 'react';
import Synbio from './SynbioForEveryone/SynbioForEveryone'
import Fundraising from './Fundraising/Fundraising'
import './involve.css';

/**
 * @returns {React.Component} a get involved page
 */
const GetInvolve = (props) => {
    const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid enim dolore ipsa nihil blanditiis consectetur dolorem atque sint molestiae, ut dolores soluta perspiciatis temporibus quibusdam accusantium? Quo est dicta consequuntur. Voluptate laboriosam voluptas nam vel corporis? Cumque, aliquam ea, tempora, quos soluta eum esse delectus sunt quod perspiciatis rerum deserunt dolorum sint?"
    const text2 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid enim dolore ipsa nihil blanditiis consectetur dolorem atque sint molestiae, ut dolores soluta perspiciatis temporibus quibusdam accusantium? Quo est dicta consequuntur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate laboriosam voluptas nam vel corporis?";

    return <>
        <h1 className="get-involve-title">Get Involved</h1>
        <hr className="get-involve-linebar"></hr>
        <Synbio text={text} />
        <Fundraising text1={text2} text2={text2}/>
    </>;
}

export default GetInvolve;