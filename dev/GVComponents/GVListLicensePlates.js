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
import PanoramaOutlined from '@material-ui/icons/PanoramaOutlined';

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
}));

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
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <PanoramaOutlined />
        </ListItemAvatar>
        <ListItemText
          primary="74C1-23299"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                14:32:25s
              </Typography>
              {" — Motorbike | In tracking..."}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <PanoramaOutlined />
        </ListItemAvatar>
        <ListItemText
          primary="64C1-99999"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                14:15:52s
              </Typography>
              {" — Motorbike | In tracking..."}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <PanoramaOutlined />
        </ListItemAvatar>
        <ListItemText
          primary="64B1-43434"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                14:10:12s
              </Typography>
              {' — Car | Out of tracking...'}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <PanoramaOutlined />
        </ListItemAvatar>
        <ListItemText
          primary="59C1-21523"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                13:54:54s
              </Typography>
              {' — Truck | In tracking...'}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <PanoramaOutlined />
        </ListItemAvatar>
        <ListItemText
          primary="72K4-89565"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                13:51:41s
              </Typography>
              {' — Motorbike | In tracking...'}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <PanoramaOutlined />
        </ListItemAvatar>
        <ListItemText
          primary="59F4-23524"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                13:34:19s
              </Typography>
              {' — Car | Out of tracking...'}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <PanoramaOutlined />
        </ListItemAvatar>
        <ListItemText
          primary="59F4-89899"
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                13:12:40s
              </Typography>
              {' — Bus | Out of tracking...'}
            </React.Fragment>
          }
        />
      </ListItem>
      </List>
    </div>
  );
}