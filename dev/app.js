import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
	state = {

	};

	render() {
		return(
			<Drawer
          		variant="temporary"
          		anchor={"left" }
          		open={true}
          		classes={{
          		  paper: classNames(classes.drawerPaper, {
          		    [classes.drawerPaperRTL]: props.rtlActive
          		  })
          		}}
          		onClose={this.handleDrawerToggle}
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