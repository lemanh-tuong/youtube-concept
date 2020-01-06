import React from 'react';
import WatchPage from '../containers/WatchPage/WatchPage';
import HomePage from '../containers/HomePage/HomePage';
import SearchResultPage from '../containers/SearchResultPage/SearchResultPage';
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
	}
]
export default routeApp;