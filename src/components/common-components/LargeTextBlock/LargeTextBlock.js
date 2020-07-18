import React, {useState} from 'react';
import './LargeTextBlock.css';


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
                backgroundColor: hover ? '#4D2393' : '#f0eafa',
                transition: 'background-color 0.5s, color 0.5s',
                color: hover ? 'white' : 'black',}}
        >
            <section className="large-text-content">
                <h1
                    style={{
                        transition: 'color 0.5s',
                        color: hover ? 'white' : '#4D2393', }}
                >
                    {props.title}
                </h1>
                <p>{props.text}</p>
            </section>
		</div>
    </>;
}

export default LargeTextBlock;