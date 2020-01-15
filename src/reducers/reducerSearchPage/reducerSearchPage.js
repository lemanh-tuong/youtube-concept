import { combineReducers } from 'redux';
import VideoSearchReducer from './VideoSearchReducer/VideoSearchReducer';
export default combineReducers({
	data: VideoSearchReducer
})
