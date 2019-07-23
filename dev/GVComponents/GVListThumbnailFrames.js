import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';

const GVListThumbnailFramesStyles = theme => ({

});

class GVListThumbnailFrames extends React.Component {
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

GVListThumbnailFrames.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(GVListThumbnailFramesStyles)(GVListThumbnailFrames);