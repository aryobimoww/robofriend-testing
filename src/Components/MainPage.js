import React,{Component} from 'react';
import CounterButton from './CounterButton';
import SearchBox from './SearchBox'
import CardList from './CardList'
// import { robots } from '../robots';
import Scroll from './Scroll';
import ErrorBoundary from './ErrorBoundary';
import './MainPage.css';




export class MainPage extends Component {
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

    
	filterRobots = () => {
         return this.props.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase())
                  })
    }

	
	render(){
		const {onSearchChange, isPending} = this.props;
		
		
		return( isPending ?
		<h1>Loading</h1>
	:
		 
		<div className='tc'>
		<h1 className='f2'>RoboFriends</h1>
		<CounterButton />
		<SearchBox searchChange={onSearchChange} />
		<Scroll>
			<ErrorBoundary>
				<CardList robots={this.filterRobots()}/>
			</ErrorBoundary>
		</Scroll>
		</div>
			);
		}
	}

export default MainPage;