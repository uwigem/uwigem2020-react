import React, {useState} from 'react';
import './ProjectBlock.css';
import Fade from 'react-reveal/Fade';

/**
 * @returns {React.Component}
 */
const ProjectBlock = props => {

    const [expanded, toggleExpand] = useState(false);
    const [hover, toggleHover] = useState(false);

    return <>
        <div 
            className="project-block-div"
            onClick={() => toggleExpand(!expanded)}
            onMouseEnter={() => toggleHover(true)}
            onMouseLeave={() => toggleHover(false)}
            style={{
                boxShadow: hover ? '2px 2px 2px 2px #F5F5F5' : '2px 2px 2px 2px white', }}
        >
            <section className="project-block-content">
                <img 
                    className="project-block-img" 
                    src={props.img}
                    alt={props.name}
                />
                <div className="project-block-main">
                    <div className="project-block-title">
                        <h1>{props.name}</h1>
                        <h2>{props.year}</h2>
                    </div>
                    <h2 className="project-block-professor">PI: Professor {props.professor}</h2>
                    <p className="project-block-description">{props.description}</p>
                    {
                        expanded?
                            <div className="project-block-details">
                                <Fade duration={500} bottom>
                                <h2>Award Winning</h2>
                                <p>{props.details}</p>
                                </Fade>
                            </div> 
                            : null
                    }
                </div>
                {
                    expanded?
                        <div className="project-block-award"></div>
                        :
                        <div className="project-block-award">{props.award}</div>
                }
            </section>
		</div>
    </>;
}

export default ProjectBlock;