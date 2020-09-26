import React from 'react';
import ProjectBlock from '../common-components/ProjectBlock/ProjectBlock'
import './archive.css';

/**
 * @returns {React.Component}
 */
const Archive = (props) => {
    const longText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid enim dolore ipsa nihil blanditiis consectetur dolorem atque sint molestiae, ut dolores soluta perspiciatis temporibus quibusdam accusantium? Quo est dicta consequuntur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate laboriosam voluptas nam vel corporis? Cumque, aliquam ea, tempora, quos soluta eum esse delectus sunt quod perspiciatis rerum deserunt dolorum sint? 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid enim dolore ipsa nihil blanditiis consectetur dolorem atque sint molestiae, ut dolores soluta perspiciatis temporibus quibusdam accusantium? Quo est dicta consequuntur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate laboriosam voluptas nam vel corporis? Cumque, aliquam ea, tempora, quos soluta eum esse delectus sunt quod perspiciatis rerum deserunt dolorum sint?";
    const project= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum iaculis facilisi leo venenatis natoque vivamus ultricies faucibus sed. Leo sit tristique scelerisque cursus egestas aenean. ";
    const project2= ["Gold Medal", "Best Educational Project"];
    const project3 = "Lappland's real identity is unknown, her background a mystery. She has demonstrated impressive destructive prowess in tactical assaults and search-and-destroy missions. She is currently a special ops Operator for Rhodes Island."
    const archive1 = "We have struggled to understand Lappland's personality. Some consider her simply mad, despite how polite and personable she can be in daily life. She actively seeks out people to converse with, indulging her taste for gallows humor, eager to see how her conversation partners will respond. Still, we know Lappland to be a dangerous element, and even at her most well-behaved, she remains frightening. Lappland has been marked for close medical observation due to severe symptoms of Oripathy. According to as yet unconfirmed reports, Lappland might have come from a certain family in Siracusa known for moving in certain dangerous circles, but scouring all active and inactive lists involving Siracusa failed to connect Lappland to any of the families. Because of the extreme risk involved in probing the Siracusan families, the investigation has been terminated."
    const archive2 = "Lappland's Oripathy symptoms go beyond the physical to cause an abnormal obsession toward a certain target of hers, even spurring her to excessive violence. Although Rhodes Island has exerted some degree of control over her behavior while deployed, she still does more or less whatever she wants in battle, which has been a problem for coordinated operations with her teammates. Lappland's rather unique symptoms seem to enhance her fighting abilities--very rare among Infected. Her weapon, a specially designed eastern-style sword, complements her Arts. She appears to wield her Originium power untrained, through raw talent alone. Even though Lappland's powers decay rapidly when released, her deceptive fighting style and explosive offensive abilities have allowed her to master her weaknesses. Furthermore, Lappland's uncanny ability to discern weakness neutralizes virtually any advantage an opponent with Originium power or other special ability may have. She is able to counter her enemy's attacks completely after only a few moments of observation."
    const archive3 = "Based on scattered reports and eyewitness accounts, Operator Lappland has a close personal connection to Penguin Logistics employee Texas, a liaison from the company to Rhodes Island. Texas, for her part, makes a concerted effort to avoid contact with Lappland. Still, in situations where they were forced to work together, Lappland has not gone out of her way to antagonize Texas. In fact, she seems to be taking some degree of pleasure in Texas playing hard-to-get, as it were. Lappland treats other PL personnel cordially, but they have not warmed to her, and their meetings are always rather awkward (though thankfully rare). Lappland tries to get along with other Rhodes Island Operators, as long as no one gets in her way."
    
    return <div>
        <h1 className="archive-project-title">Projects</h1>
        <hr className="archive-project-linebar"></hr>
        <ProjectBlock
            name="Project Name"
            year="2020"
            professor="XXXX XXXX"
            img="https://placekitten.com/503/303"
            description={project3}
            details={archive1}
            awardWinning={project2}
            award="Gold"
        />
        <ProjectBlock
            name="Project Name"
            year="2019"
            professor="XXXX XXXX"
            img="https://placekitten.com/503/303"
            description={project3}
            details={archive2}
            awardWinning={project2}
            award="Silver"
        />
        <ProjectBlock
            name="Project Name"
            year="2018"
            professor="XXXX XXXX"
            img="https://placekitten.com/503/303"
            description={project3}
            details={archive3}
            awardWinning={project2}
            award="Gold"
        />
        <ProjectBlock
            name="Project Name"
            year="2017"
            professor="XXXX XXXX"
            img="https://placekitten.com/503/303"
            description={project}
            details={longText}
            awardWinning={project2}
            award="Best"
        />
        <ProjectBlock
            name="Project Name"
            year="2016"
            professor="XXXX XXXX"
            img="https://placekitten.com/503/303"
            description={project}
            details={longText}
            awardWinning={project2}
            award="BestE"
        />
    </div>;
}

export default Archive;