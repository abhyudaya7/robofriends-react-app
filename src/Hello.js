import React from 'react';

function Hello(props){
	return(
		<div className="tc f1 code">
			<h1>Hello World</h1>
			<p className="tc code">{props.str}</p>
	    </div>
	    
		);
}

export default Hello;