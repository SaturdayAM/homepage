import React, {Component} from 'react';
import {Blogs} from './pages/blogs';

import {withStyles} from '@material-ui/core/styles';
import HeaderBar from './components/headerBar'; 

interface mainProps{
	classes:any
}

interface mainState {

}

class Main extends Component<mainProps, mainState>{
	constructor(props:any){
		super(props);
	}

	render(){
		const {classes} = this.props;
		return(
			<div className={classes.root}>
				<HeaderBar/>
				<Blogs/>
			</div>
		)
	}
}

const styles = {
	root: {
		background: 'red'
	}
}

export default withStyles(styles)(Main);