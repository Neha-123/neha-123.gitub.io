import React from 'react';

const userInput = (props) =>{

	const inputstyle = {
		width: 500,
		padding: "10px",
		borderRadius : "5px",
      	backgroundColor: "#e6f3ff",
      	fontFamily: "Arial",
      	border : "2px solid #004f99"
	}

	return <input 
				type = "text" 
				style = {inputstyle}
				onChange = {props.change} 
				value = {props.currentvalue} 
			/>
};

export default userInput;