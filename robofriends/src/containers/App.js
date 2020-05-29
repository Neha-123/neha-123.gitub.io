import React, { Component } from 'react';
import './App.css';
import Cardlist from '../components/Cardlist';
// import { robots } from '../components/robots';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';

class App extends Component{

	constructor(){
		super();
		this.state = {
			robot : [],
			searchfield : ''
		}
		console.log('constructor');
	}


	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({robot: users}))
	}

	onSearchChange = (event) =>{
		this.setState({searchfield: event.target.value})
	}

	render(){
		const filteredRobots = this.state.robot.filter(robot =>{
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})
		if(this.state.robot.length === 0)
		{
			return(<h1 className='tc pa3'>Loading...</h1>);
		}
		else
		{
			return(
				<div className = 'tc'>
					<h1 className='f1'>RoboFriends</h1>
		 			<SearchBox searchChange={this.onSearchChange} />
		 			<Scroll>
						<Cardlist  robots = {filteredRobots} />
					</Scroll>
				</div>
			);
		}
	}
}

export default App;