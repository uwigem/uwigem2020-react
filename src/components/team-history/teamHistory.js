import './teamHistory.css';
import React, {useState, useEffect} from 'react';
import Fade from 'react-reveal/Fade';

const TeamHistory = props =>{
	let data = require('./team_history.json');
	const currentIndex = 2;
	const dataSize = data.length;
	const [index, setIndex] = useState(currentIndex);
	const [expanded, toggleMotto] = useState(false);
	

	return <>
		<div className="timeline-content"
			style={{visibility: expanded? "visible" : "hidden"}}>
			<div className="timeline-background"></div>
			<p className="timeline-header">{data[index].title}</p>
			<p><em>{data[index].award}</em></p>
			<p>{data[index].content}</p>
		
			<button className="exit-motto-button"
				onClick={() => {toggleMotto(false)}}
				>&lt; Back</button>
		</div>
		<div className="timeline"
			style={{visibility: !expanded? "visible" : "hidden"}}>
			<div className="events-wrapper">
				<div className="events">			
					<ol> 
						<li className={(index < 1)? "prev disable" : "prev"}
							onClick={() => {
								setIndex(index-1);
							}}
							><a></a></li>
						<li><a className={(index<= 1)? "disable" : ""}
							onClick={() => {
								setIndex(index-2);
								toggleMotto(true);
							}}>
							{(index <= 1)? "" : data[index-2].year}</a></li>
						<li><a className={(index <= 0)? "disable" : ""}
							onClick={() => {
								setIndex(index-1);
								toggleMotto(true);
							}}>
							{(index <= 0)? "" : data[index-1].year}</a></li>
						<li className="active"><a
							onClick={() => {
								setIndex(index);
								toggleMotto(true);
							}}>
							{data[index].year}</a></li>
						<li className={(index >= dataSize-1)? "disable" : ""}><a
							onClick={() => {
								setIndex(index+1);
								toggleMotto(true);
							}}>
							{(index >= dataSize-1)? "" : data[index+1].year}</a></li>
						<li className={(index >= dataSize-2)? "disable" : ""}><a
							onClick={() => {
								setIndex(index+2);
								toggleMotto(true);
							}}>
							{(index >= dataSize-2)? "" : data[index+2].year}</a></li>

						<li className={(index > dataSize-2)? "next disable" : "next"}
							onClick={() => {
								setIndex(index+1);
							}}><a></a></li>
					</ol>
				</div>
			</div>
		</div>
	
	    
	</>;
}
export default TeamHistory;