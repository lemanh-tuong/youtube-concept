import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import AppProvider from './AppProvider';
import { AppContext } from './AppProvider';
import ToggleMenuButton from './components/ButtonComponent/ToggleMenuButton/ToggleMenuButton';
import SideBar from './containers/SideBar/SideBar';
import MainContent from './containers/MainContent/MainContent';
import WatchPage from './containers/WatchPage/WatchPage';
import './styles/styles.scss';
class App extends Component {

	render() {
		return(
		<AppProvider>
			<Router>
				<div className="App">
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

ReactDOM.render(<App />, document.getElementById("root"))