import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
// import Traffic from '@material-ui/icons/Traffic';

const GVNarBarStyles = theme => ({
	root: {
		width: '100%',
		height: '10%',
		textAlign: 'center',
		color: "#FFFFFF",
		display: 'flex',
		justifyContent: 'center',
	},
	logo: {
    	marginRight: 5,
    	width: 60,
    	height: 60,
  	},
});

class GVNarBar extends React.Component {
	state = {

	};

	render(){

		const {classes} = this.props;

		return (
			<div className={classes.root}>
			<Avatar alt="GVLab" src="./static/imgs/gvlab-icon.png" className={classes.logo} />
			<Typography align="center" variant="h4" style={{paddingTop: '12px'}}>
          		GVLab | Demo Traffic Application
        	</Typography>
			</div>
		);
	};
}

GVNarBar.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(GVNarBarStyles)(GVNarBar);