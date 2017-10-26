import React from 'react';
import  './SearchBar.css';

const sortByOptions = {
	'Best Match': 'best_match',
	'Highest Rated': 'rating',
	'Most Reviewed': 'review_count'

}

class SearchBar extends React.Component {
	renderSortByOptions(){
		return Object.keys(sortByOptions).map(sortByOption => {
			let sortByOptionValue = sortByOptions[sortByOptions];

		return  <li key = {sortByOptionValue}> {sortByOption}</li>;

		});
	}//SortByOptions ends
	render(){
		return (<div className="SearchBar">
			  		<div className="SearchBar-sort-options">
				    	<ul>
				    	<li>Best Match</li>
				    	<li>Highest Rated</li>
				    	<li>Most Reviewed</li>
				    	</ul>
			  		</div>
		
			  		<div className="SearchBar-fields">
				    	<input placeholder="Search Businesses" />
				    	<input placeholder="Where?" />
			  		</div>
		
			  		<div className="SearchBar-submit">
			    		<a>Let's Go</a>
			  		</div>
				</div>);
	}//render ends

}//SearchBarends

export default SearchBar;