import React, { Component } from 'react';

export default class CircleDetails extends Component {
  render = () => {
  	const { trello, countUp } = this.props;
  	const { todo, inProgress, complete } = trello;
    return (
      <div className='circle-details'>
      	<div className='stat-wrapper'>
    			<div style={{borderTop: '3px solid #FC4645'}}>
    				<h5 style={{
    					color: '#FC4645',
    					opacity: countUp ? 1 : 0,
    					transform: countUp ? 'scale(1)' : 'scale(0.75)'
    				}}>{todo.length}</h5>
    				<h5>Pending</h5>
    			</div>
    			<div style={{borderTop: '3px solid #65AAFF'}}>
    				<h5 style={{
    					color: '#65AAFF',
    					opacity: countUp ? 1 : 0,
    					transform: countUp ? 'scale(1)' : 'scale(0.75)'
    				}}>{inProgress.length}</h5>
    				<h5>In Progress</h5>
    			</div>
    			<div style={{borderTop: '3px solid #35FA7E'}}>
    				<h5 style={{
    					color: '#35FA7E',
    					opacity: countUp ? 1 : 0,
    					transform: countUp ? 'scale(1)' : 'scale(0.75)'
    				}}>{complete.length}</h5>
    				<h5>Completed</h5>
    			</div>
    		</div>
      </div>
    );
  }
}