import React, {useState} from 'react';
import './TextBlockButton.css';
import Fade from 'react-reveal/Fade';

/**
 * @returns {React.Component}
 */
const TextBlockButton = props => {

    const [expanded, toggleExpand] = useState(false);
    const [hover, toggleHover] = useState(false);

    return <>
        <div className="text-button-div">
            <section className="text-button-content">
                <h1>
                    {props.title}
                </h1>
                <p>{props.text}</p>
                <div className="text-button-button">
                    <button
                        onClick={() => toggleExpand(!expanded)}
                        style={{
                            backgroundColor: (hover || expanded) ? '#f0eafa' : '#4D2393',
                            transition: 'background-color 0.5s, color 0.5s',
                            color: (hover || expanded) ? 'black' : 'white',}}
                    >More</button>
                </div>
                {
                    expanded?
                        <div>
                            
                            <Fade duration={500} bottom>
                            <p>{props.expand}</p>
                            </Fade>
                        </div> 
                        : null
                }
            </section>
		</div>
    </>;
}

export default TextBlockButton;