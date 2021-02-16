import React, {Component} from 'react';

class Blogs extends Component {
	constructor(props){
		super(props);
	}

	getArbitraryDiv(){
		return(
			<div>
				Arbitrary Div
			</div>
		)
	}

	render(){
		return(
			<div>
				blogs.js
				{
					this.getArbitraryDiv()
				}
			</div>
		)
	}
}

export default Blogs;

