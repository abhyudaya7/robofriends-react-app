import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css';
import Scroll from "./Scroll";

class App extends Component{
	constructor() {
		super();
		this.state = {
			robots: [],
			searchfeild : ''
		}
	}

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users").then(Response =>{
			return Response.json();
		}).then(users => {
			this.setState({robots:users});
		});
	}
		

	onSearch = (event) => {
		this.setState({searchfeild: event.target.value});
		// console.log(filterdRobots);
	}
	render() {
		const filterdRobots = this.state.robots.filter(robots => {
			return(robots.name.toLowerCase().includes(this.state.searchfeild.toLowerCase()));
		});
		return(
			<div className='tc'>
				<h1 className='f1'>RoboFriends</h1>
				<SearchBox onSearch={this.onSearch} />
				<Scroll>
					<CardList robots={filterdRobots}/>
				</Scroll>
			</div>
	
		);

	}
	
}
export default App;