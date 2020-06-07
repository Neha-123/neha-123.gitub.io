import React from 'react';
import './UserOutput.css'

const userOutput = (props) =>{
	return(
		<div className = "output">
			<p>User Name : {props.username}</p>
			<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
		</div>
	);
};

export default userOutput