import react from 'react';
import 'BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends React.Component {
	render(){
		return (
			<div className="BusinessList">
			   <Business /> 
			   <Business /> 
			   <Business />
			   <Business /> 
			   <Business /> 
			   <Business /> 
			   </div>

			);

	} // render ends
} //BusinessList ends

export default BusinessList;