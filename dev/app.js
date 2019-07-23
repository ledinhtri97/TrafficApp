import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import GVNavBar from './GVComponents/GVNavBar';
import GVListCameras from './GVComponents/GVListCameras';
import GVMainFrameVideo from './GVComponents/GVMainFrameVideo';
import GVListThumbnailFrames from './GVComponents/GVListThumbnailFrames';
import GVListLicensePlates from './GVComponents/GVListLicensePlates';

const styles = theme => ({
 	root: {
 		backgroundColor: "#0C1732",
 		width: '100%',
 		height: '100%',
 	},
 	content: {
 		width: '100%',
 		height: '90%',
 		display: 'flex'
 	},
 	centerContent: {
 		width: '64%',
 		height: '100%',
 	}
});

class App extends React.Component {
	state = {
		
	};

	render() {

		const {classes} = this.props;

		return(
			<div className={classes.root}>
				<GVNavBar />
				<div className={classes.content}>
					<GVListCameras />
					<div className={classes.centerContent}>
						<GVMainFrameVideo />
						<GVListThumbnailFrames />
					</div>
					<GVListLicensePlates />
				</div>
			</div>
		);
	}
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(App);