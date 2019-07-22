import React from 'react';
import PropTypes from 'prop-types';

import image from "assets/img/sidebar-2.jpg";

class App extends React.Component {
	state = {

	};

	render() {
		return(
			<Drawer
          		variant="temporary"
          		anchor={props.rtlActive ? "left" : "right"}
          		open={props.open}
          		classes={{
          		  paper: classNames(classes.drawerPaper, {
          		    [classes.drawerPaperRTL]: props.rtlActive
          		  })
          		}}
          		onClose={props.handleDrawerToggle}
          		ModalProps={{
          		  keepMounted: true // Better open performance on mobile.
          		}}
        	>
            <div
              className={classes.background}
              style={{ backgroundImage: "url(" + image + ")" }}
            />
        	</Drawer>
		);
	}
}

export default App;