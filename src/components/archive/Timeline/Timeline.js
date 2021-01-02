import React, {useState} from 'react';
import './Timeline.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare, faArrowLeft, faArrowRight, faUndo, faCircle } from '@fortawesome/free-solid-svg-icons';

/**
 * @param callback a function that passes the current year to the parent component
 * @returns {React.Component} a timeline component of showing different components
 */
const Timeline = props => {
	let data = [].concat(require('../archive.json'));
	// sort projects by ascending order of years
	data.sort((a, b) => a.year - b.year);

	const [range, setRange] = useState([0, data.length-1]);

	const zoomIn = (start, end) => {
		setRange([start, end]);
	}

	return <>
	<div className="timeline-wrapper">
		<div className="timeline">
			<div className="events-wrapper">
				<div className="events">
					<ol> 
						<li className={(range[0] < 1 || range[1] - range[0] > 3)? 
										"prev disable" : "prev"}
							onClick={() => {
								setRange([range[0] - 1, range[1] - 1])
							}}
							><FontAwesomeIcon icon={faArrowLeft}/></li>
							
						{(range[1] - range[0] > 3)?
							<>
							<li style={{margin: "0 9.5% 0 2%"}}
								onClick={() => {
									props.callback(data[range[0]])}}>
								<button>{data[range[0]].year}</button>
							</li>
							<li className="zoom-in-button"
								style={{margin: "0 12%"}}
								onClick={() => {
									zoomIn(range[0], range[1] - Math.floor((range[1] - range[0])/2))}}>
								<button><FontAwesomeIcon icon={faPlusSquare} size={"2x"}/></button>
							</li>
							<li style={{margin: "0 12%"}}
								onClick={() => {
									props.callback(data[Math.floor((range[1] - range[0])/2)])}}>
								<button>{data[Math.floor((range[1] - range[0])/2)].year}</button>
							</li>
							<li className="zoom-in-button"
								style={{margin: "0 12%"}}
								onClick={() => {
									zoomIn(range[0] + Math.floor((range[1] - range[0])/2), range[1])}}>
								<button><FontAwesomeIcon icon={faPlusSquare} size={"2x"}/></button>
							</li>
							<li style={{margin: "0 2% 0 9.5%"}}
								onClick={() => {
									props.callback(data[range[1]])}}>
								<button>{data[range[1]].year}</button>
							</li>
							</>
							:
							((range[1] - range[0] === 3)?
								<>
								{data.slice(range[0], range[1]+1).map(project => {
									return <li style={{margin: "0 12%"}}
									onClick={() => {props.callback(project)}}
									><button>{project.year}</button></li>
								})}
								</>
								:
								<>
								{data.slice(range[0], range[1]+1).map(project => {
									return <li style={{margin: "0 16%"}}
									onClick={() => {props.callback(project)}}
									><button>{project.year}</button></li>
								})}
								</>
							)}

						<li className={(range[1] >= data.length-1 || range[1] - range[0] > 3)?
										"next disable" : "next"}
							onClick={() => {
								setRange([range[0] + 1, range[1] + 1])
							}}><FontAwesomeIcon icon={faArrowRight}/></li>
					</ol>
				</div>
			</div>
		</div>
		<div className="reset-wrapper">
			{(range[0] !== 0 || range[1] !== data.length-1)?
				<button class={"reset-button"}
					onClick={() => {setRange([0, data.length-1])}}
					><FontAwesomeIcon icon={faUndo}/></button>
				:
				<FontAwesomeIcon class={"reset-button-default"} icon={faCircle}/>
			}
		</div>
	</div>
	</>
}

export default Timeline;
