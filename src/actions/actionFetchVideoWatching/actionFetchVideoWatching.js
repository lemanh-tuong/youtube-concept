import { GET_VIDEO_WATCHING_REQUEST, GET_VIDEO_WATCHING_SUCCESS, GET_VIDEO_WATCHING_FAILURE} from '../../constants/actionTypes';


const fetchVideoDefault = {
	request: () => ({type: GET_VIDEO_WATCHING_REQUEST}),
	success: data => ({
		type: GET_VIDEO_WATCHING_SUCCESS,
		payload: {
			data
		}
	}),
	failure: message => ({
		type: GET_VIDEO_WATCHING_FAILURE,
		payload: {
			message
		}
	})
}
export default fetchVideoDefault
