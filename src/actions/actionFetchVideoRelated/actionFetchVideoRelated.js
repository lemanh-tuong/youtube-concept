import { GET_VIDEO_RELATED_REQUEST, GET_VIDEO_RELATED_SUCCESS, GET_VIDEO_RELATED_FAILURE } from '../../constants/actionTypes';

const fetchVideoRelated = {
	request: () => ({type: GET_VIDEO_RELATED_REQUEST}),
	success: data => ({
		type: GET_VIDEO_RELATED_SUCCESS,
		payload: {
			data
		}
	}),
	failure: message => ({
		type: GET_VIDEO_RELATED_FAILURE,
		payload: {
			message
		}
	})
}
export default fetchVideoRelated
