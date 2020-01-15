import { combineReducers } from 'redux';
import VideoDefaultReducer from './VideoDefaultReducer/VideoDefaultReducer';
export default combineReducers({
	data: VideoDefaultReducer
});
