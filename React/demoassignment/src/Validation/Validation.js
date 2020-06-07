import React from 'react';

const validation = (props) => {
	let size = '';
	if(props.length < 5 && props.length > 0){
		size = "text too short";
	}
	else if(props.length > 5){
		size = "text too long";
	}

	return (
		<div>
			<p>{size}</p>
		</div>
	)
}

export default validation;