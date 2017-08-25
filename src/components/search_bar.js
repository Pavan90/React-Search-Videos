import React, {Component} from 'react';
import ReactDOM from 'react-dom';

//this is a class based component which extends the properties from react component
class SearchBar extends Component{

	constructor(props) {
		super(props);
		this.state = { term: ''}
	}
	render(){
		return (
			<div>
			<input 
			value = {this.state.term}
			onChange={event=>this.onInputChange(event.target.value)}/>
			</div>
			);
		}	

		onInputChange(term){
			this.setState({term});
			this.props.onSearchTermChange(term)
		}

}


/*const SearchBar = ()=>{
	return <input />
};

//this is a functional based component.
*/
export default SearchBar;