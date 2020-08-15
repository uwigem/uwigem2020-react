import './teamHistory.css';
import React, {useState, useEffect} from 'react';
import Fade from 'react-reveal/Fade';

const TeamHistory = props =>{
	let data = require('./team_history.json');
	const currentIndex = 2;
	const dataSize = data.length;
	const [index, setIndex] = useState(currentIndex);
	const [left, setDir] = useState(false);
	const [fade, setFade] = useState(false);
	

	return <>
	    <div className="timeline-content">
			<Fade left={!left} right={left} spy={fade} duration={300}>
				<p className="timeline-header">1111{data[index].title}</p>
				<p><em>{data[index].award}</em></p>
				<p>{data[index].content}</p>
			</Fade>
			
		</div>
		<div className="timeline">
			<div className="events-wrapper">
				<div className="events">			
					<ol> 
						<li className={(index < 1)? "prev disable" : "prev"}
							onClick={() => {
								setIndex(index-1);
								setDir(false);
								setFade(!fade);
							}}
							><a></a></li>
						<li><a className={(index<= 1)? "disable" : ""}
							onClick={() => {
								setIndex(index-2);
								setDir(false);
								setFade(!fade);
							}}>
							{(index <= 1)? "" : data[index-2].year}</a></li>
						<li><a className={(index <= 0)? "disable" : ""}
							onClick={() => {
								setIndex(index-1);
								setDir(false);
								setFade(!fade);
							}}>
							{(index <= 0)? "" : data[index-1].year}</a></li>
						<li className="active"><a
							onClick={() => setIndex(index)}>{data[index].year}</a></li>
						<li className={(index >= dataSize-1)? "disable" : ""}><a
							onClick={() => {
								setIndex(index+1);
								setDir(true);
								setFade(!fade);
							}}>
							{(index >= dataSize-1)? "" : data[index+1].year}</a></li>
						<li className={(index >= dataSize-2)? "disable" : ""}><a
							onClick={() => {
								setIndex(index+2);
								setDir(true);
								setFade(!fade);
							}}>
							{(index >= dataSize-2)? "" : data[index+2].year}</a></li>

						<li className={(index > dataSize-2)? "next disable" : "next"}
							onClick={() => {
								setIndex(index+1);
								setDir(true);
								setFade(!fade);
							}}><a></a></li>
					</ol>
				</div>
			</div>
			
		</div>
	</>;
}
export default TeamHistory;