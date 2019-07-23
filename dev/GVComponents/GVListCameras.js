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
import VideocamOutlined from '@material-ui/icons/VideocamOutlined';

const GVListCamerasStyles = makeStyles(theme => ({
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
}));

export default function GVListCameras() {
  const classes = GVListCamerasStyles();

  return (
    <div className={classes.root} id="style-7">
      <div className={classes.topText}>
        <Typography align="center" variant="h6">
          List Camera
        </Typography>
      </div>
      <List className={classes.list}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <VideocamOutlined />
        </ListItemAvatar>
        <ListItemText
          primary="Vinh Long 1"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                04/07/2019
              </Typography>
              {" — Camera is available..."}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <VideocamOutlined />
        </ListItemAvatar>
        <ListItemText
          primary="Vinh Long 2"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                19/07/2019
              </Typography>
              {" — Camera is available..."}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <VideocamOutlined />
        </ListItemAvatar>
        <ListItemText
          primary="10 District, Ho Chi Minh"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                21/07/2019
              </Typography>
              {' — Camera is disconnected...'}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <VideocamOutlined />
        </ListItemAvatar>
        <ListItemText
          primary="04 District, Ho Chi Minh"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                25/07/2019
              </Typography>
              {' — Camera is turned off...'}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <VideocamOutlined />
        </ListItemAvatar>
        <ListItemText
          primary="Binh Thanh District, Ho Chi Minh"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                21/07/2019
              </Typography>
              {' — Camera is disconnected...'}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <VideocamOutlined />
        </ListItemAvatar>
        <ListItemText
          primary="Tan Binh District, Ho Chi Minh"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                25/07/2019
              </Typography>
              {' — Camera is turned off...'}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <VideocamOutlined />
        </ListItemAvatar>
        <ListItemText
          primary="01 District, Ho Chi Minh"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                28/07/2019
              </Typography>
              {' — Camera is available...'}
            </React.Fragment>
          }
        />
      </ListItem>
      </List>
    </div>
  );
}