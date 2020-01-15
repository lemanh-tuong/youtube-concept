import { combineReducers } from 'redux'
import HomePageReducers from './reducerHomePage/reducerHomePage';
import SearchPageReducers from './reducerSearchPage/reducerSearchPage';
import WatchPageReducers from './reducerWatchPage/reducerWatchPage';
import MyChannelReducer from './reducerMyChannel/reducerMyChannel';
const rootReducers = combineReducers({
	HomePageReducers,
	SearchPageReducers,
	WatchPageReducers,
	MyChannelReducer
})
export default rootReducers;
