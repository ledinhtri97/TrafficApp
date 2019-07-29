import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Slider from "react-slick";

const GVListThumbnailFramesStyles = theme => ({
	root: {
		width: '100%',
		height: '20%',
	}
});

const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
 };

class GVListThumbnailFrames extends React.Component {
	state = {

	};

	

	render(){

		const {classes} = this.props;

		

		return (
			<div className={classes.root}>
				<Slider {...settings}>
		          <div>
		            <img src="./static/imgs/frame_0.png" />
		          </div>
		          <div>
		            <img src="./static/imgs/frame_1.png" />
		          </div>
		          <div>
		            <img src="./static/imgs/frame_2.png" />
		          </div>
		          <div>
		            <img src="./static/imgs/frame_3.png" />
		          </div>
        		</Slider>
			</div>
		);
	};
}

GVListThumbnailFrames.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(GVListThumbnailFramesStyles)(GVListThumbnailFrames);