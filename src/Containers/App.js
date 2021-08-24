import React,{Component} from 'react';
import { connect } from 'react-redux';
import SearchBox from '../Components/SearchBox'
import CardList from '../Components/CardList'
// import { robots } from '../robots';
import Scroll from '../Components/Scroll';
import ErrorBoundary from '../Components/ErrorBoundary';
import './App.css';

import {requestRobots, setSearchField} from '../actions';

const mapStateToProps = state => {
	return {
		searchField: state.searchRobots.searchField,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		error: state.requestRobots.error
	}
}
const mapDispatchToProps = (dispatch) =>{
	return{
	onSearchChange:(event) => dispatch(setSearchField(event.target.value)),	
	onRequestRobots: () => dispatch(requestRobots())
	}	
}

class App extends Component {
	// constructor(){
	// 	super()
	// 	this.state = {
	// 		robots: []
	// 	}
	// }

	// const [searchfield,setSearchfield] = useState('')

	componentDidMount(){
	this.props.onRequestRobots();
	}
		// 	fetch('https://jsonplaceholder.typicode.com/users')
	// 	.then(response => response.json())
	// 	.then(users => {this.setState({robots:users})});
	// }

	
	//  onSearchChange = (event)=> {
	// 	setSearchfield(event.target.value)
	// }

	
	

	
	render(){
		const {searchField,onSearchChange, isPending, robots} = this.props;
		const filterRobots =  robots.filter(robot =>{
		return robot.name.toLowerCase().includes(searchField.toLowerCase())
			  })
		
		return isPending ?
		<h1>Loading</h1>
	:
		 (
		<div className='tc'>
		<h1 className='f2'>RoboFriends</h1>
		<SearchBox searchChange={onSearchChange} />
		<Scroll>
			<ErrorBoundary>
				<CardList robots={filterRobots}/>
			</ErrorBoundary>
		</Scroll>
		</div>
			);
		}
	}

export default connect(mapStateToProps, mapDispatchToProps)(App);