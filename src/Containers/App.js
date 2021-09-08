import React,{Component} from 'react';
import { connect } from 'react-redux';
import MainPage from '../Components/MainPage';
import './App.css';

import {requestRobots, setSearchField} from '../actions';


const mapStateToProps = state => {
	return {
		searchField: state.searchRobots.searchField,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		error: state.requestRobots.error,
		
	}
}
const mapDispatchToProps = (dispatch) =>{
	return{
	onSearchChange:(event) => dispatch(setSearchField(event.target.value)),	
	onRequestRobots: () => dispatch(requestRobots()),
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

	// componentDidMount(){
	// this.props.onRequestRobots();
	// }
		// 	fetch('https://jsonplaceholder.typicode.com/users')
	// 	.then(response => response.json())
	// 	.then(users => {this.setState({robots:users})});
	// }

	
	//  onSearchChange = (event)=> {
	// 	setSearchfield(event.target.value)
	// }
	render(){
		 return <MainPage { ...this.props} /> 
		}
	}

export default connect(mapStateToProps, mapDispatchToProps)(App);