import React, {Component} from 'react';
import {connect} from 'react-redux';


import { fade, makeStyles, useTheme, Theme, createStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';

import Drawer from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import {setTab} from '../redux/actions';
const drawerWidth = 240;

const styles = (theme: any) => ({
	root: {
		display: "flex"
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	title: {
		display: 'none',
		[theme.breakpoints.up('sm')]:{
			display: 'block'
		}
	},
	// search: {
	// 	position: 'relative',
	// 	borderRadius: theme.shape.borderRadius,
	// 	backgroundColor: fade(theme.palette.common.white, 0.15),
	// 	'&:hover':{
	// 		backgroundColor: fade(theme.palette.common.white, 0.25)
	// 	},
	// 	marginRight: theme.spacing(2),
	// 	marginLeft: 0,
	// 	width: '100%',
	// 	[theme.breakpoints.up('sm')]: {
	// 		marginLeft: theme.spacing(3),
	// 		width: 'auto'
	// 	}
	// },
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: '100%',
		// position: 'absolute',
		// pointerEvents: "none",
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	inputRoot: {
		color: 'inherit'
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: '20ch'
		}
	},
	sectionDesktop: {
		display: 'none',
		[theme.breakpoints.up('md')]:{
			display: 'flex'
		}
	},
	sectionMobile: {
		display: 'flex',
		[theme.breakpoints.up('md')]: {
			display: 'none'
		}
	},
	hide: {
		display: 'none'
	},
	drawer: {
		width: 240,
		flexShrink: 0
	},
	drawerPaper: {
		width: 240,
	},
	drawerHeader: {
		display: 'flex',
		alignItems: 'center',
		padding: theme.spacing(0,1),
		...theme.mixins.toolbar,
		justifyContent: 'flex-end'
	},
	appBar: {
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		})
	},
	appBarShift: {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: drawerWidth,
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen
		})
	}

})

interface LinkTabProps{
	label?: string;
	href?: string;
}

function LinkTab(props: LinkTabProps) {
	return (
		<Tab
			component="a"
			onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
				event.preventDefault();
			}}
			{...props}
		/>	
	);
}

function a11yProps(index: any){
	return{
		id: `nav-tab-${index}`,
		'aria-label': `nav-tabpanel-${index}`
	}
}

interface HBProps {
	classes: any;
	tab?: any;
	setTab: Function;
}

interface HBState {
	anchorEl: any,
	open: any,
	value: any,
	mobileMoreAnchorEl: any
}

class HeaderBar extends Component<HBProps, HBState>{

	constructor(props:any){
		super(props);

		this.state = {
			anchorEl: null,
			open: false,
			value: 2,
			mobileMoreAnchorEl: null
		}
	}

	componentDidMount(){
		console.log('HeaderBar::componentDidMount()')
		console.log(this.props)
	}

	// const [anchorEl, setAnchorEl] = React.useState(null);
	// const [open, setOpen] = React.useState(false);
	// const [value, setValue] = React.useState(null);

	// const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

	// const isMenuOpen = Boolean(anchorEl);
	// const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

	handleProfileMenuOpen = (event:any) => {
		this.setState({
			anchorEl: event.currentTarget
		})
	};

	handleMobileMenuClose = () => {
		this.setState({
			anchorEl: null
		})
	}

	handleDrawerOpen = () => {
		this.setState({
			open: true
		})
	}

	handleDrawerClose = () =>{
		this.setState({
			open: false
		})
	}

	handleChange = (event:any) => {
		console.log('headerBar::handleChange()');
		let val = event.currentTarget.id.split("").slice(-1)[0];
		console.log(val)
		if(this.props.setTab) this.props.setTab(parseInt(val));
	}
	render(){
		const {classes, tab} = this.props;
		const {open, value} = this.state;

		return (
			<div className={classes.root}>
				<AppBar 
					position='fixed'
					className={`classes.appBar, ${open && classes.appBarShift}`}>
					{/*
						<Toolbar>
							<IconButton
								edge="start"
								className={classes.menuButton}
								color="inherit"
								aria-label="open drawer"
								onClick={this.handleDrawerOpen}>
								<MenuIcon/>
							</IconButton>

						</Toolbar>
					*/}
					<Typography className={classes.title} variant="h6" noWrap>
						On Code
					</Typography>
					<Tabs
						variant="fullWidth"
						value={tab}
						onChange={this.handleChange}
						aria-label="nav tabs">
						<LinkTab label="Page One" href="/drafts" {...a11yProps(0)}/>
						<LinkTab label="Page Two" href="/drafts" {...a11yProps(1)}/>
						<LinkTab label="Page Three" href="/drafts" {...a11yProps(2)}/>
					</Tabs>
				</AppBar>
				{/*
				<Drawer
					className={classes.drawer}
					variant="persistent"
					anchor="left"
					open={open}
					classes={{
						paper: classes.drawerPaper
					}}>
					<div className={classes.drawerHeader}>
						<IconButton onClick={this.handleDrawerClose}>
							{open ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
						</IconButton>
					</div>
					<Divider/>
					<List>
						{['Projects', 'Blog Posts', 'About Me', 'Drafts'].map((text, index) =>(
							<ListItem button key={text}>
								<ListItemIcon>{index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}</ListItemIcon>
								<ListItemText primary={text}/>
							</ListItem>
						))}
					</List>
				</Drawer>
				*/}
			</div>	
		)
	}
}

const mapStateToProps = (state:any) => ({
	tab: state.tab
})

const mapDispatchToProps = (dispatch:any) => ({
	setTab(tabNo:any){
		console.log('mapDispathToProps::setTab');
		console.log(tabNo)
		dispatch(setTab(tabNo));
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(HeaderBar));

