import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';

const GVMainFrameVideoStyles = theme => ({
	root: {
		width: '100%',
		height: '80%',
		display: 'flex',
		justifyContent: 'center',
		alignContent: 'center',
	}
});

class GVMainFrameVideo extends React.Component {
	state = {

	};

	render(){

		const {classes} = this.props;

		return (
			<div className={classes.root}>
				<video width="100%" autoPlay="autoplay"
					controls="controls"
    				loop="loop" height="auto" 
    				src="./static/videos/vl.mp4" allowFullScreen></video>
			</div>
		);
	};
}

GVMainFrameVideo.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(GVMainFrameVideoStyles)(GVMainFrameVideo);