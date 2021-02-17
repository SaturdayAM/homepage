import React, {Component} from 'react';
import {connect} from 'react-redux';
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
		console.log('Main.tsx')
		console.log(props)
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

const mapStateToProps = (state:any) => ({
	tab: state.tab
})

export default connect(mapStateToProps, null)(withStyles(styles)(Main));