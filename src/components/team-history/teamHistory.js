import './teamHistory.css';
import React, {useState, useEffect} from 'react';

const TeamHistory = props =>{
	let data = require('./team_history.json');
	const currentIndex = 1;
    const [index, setIndex] = useState(currentIndex);

	return <>
	    <div class="timeline-content">
			<p class="timeline-header">{data[index].title}</p>
			<em>{data[index].award}</em>
			<p>{data[index].content}</p>
		</div>
		<div class="timeline">
			<div class="events-wrapper">
				<div class="events">			
					<ol> 
					    <li class="prev"><a href="#0"></a></li>
						<li><a
						onClick={() => setIndex(0)}>{data[0].year}</a></li>
						<li><a
						onClick={() => setIndex(1)}>{data[1].year}</a></li>
						<li><a
						onClick={() => setIndex(2)}>{data[2].year}</a></li>
						<li class="next"><a href="#0"></a></li>
					</ol>
				</div>
			</div>
			
		</div>
	</>;
}
export default TeamHistory;