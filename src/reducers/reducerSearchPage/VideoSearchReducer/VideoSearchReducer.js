import { GET_VIDEO_SEARCH_REQUEST, GET_VIDEO_SEARCH_SUCCESS, GET_VIDEO_SEARCH_FAILURE } from '../../../constants/actionTypes';
const initialState = {};
const VideoSearchReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_VIDEO_SEARCH_REQUEST:
			return {
				status: "loading"
			}
		case GET_VIDEO_SEARCH_SUCCESS:
			return {
				status: "success",
				data: action.payload.data
			}
		case GET_VIDEO_SEARCH_FAILURE:
			return {
				status: "failure",
				message: action.payload.message
			}
		default:
			return state;
	}
}
export default VideoSearchReducer;
