import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route} from 'react-router-dom';
import getVideoSearch from '../../thunks/thunkGetVideoSearch/thunkGetVideoSearch';
import { AppContext } from '../../AppProvider/AppProvider';
import Form from '../../components/Form/Form';
import ToggleMenuButton from '../../components/ButtonComponent/ToggleMenuButton/ToggleMenuButton';
import routeApp from '../../Route/RouteApp';
import style from './MainContent.module.scss';
class MainContent extends Component {
	_renderRoute(routes) {
		return (
			<Switch>
				{routes.map(route => <Route key={route.id} path={route.path} render={route.render} exact={route.exact} /> )}
			</Switch>
		)
	}
	_handleSubmitSearch = (querySearch) => {
		return () => {
			window.scrollTo(0,0);
			const { getVideoSearch } = this.props;
			getVideoSearch(querySearch)
		}
	}
	render() {

		return (
			<div className={style.mainContent}>
				<div className={style.header}>
						<AppContext.Consumer>
							{({onClickToggleMenu}) => <ToggleMenuButton onClickToggleMenu={onClickToggleMenu} />}
						</AppContext.Consumer>
						<div className={style.headerForm}>
							<Form onSubmitSearch={this._handleSubmitSearch}/>
						</div>
				</div>
				<div className={style.body}>
					{this._renderRoute(routeApp)}
				</div>
			</div>
		)
	}
}
const mapDispatchToProps = {
	getVideoSearch
}
export default connect(null, mapDispatchToProps)(MainContent);
