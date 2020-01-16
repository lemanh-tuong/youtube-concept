import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import AppProvider, { AppContext } from '../AppProvider/AppProvider';
import getVideoDefault from '../thunks/thunkGetVideoDefault/thunkGetVideoDefault';
import getVideoSearch from '../thunks/thunkGetVideoSearch/thunkGetVideoSearch';
import SideBar from './SideBar/SideBar';
import MainContent from './MainContent/MainContent';
class App extends Component {
	render() {
		return (
			<AppProvider>
				<Router>
					<div className={`App`}>
						<AppContext.Consumer>
							{({openMenu, onClickToggleMenu}) => <SideBar openMenu={openMenu} onClickToggleMenu={onClickToggleMenu} />}
						</AppContext.Consumer>
						<MainContent />
					</div>
				</Router>
			</AppProvider>
		)
	}
}
const mapStateToProps = state => {
	return {
		state,
	}
}
const mapDispatchToProps = {
	getVideoDefault,
	getVideoSearch
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
