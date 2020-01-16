import React from 'react';
import WatchPage from '../containers/WatchPage/WatchPage';
import HomePage from '../containers/HomePage/HomePage';
import SearchResultPage from '../containers/SearchResultPage/SearchResultPage';
import NotFoundPage from '../containers/NotFoundPage/NotFoundPage';
import SettingPage from '../containers/SettingPage/SettingPage';
const routeApp = [
	{
		id: 1,
		path: '/',
		render: ({match}) => <HomePage {...match}/>,
		exact: true
	},
	{
		id:2,
		path: '/watch/',
		render: (routerProps) => <WatchPage {...routerProps}/>,
		exact: false
	},
	{
		id:3,
		path: '/search',
		render: (routerProps) => <SearchResultPage {...routerProps}/>,
		exact: false
	},
	{
		id: 4,
		path: '/settings',
		render: (routerProps) => <SettingPage {...routerProps} />,
		exact: true
	},
	{
		id: 5,
		render: () => <NotFoundPage />,
		exact: false
	}
]

export default routeApp;
