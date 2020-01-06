import React, { Component } from 'react';
import { Switch, Route} from 'react-router-dom';
import { AppContext } from '../../AppProvider';
import style from './MainContent.module.scss';
import Form from '../../components/Form/Form';
import ToggleMenuButton from '../../components/ButtonComponent/ToggleMenuButton/ToggleMenuButton';
import routeApp from '../../Route/RouteApp';
class MainContent extends Component {
	_renderRoute(routes) {
		return (
			<Switch>
				{routes.map(route => <Route key={route.id} path={route.path} render={route.render} exact={route.exact} /> )}
			</Switch>
		)
	}
	render() {
		return (
			<div className={style.mainContent}>
				<div className={style.header}>
					<AppContext.Consumer>
						{({onClickToggleMenu}) => <ToggleMenuButton onClickToggleMenu={onClickToggleMenu} />}
					</AppContext.Consumer>
					<div className={style.headerForm}>
						<AppContext.Consumer>
							{({onSubmitSearch}) => <Form onSubmit={onSubmitSearch}/>}
						</AppContext.Consumer>
					</div>
				</div>
				<div className={style.body}>
					{this._renderRoute(routeApp)}
				</div>
			</div>
		)
	}
}
export default MainContent