import React, {useState, useEffect} from 'react';
import ProjectBlock from './ProjectBlock/ProjectBlock'
import Timeline from './Timeline/Timeline'
import ProjectModal from './ProjectModal/ProjectModal'
import './archive.css';

/**
 *  @returns {React.Component} represents the archive page
 */
const Archive = (props) => {
    const [projects, setProjects] = useState([]);
    const [modalContent, setModal] = useState(null);

    // sort projects by medal from Gold to Bronze
    useEffect(() => {
       let data = [].concat(require('./archive.json'));
       data.sort((a, b) => (a.medal > b.medal)? (a.medal - b.medal) : (b.year - a.year));
       setProjects(data);
    }, []);

    // updates the currentYear
    const timelineCallback = (project) => {
        setModal(project);
    }
    
    return <div>
        <h1 className="archive-project-title">Projects</h1>
        <hr className="archive-project-linebar"></hr>
        <Timeline callback={timelineCallback}></Timeline>
        {
            // if there is something being displayed, show the project modal
            modalContent != null?
                <ProjectModal 
                    project={modalContent}
                    callback={timelineCallback}
                />
                :
                null
        }
        {
            // set the background to be all the projects available
            projects.map(project => {
            return <ProjectBlock
                        project={project}
                        callback={timelineCallback}
                    />
        })}
    </div>;
}

export default Archive;