import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Drawer from '@material-ui/core/Drawer';
import image from "imgs/sidebar-1.jpg";
import classNames from "classnames";

import {
  drawerWidth,
  transition,
  boxShadow
} from "./material-dashboard-react.jsx";

const styles = theme => ({
  background: {
    position: "absolute",
    zIndex: "1",
    height: "100%",
    width: "100%",
    display: "block",
    top: "0",
    left: "0",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    "&:after": {
      position: "absolute",
      zIndex: "3",
      width: "100%",
      height: "100%",
      content: '""',
      display: "block",
      background: "#FFFFFF",
      opacity: ".8"
    }
  },
  drawerPaper: {
    border: "none",
    position: "fixed",
    top: "0",
    bottom: "0",
    left: "0",
    zIndex: "1",
    ...boxShadow,
    width: drawerWidth,
    [theme.breakpoints.up("md")]: {
      width: drawerWidth,
      position: "fixed",
      height: "100%"
    },
    [theme.breakpoints.down("sm")]: {
      width: drawerWidth,
      ...boxShadow,
      position: "fixed",
      display: "block",
      top: "0",
      height: "100vh",
      right: "0",
      left: "auto",
      zIndex: "1032",
      visibility: "visible",
      overflowY: "visible",
      borderTop: "none",
      textAlign: "left",
      paddingRight: "0px",
      paddingLeft: "0",
      transform: `translate3d(${drawerWidth}px, 0, 0)`,
      ...transition
    }
  },
  drawerPaperRight: {
    [theme.breakpoints.up("md")]: {
      left: "auto !important",
      right: "0 !important"
    },
    [theme.breakpoints.down("sm")]: {
      left: "0  !important",
      right: "auto !important"
    }
  },
})

class App extends React.Component {
	state = {

	};

	render() {

    const {classes} = this.props;

		return(
      <div>
      
      <Drawer
        variant="temporary"
        anchor="left"
        open={true}
        classes={{
          paper: classNames(classes.drawerPaper)
        }}
        ModalProps={{
          keepMounted: true // Better open performance on mobile.
        }}
          >
        <div
          className={classes.background}
          style={{ backgroundImage: "url(" + image + ")" }}
        />
      </Drawer>

      <div> hahah </div>
      <Drawer
        variant="temporary"
        anchor="right"
        open={true}
        classes={{
          paper: classNames(classes.drawerPaper, classes.drawerPaperRight)
        }}
        ModalProps={{
          keepMounted: true // Better open performance on mobile.
        }}
          >
        <div
          className={classes.background}
          style={{ backgroundImage: "url(" + image + ")" }}
        />
      </Drawer>
      </div>
			
		);
	}
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(App);