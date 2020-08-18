import React from 'react';
import TwoElementOverlapComponent from '../common-components/TwoElementOverlapComponent/TwoElementOverlapComponent'
import ImageCluster from '../common-components/ImageCluster/ImageCluster'
import LargeTextBlock from '../common-components/LargeTextBlock/LargeTextBlock'
import TextBlockButton from '../common-components/TextBlockButton/TextBlockButton'
import ProjectBlock from '../common-components/ProjectBlock/ProjectBlock'
import './involve.css';


/**
 * @returns {React.Component}
 */
const GetInvolve = (props) => {
    const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid enim dolore ipsa nihil blanditiis consectetur dolorem atque sint molestiae, ut dolores soluta perspiciatis temporibus quibusdam accusantium? Quo est dicta consequuntur. Voluptate laboriosam voluptas nam vel corporis? Cumque, aliquam ea, tempora, quos soluta eum esse delectus sunt quod perspiciatis rerum deserunt dolorum sint?"
    const prompt = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid enim dolore ipsa nihil blanditiis consectetur dolorem atque sint molestiae, ut dolores soluta perspiciatis temporibus quibusdam accusantium? Quo est dicta consequuntur. Voluptate laboriosam voluptas nam vel corporis? Cumque, aliquam ea, tempora, quos soluta eum esse delectus sunt quod perspiciatis rerum deserunt dolorum sint?    (CLICK TO VIEW MORE)";
    const text2 = "2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid enim dolore ipsa nihil blanditiis consectetur dolorem atque sint molestiae, ut dolores soluta perspiciatis temporibus quibusdam accusantium? Quo est dicta consequuntur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate laboriosam voluptas nam vel corporis? Cumque, aliquam ea, tempora, quos soluta eum esse delectus sunt quod perspiciatis rerum deserunt dolorum sint?";
    const project= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum iaculis facilisi leo venenatis natoque vivamus ultricies faucibus sed. Leo sit tristique scelerisque cursus egestas aenean. ";
    const project2= ["Gold Medal", "Best Educational Project"];

    return <div>
        <h1>Involvement</h1>
        <div className="involve-main">
            <div className="involve-image"></div>
            <div className="main-text">
                <h2>Get Involved</h2>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus delectus laborum autem molestiae a repellat fuga laboriosam eaque alias ea odit ipsa, modi aliquid voluptatem non accusamus ullam dolore temporibus!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus est, distinctio non doloribus cupiditate sit similique nostrum, assumenda, minus quam vero? Quos neque iusto velit doloremque non incidunt, rerum voluptas?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nemo consequatur voluptates magni ad enim pariatur ut autem sunt. Ipsam quas autem quis iusto maiores nemo assumenda labore, dicta saepe.
                </p>
            </div>
		</div>
        <div className="involve-reason">
            <div className="reason-text">
                <h2>3 Reasons to join.</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid enim dolore ipsa nihil blanditiis consectetur dolorem atque sint molestiae, ut dolores soluta perspiciatis temporibus quibusdam accusantium? Quo est dicta consequuntur.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate laboriosam voluptas nam vel corporis? Cumque, aliquam ea, tempora, quos soluta eum esse delectus sunt quod perspiciatis rerum deserunt dolorum sint?    
                </p>
            </div>
            <div className="involve-image"></div>
        </div>
        
        <LargeTextBlock 
            text={text}
            defaultBackground = '#4D2393'
            clickBackground = '#f0eafa'
        />
        <LargeTextBlock 
            title="Title"
            text={text}
        />
        <LargeTextBlock 
            text={prompt}
            expand={text2}
            clickable={true}
        />
        <LargeTextBlock 
            title="Title"
            text={prompt}
            expand={text2}
            clickable={true}
            defaultBackground = '#4D2393'
            clickBackground = '#f0eafa'
        />
        <LargeTextBlock 
            text={prompt}
            expand={text2}
            clickable={true}
            hidePrev={true}
        />
        <LargeTextBlock 
            title="Title"
            text={prompt}
            expand={text2}
            clickable={true}
            hidePrev={true}
        />

        <TextBlockButton 
            text={prompt}
            expand={text2}
        />
        <TextBlockButton 
            title="Title"
            text={prompt}
            expand={text2}
        />

        <ProjectBlock
            name="Project Name"
            year="2020"
            professor="XXXX XXXX"
            img="logo512.png"
            description={project}
            details={project2}
            award="Gold"
        />
        <ProjectBlock
            name="Project Name"
            year="2019"
            professor="XXXX XXXX"
            img="logo512.png"
            description={project}
            details={project2}
            award="Silver"
        />

    </div>;
}

export default GetInvolve;