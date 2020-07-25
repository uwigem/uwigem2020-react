import React, {useState} from 'react';
import './LargeTextBlock.css';
import Fade from 'react-reveal/Fade';

/**
 * @returns {React.Component}
 */
const LargeTextBlock = props => {

    const [expanded, toggleExpand] = useState(false);
    const [hover, toggleHover] = useState(false);

    return <>
        <div 
            className="large-text-div"
            onClick={() => toggleExpand(!expanded)}
            onMouseEnter={() => toggleHover(true)}
            onMouseLeave={() => toggleHover(false)}
            style={{
                backgroundColor: props.clickable && (hover || expanded) ? '#4D2393' : '#f0eafa',
                transition: 'background-color 0.5s, color 0.5s',
                color: props.clickable && (hover || expanded) ? 'white' : 'black',}}
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
                    props.clickable && expanded?
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