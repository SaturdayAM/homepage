import React, {Component} from 'react';

import {withStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import SubjectIcon from '@material-ui/icons/Subject';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

import BlogPage from './blogPage';

const drawerWidth = 240;

interface blogsProps {
	classes: any
}

interface blogsState {

}

const styles = (theme: any) => ({
	root: {
		width: '100%',
		maxWidth: '36ch',
		backgroundColor: theme.palette.background.paper
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0
	},
	drawerPaper: {
		width: drawerWidth
	},

})

function BlogListItem(props: any) {
	let {classes} = props;
	return (
		<List className={classes.root}>
			<ListItem alignItems="flex-start">
				<ListItemAvatar>
					<SubjectIcon/>
				</ListItemAvatar>
				<ListItemText>
					List Item Text
				</ListItemText>
			</ListItem>
		</List>
	)
}

class Blogs extends Component<blogsProps, blogsState>{
	constructor(props:any){
		super(props);
	}

	componentDidMount(){
		console.log('Blogs::componentDidMount()');
		console.log(this.props);
	}

	getArbitraryDiv(){
		return(
			<div>
				Arbitrary Div
			</div>
		)
	}

	render(){
		let {classes} = this.props;

		return(
			<div>
				<Grid container spacing={3}>
					<Grid item xs={3}>
						<Paper>
							{[0, 1, 2, 3, 4].map(x => (<BlogListItem {...this.props}/>)) }						
						</Paper>
					</Grid>
					<Grid item xs={9}>
						xs=9
						<BlogPage/>
					</Grid>

				</Grid>
			</div>
		)
	}
}

export default withStyles(styles)(Blogs);

