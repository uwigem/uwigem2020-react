import React, {useState, useEffect} from 'react';
import ProjectBlock from '../common-components/ProjectBlock/ProjectBlock'
import Timeline from './Timeline/Timeline'
import './archive.css';

/**
 * @returns {React.Component}
 */
const Archive = (props) => {
    const [projects, setProjects] = useState([]);
    const [currentYear, setYear] = useState(null);
    let medals = ["Gold", "Silver", "Bronze"];

    // sort projects by medal from Gold to Bronze
    useEffect(() => {
       let data = require('./archive.json');
       data.sort((a, b) => (a.medal > b.medal)? (a.medal - b.medal) : (b.year - a.year));
       setProjects(data);
    }, []);

    // updates the currentYear
    const timelineCallback = (year) => {
        setYear(year);
    }
    
    
    return <div>
        <h1 className="archive-project-title">Projects</h1>
        <hr className="archive-project-linebar"></hr>
        <Timeline callback={timelineCallback}></Timeline>
        {projects.map(project => {
            return <ProjectBlock
                        name={project.name}
                        year={project.year}
                        professor={project.professor}
                        img={project.img}
                        description={project.description}
                        details={project.details}
                        awardWinning={project.awards}
                        award={medals[project.medal]}
                        show={(currentYear == project.year)? true : false}
                        callback={timelineCallback}
                    />
        })}
        
    </div>;
}

export default Archive;