import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
// import Traffic from '@material-ui/icons/Traffic';

const GVNarBarStyles = theme => ({
	root: {
		width: '100%',
		height: '10%',
		textAlign: 'center',
		color: "#FFFFFF",
	}
});

class GVNarBar extends React.Component {
	state = {

	};

	render(){

		const {classes} = this.props;

		return (
			<div className={classes.root}>
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