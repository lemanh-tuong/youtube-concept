import { GET_VIDEO_SEARCH_REQUEST, GET_VIDEO_SEARCH_SUCCESS, GET_VIDEO_SEARCH_FAILURE} from '../../constants/actionTypes';


const fetchVideoSearch = {
	request: () => ({type: GET_VIDEO_SEARCH_REQUEST}),
	success: data => ({
		type: GET_VIDEO_SEARCH_SUCCESS,
		payload: {
			data
		}
	}),
	failure: message => ({
		type: GET_VIDEO_SEARCH_FAILURE,
		payload: {
			message
		}
	})
}
export default fetchVideoSearch;
