import React, {Component} from 'react';
// import Radium from 'radium';
import styled from 'styled-components';
import './Person.css'

const StyledDiv = styled.div`
	width: 60%;
	margin: 16px auto;
	border: 1px solid #eee;
	box-shadow: 0 2px 3px #ccc;
	padding: 16px;
	text-align: center;

	@media (min-width: 500px) {
		width: '450px'
	}`
class Person extends Component  {
	render() {
		return (
		//<div className="Person" style = {Style} >
		<StyledDiv>
			<p onClick = {this.props.click} > I am {this.props.name} and I am {this.props.age} years old</p>
			<input type="text" onChange = {this.props.change} value = {this.props.name} />
		</StyledDiv>
		//</div>
		)
	}
}

// export default Radium(person);
export default Person;