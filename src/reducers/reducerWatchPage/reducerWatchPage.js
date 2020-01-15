import { combineReducers } from 'redux';
import VideoWatchingReducer from './VideoWatchingReducer/VideoWatchingReducer';
import VideoRelatedReducer from './VideoRelatedReducer/VideoRelatedReducer';
export default combineReducers({
	dataVideoWatching: VideoWatchingReducer,
	dataVideoRelated: VideoRelatedReducer
})
