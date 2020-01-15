import { GET_VIDEO_WATCHING_REQUEST, GET_VIDEO_WATCHING_SUCCESS, GET_VIDEO_WATCHING_FAILURE} from '../../../constants/actionTypes';
const initialState = {}
const VideoWatchingReducer = (state = initialState, action) => {
	console.log(action.payload);
	switch (action.type) {
		case GET_VIDEO_WATCHING_REQUEST:
			return {
				status: "loading"
			}
		case GET_VIDEO_WATCHING_SUCCESS:
			return {
				status: "success",
				data: {...action.payload.data[0]}
			}
		case GET_VIDEO_WATCHING_FAILURE:
			return {
				status: "failure",
				message: action.payload.message
			}
		default:
			return state;
	}
}
export default VideoWatchingReducer;
