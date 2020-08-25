import React, {useState} from 'react';
import './ProjectBlock.css';
import ProjectModal from '../ProjectModal/ProjectModal'

/**
 * @param award award of the project (the best one)
 * @param awardWinning detail information about the awards
 * @param description description of the project
 * @param details details of the description, shown in modal only
 * @param awardWinning detail information about the awards
 * @param img image of the project
 * @param name project name
 * @param professor professor name
 * @param year the year of the project
 * @returns {React.Component}
 */
const ProjectBlock = (props) => {

    const [expanded, toggleExpand] = useState(false);
    const [hover, toggleHover] = useState(false);

    return <>
        <div 
            className="project-block-div"
            onClick={() => toggleExpand(!expanded)}
            onMouseEnter={() => toggleHover(true)}
            onMouseLeave={() => toggleHover(false)}
            style={{
                boxShadow: hover ? '2px 2px 2px 2px #dbdbdb' : '2px 2px 2px 2px white', }}
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
                </div>
                <div className="project-block-award">{props.award}</div>
                {
                    expanded?
                        <ProjectModal 
                            show={true} 
                            name={props.name}
                            year={props.year}
                            professor={props.professor}
                            img={props.img}
                            description={props.details}
                            awardWinning={props.awardWinning}
                            award={props.award}
                        />
                        :
                        null
                }
            </section>
		</div>
    </>;
}

export default ProjectBlock;