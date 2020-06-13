import React, {Component} from 'react';
// import Radium from 'radium';
//import styled from 'styled-components';
import Auxiliary from '../../../hoc/Auxiliary';
import WithClass from '../../../hoc/WithClass';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';
import './Person.css'

// const StyledDiv = styled.div`
// 	width: 60%;
// 	margin: 16px auto;
// 	border: 1px solid #eee;
// 	box-shadow: 0 2px 3px #ccc;
// 	padding: 16px;
// 	text-align: center;

// 	@media (min-width: 500px) {
// 		width: '450px'
// 	}`
class Person extends Component  {

	constructor(props) {
		super(props);
		this.inputElemenRef = React.createRef();
	}

	static contextType = AuthContext;

	componentDidMount() {
		//this.inputElement.focus();
		this.inputElemenRef.current.focus();
		console.log(this.context.authenticated);
	}

	render() {
		return (
		//<div className="Person" style = {Style} >
		// <StyledDiv>
		// 	<p onClick = {this.props.click} > I am {this.props.name} and I am {this.props.age} years old</p>
		// 	<input type="text" onChange = {this.props.change} value = {this.props.name} />
		// </StyledDiv>
		//</div>
		<Auxiliary>
			<AuthContext.Consumer>
				{(context) => context.authenticated ? <p>Authenticated!</p> : <p>Please Log in</p> }
			</AuthContext.Consumer>
			<p onClick = {this.props.click} > I am {this.props.name} and I am {this.props.age} years old</p>
			<input 
				type="text" 
				onChange = {this.props.change} 
				value = {this.props.name}
				//ref = {(inputEl) => {this.inputElement = inputEl} } 
				ref = {this.inputElemenRef} 
			/>	
		</Auxiliary>
		
		);
	}
}

Person.propTypes = {
	click : PropTypes.func,
	name : PropTypes.string,
	age : PropTypes.number,
	change : PropTypes.func
}

// export default Radium(person);
export default WithClass(Person, "Person");