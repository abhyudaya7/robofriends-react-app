import React from 'react';
import Card from './Card';


function CardList({robots}){
	const CardArray = robots.map(function(users ,i){
		return (<Card key = {i} id={robots[i].id} name={robots[i].name} email = {robots[i].email} />);
	})
	return(
	     CardArray
		);
}
export default CardList;