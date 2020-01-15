import { GET_VIDEO_RELATED_REQUEST, GET_VIDEO_RELATED_SUCCESS, GET_VIDEO_RELATED_FAILURE } from '../../../constants/actionTypes';
const arr = [1,2,3,4,5,6,7,8,9,10,11,12];
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
				data: state.data.concat(arr)
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
