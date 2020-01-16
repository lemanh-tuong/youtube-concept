import { GET_VIDEO_DEFAULT_REQUEST, GET_VIDEO_DEFAULT_SUCCESS, GET_VIDEO_DEFAULT_FAILURE } from '../../../constants/actionTypes';
const initialState = {};
const VideoDefaultReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_VIDEO_DEFAULT_REQUEST: {
			return {
				status: 'loading',
			}
		}
		case GET_VIDEO_DEFAULT_SUCCESS: {
			return {
				status: 'success',
				data: [...action.payload.data]
			}
		}
		case GET_VIDEO_DEFAULT_FAILURE: {
			return {
				status: 'failure',
				message: action.payload.message
			}
		}
		default:
			return state;
	}
}
export default VideoDefaultReducer;
