import React, {useState, useEffect} from 'react';
import ProjectBlock from '../common-components/ProjectBlock/ProjectBlock'
import Timeline from './Timeline/Timeline'
import ProjectModal from '../common-components/ProjectModal/ProjectModal'
import './archive.css';

/**
 * @returns {React.Component}
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
            modalContent != null?
                <ProjectModal 
                    project={modalContent}
                    callback={timelineCallback}
                />
                :
                null
        }
        {projects.map(project => {
            return <ProjectBlock
                        project={project}
                        callback={timelineCallback}
                    />
        })}
    </div>;
}

export default Archive;