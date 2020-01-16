import { GET_VIDEO_RELATED_REQUEST, GET_VIDEO_RELATED_SUCCESS, GET_VIDEO_RELATED_FAILURE } from '../../../constants/actionTypes';
const initialState = {
	status: '',
	data: []
}

const VideoRelatedReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_VIDEO_RELATED_REQUEST:
			return {
				...state,
				status: "loading",
			}
		case GET_VIDEO_RELATED_SUCCESS:
			return {
				...state,
				status: "success",
				data: [...action.payload.data]
			}
		case GET_VIDEO_RELATED_FAILURE:
			return {
				status: "failure",
				message: action.payload.message
			}
		default:
			return state;
	}
}
export default VideoRelatedReducer;
