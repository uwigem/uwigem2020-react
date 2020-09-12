import React, {useState} from 'react';
import './Timeline.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

/**
 * 
 * @param callback a function that passes the current year to the parent component
 */
const Timeline = props => {
	let years = [2008, 2009, 2010, 2011, 2012, 2013,
				2014, 2015, 2016, 2017, 2018, 2019];
	const [range, setRange] = useState([0, years.length-1]);

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
							><FontAwesomeIcon icon={faArrowLeft} size={"2x"}/></li>
							
						{(range[1] - range[0] > 3)?
							<>
							<li style={{margin: "0 5%"}}
								onClick={() => {
									props.callback(years[range[0]])}}
							><a>{years[range[0]]}</a></li>
							<li className="zoom-in-button"
								onClick={() => {
								zoomIn(range[0], range[1] - Math.floor((range[1] - range[0])/2))
								}}><a></a></li>
							<li style={{margin: "0 38%"}}
								onClick={() => {
									props.callback(years[Math.floor((range[1] - range[0])/2)])}}
							><a>{years[Math.floor((range[1] - range[0])/2)]}</a></li>
							<li className="zoom-in-button"
								onClick={() => {
								zoomIn(range[0] + Math.floor((range[1] - range[0])/2), range[1])
								}}><a></a></li>
							<li style={{margin: "0 5%"}}
								onClick={() => {
									props.callback(years[range[1]])}}
							><a>{years[range[1]]}</a></li>
							</>
							:
							((range[1] - range[0] == 3)?
								<>
								{years.slice(range[0], range[1]+1).map(year => {
									return <li style={{margin: "0 12%"}}
									onClick={() => {props.callback(year)}}
									><a>{year}</a></li>
								})}
								</>
								:
								<>
								{years.slice(range[0], range[1]+1).map(year => {
									return <li style={{margin: "0 16%"}}
									onClick={() => {props.callback(year)}}
									><a>{year}</a></li>
								})}
								</>
							)}

						<li className={(range[1] >= years.length-2 || range[1] - range[0] > 3)?
										"next disable" : "next"}
							onClick={() => {
								setRange([range[0] + 1, range[1] + 1])
							}}><FontAwesomeIcon icon={faArrowRight} size={"2x"}/></li>
					</ol>
				</div>
				<button class={(range[0] != 0 || range[1] != years.length-1)?
								"reset-button": "reset-button disable"}
					onClick={() => {setRange([0, years.length-1])}}
					>View Back</button>
			</div>
		</div>
	</div>
	</>
}

export default Timeline;
