import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const listLicensePlate = [
	{
		src: "./static/imgs/license_plate/0_img_01.png",
		captime: '14:01:41s',
		textlp: '64B-00383',
		textinfo: ' — car',
	},
	{
		src: "./static/imgs/license_plate/0_img_02.png",
		captime: '14:02:41s',
		textlp: '64B1-05313',
		textinfo: ' — motorbike',
	},
	{
		src: "./static/imgs/license_plate/0_img_03.png",
		captime: '14:03:41s',
		textlp: '64C1-25035',
		textinfo: ' — motorbike',
	},
	{
		src: "./static/imgs/license_plate/0_img_04.png",
		captime: '14:04:41s',
		textlp: '64A-06838',
		textinfo: ' — car',
	},
	{
		src: "./static/imgs/license_plate/0_img_05.png",
		captime: '14:05:41s',
		textlp: '64B5-3687',
		textinfo: ' — motorbike',
	},
	{
		src: "./static/imgs/license_plate/0_img_06.png",
		captime: '14:06:41s',
		textlp: '59C2-10655',
		textinfo: ' — motorbike',
	},
	{
		src: "./static/imgs/license_plate/0_img_07.png",
		captime: '14:07:41s',
		textlp: '64H-5266',
		textinfo: ' — truck',
	},
	{
		src: "./static/imgs/license_plate/0_img_08.png",
		captime: '14:08:41s',
		textlp: '64H7-9997',
		textinfo: ' — motorbike',
	},
	{
		src: "./static/imgs/license_plate/0_img_09.png",
		captime: '14:09:41s',
		textlp: '71B1-97368',
		textinfo: ' — motorbike',
	},
	{
		src: "./static/imgs/license_plate/0_img_10.png",
		captime: '14:10:41s',
		textlp: '64H-5266',
		textinfo: ' — car',
	},
	{
		src: "./static/imgs/license_plate/0_img_11.png",
		captime: '14:11:41s',
		textlp: '64A-00148',
		textinfo: ' — car',
	},
	{
		src: "./static/imgs/license_plate/0_img_12.png",
		captime: '14:12:41s',
		textlp: '64C-03889',
		textinfo: ' — car',
	}
];

const GVListLicensePlatesStyles = makeStyles(theme => ({
	root: {
		width: '18%',
		height: '100%',
		overflowY: 'scroll',
	},
	heading: {
		fontSize: theme.typography.pxToRem(15),
		flexBasis: '33.33%',
		flexShrink: 0,
	},
	secondaryHeading: {
		fontSize: theme.typography.pxToRem(15),
		color: theme.palette.text.secondary,
	},
  list: {
    width: '100%',
    maxWidth: 260,
    backgroundColor: theme.palette.background.paper,
    marginTop: '20px',
  },
  inline: {
    display: 'inline',
  },
  topText: {
    width: '18%',
    color: "#FFFFFF",
    textAlign: 'center',
    position: 'fixed',
    zIndex: 1,
    backgroundColor: '#373a9e',
    borderRadius: '15px,'
  },
  logo: {
    	marginRight: 5,
    	width: 60,
    	height: 60,
  	},
  	rootAvatar:{
  		borderRadius: 0,
  	},
  	imgAvatar:{
  		objectFit: 'contain',
  	},
}));

class LicensePlateItem extends React.Component{
	state = {

	}

	render(){
		const {classes, src, captime, textlp, textinfo} = this.props;

		return (
			<React.Fragment>
				<ListItem alignItems="flex-start">
			        <ListItemAvatar>
			          <Avatar alt="GVLab" 
			          src={src} className={classes.logo}
			          classes={{
			          	root: classes.rootAvatar,
			          	img: classes.imgAvatar
			          }}/>
			        </ListItemAvatar>
			        <ListItemText
			          primary={textlp}
			          secondary={
			            <React.Fragment>
			              <Typography
			                component="span"
			                variant="body2"
			                className={classes.inline}
			                color="textPrimary"
			              >
			                {captime}
			              </Typography>
			              {textinfo}
			            </React.Fragment>
			          }
			        />
			    </ListItem>
			    <Divider variant="inset" component="li" />
			</React.Fragment>
		)
	}
}



export default function GVListLicensePlates() {
  const classes = GVListLicensePlatesStyles();

  return (
    <div className={classes.root} id="style-7">
      <div className={classes.topText}>
        <Typography align="center" variant="h6">
          List License Plate
        </Typography>
      </div>
      <List className={classes.list}>
      	{
      		listLicensePlate.map((item, key) => {
      			return (
      				<LicensePlateItem key={key} classes={classes}
						src={item.src} captime={item.captime}
						textlp={item.textlp} textinfo={item.textinfo}/>
      			)
      		})
      	}
      </List>
    </div>
  );
}