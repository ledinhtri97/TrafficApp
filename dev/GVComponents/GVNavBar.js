import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';

const GVNarBarStyles = theme => ({
	root: {
		width: '100%',
		height: '10%',
	}
});

class GVNarBar extends React.Component {
	state = {

	};

	render(){

		const {classes} = this.props;

		return (
			<div className={classes.root}>
			</div>
		);
	};
}

GVNarBar.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(GVNarBarStyles)(GVNarBar);