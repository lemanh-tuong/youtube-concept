import { GET_VIDEO_DEFAULT_REQUEST, GET_VIDEO_DEFAULT_SUCCESS, GET_VIDEO_DEFAULT_FAILURE} from '../../constants/actionTypes';


const fetchVideoDefault = {
	request: () => ({type: GET_VIDEO_DEFAULT_REQUEST}),
	success: data => ({
		type: GET_VIDEO_DEFAULT_SUCCESS,
		payload: {
			data
		}
	}),
	failure: message => ({
		type: GET_VIDEO_DEFAULT_FAILURE,
		payload: {
			message
		}
	})
}
export default fetchVideoDefault
