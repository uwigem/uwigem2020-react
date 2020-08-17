import Fade from 'react-reveal/Fade';
import React, { useState } from 'react';
import './LargeTextBlock.css';

/**
 * @param clickable if the large text block is clicable
 * @param clickBackground that gets changed when hover/clicked
 * @param defaultBackground default background for displaying text
 * @param expand text to be shown when the text block is expanded
 * @param hidePrev hide the previous text if this is set to true
 * @param text default text to be displayed
 * @param title the title of the textblock
 * @returns {React.Component}
 */
const LargeTextBlock = (props) => {
    const [expanded, setExpanded] = useState(false);
    const [hover, setHover] = useState(false);
    const defaultBackground = props.defaultBackground;
    const clickBackground = props.clickBackground;

    return <>
        <div 
            className="large-text-div"
            onClick={() => setExpanded(!expanded)}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{
                backgroundColor: props.clickable && (hover || expanded) ? defaultBackground : clickBackground,
                transition: 'background-color 0.5s, color 0.5s',
                color: props.clickable && (hover || expanded) ? 'white' : 'black'
            }}
        >
            <section className="large-text-content">
                <h1
                    style={{
                    transition: 'color 0.5s',
                    color: props.clickable && hover ? 'white' : '#4D2393', }}
                >
                {props.title}
                </h1>
                {
                    props.hidePrev && expanded ? null : <p>{props.text}</p>
                }
                {
                    props.clickable && expanded ?
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

export default LargeTextBlock;