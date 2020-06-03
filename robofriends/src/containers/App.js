import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Cardlist from '../components/Cardlist';
import ErrorBoundry from '../components/ErrorBoundry';
// import { robots } from '../components/robots';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';

import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = (state) =>{
	return {
		searchField : state.searchRobots.searchField,
		robots : state.requestRobots.robots,
		isPending : state.requestRobots.isPending,
		error : state.requestRobots.error
	}
}

const mapDispatchToProps = (dispatch) =>{
	return{
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestRobots : () => dispatch(requestRobots())
	}
}

class App extends Component{

	// constructor(){
	// 	super();
	// 	this.state = {
	// 		robots : []
	// 	}
	// 	console.log('constructor');
	// }


	componentDidMount(){
		// console.log(this.props.store)
		// fetch('https://jsonplaceholder.typicode.com/users')
		// .then(response => response.json())
		// .then(users => this.setState({robots: users}))
		this.props.onRequestRobots()
	}

	render(){
		// const { robots } = this.state;
		const { searchField, onSearchChange, robots, isPending} = this.props; 
		const filteredRobots = robots.filter(robot =>{
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		})

		// return !robots.length ?
		return isPending ?
			<h1 className='tc pa3'>Loading...</h1> :
			(
				<div className = 'tc'>
					<h1 className='f1'>RoboFriends</h1>
		 			<SearchBox searchChange={onSearchChange} />
		 			<Scroll>
		 				<ErrorBoundry>
							<Cardlist  robots = {filteredRobots} />
						</ErrorBoundry>
					</Scroll>
				</div>
			);
		
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);