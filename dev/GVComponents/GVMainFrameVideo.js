import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';

const GVMainFrameVideoStyles = theme => ({

});

class GVMainFrameVideo extends React.Component {
	state = {

	};

	render(){

		const {classes} = this.props;

		return (
			<div>
			</div>
		);
	};
}

GVMainFrameVideo.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(GVMainFrameVideoStyles)(GVMainFrameVideo);