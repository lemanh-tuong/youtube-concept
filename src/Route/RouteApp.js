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
		render: () => <WatchPage />,
		exact: false
	},
	{
		id:3,
		path: '/search',
		render: () => <SearchResultPage />,
		exact: false
	},
	{
		id: 4,
		path: '/setting',
		render: () => <SettingPage />,
		exact: true
	},
	{
		id: 5,
		render: () => <NotFoundPage />,
		exact: false
	}
]
export default routeApp;