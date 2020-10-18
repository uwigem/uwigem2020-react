import React, {useState} from 'react';
import './ProjectBlock.css';

/**
 * @param project a project object that conetains the following props
 *   @param medal medal of the project (a number)
 *   @param awards detail information about the awards
 *   @param description description of the project
 *   @param details details of the description, shown in modal only
 *   @param img image of the project
 *   @param name project name
 *   @param professor professor name
 *   @param year the year of the project
 * @param callback a callback function of the Archive component
 * @returns {React.Component}
 */
const ProjectBlock = (props) => {
    const [effect, setEffect] = useState({
        expanded: false,
        hover: false
    });
    const medals = ["Gold", "Silver", "Bronze"];

    const handleClick = () => {
        setEffect({expanded: true})
        props.callback(props.project);
    }

    return <>
        <div 
            className="project-block-div"
            onClick={() => handleClick()}
            onMouseEnter={() => setEffect({hover: true})}
            onMouseLeave={() => setEffect({hover: false})}
            style={{
                boxShadow: effect.hover ? '2px 2px 2px 2px #dbdbdb' : '2px 2px 2px 2px white',
                cursor: effect.hover? 'pointer' : 'auto' }}
        >
            <section className="project-block-content">
                <img 
                    className="project-block-img" 
                    src={props.project.img}
                    alt={props.project.name}
                />
                <div className="project-block-main">
                    <div className="project-block-title">
                        <h1>{props.project.name}</h1>
                        <h2>{props.project.year}</h2>
                    </div>
                    <h2 className="project-block-professor">PI: Professor {props.project.professor}</h2>
                    <p className="project-block-description">{props.project.description}</p>
                </div>
                <div className="project-block-award">{medals[props.project.medal]}</div>
            </section>
		</div>
    </>;
}

export default ProjectBlock;