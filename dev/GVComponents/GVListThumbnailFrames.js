import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';

const GVListThumbnailFramesStyles = theme => ({
	root: {
		width: '100%',
		height: '20%',
	}
});

class GVListThumbnailFrames extends React.Component {
	state = {

	};

	

	render(){

		const {classes} = this.props;

		const settings = {
		    dots: false,
		    infinite: false,
		    speed: 500,
		    slidesToShow: 3,
		    slidesToScroll: 3
		 };

		return (
			<div className={classes.root}>
				
			</div>
		);
	};
}

GVListThumbnailFrames.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(GVListThumbnailFramesStyles)(GVListThumbnailFrames);