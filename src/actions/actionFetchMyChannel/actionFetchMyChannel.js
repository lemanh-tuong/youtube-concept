import { GET_MYCHANNEL_REQUEST, GET_MYCHANNEL_SUCCESS, GET_MYCHANNEL_FAILURE} from '../../constants/actionTypes';


const fetchMyChannel = {
	request: () => ({type: GET_MYCHANNEL_REQUEST}),
	success: data => ({
		type: GET_MYCHANNEL_SUCCESS,
		payload: {
			data
		}
	}),
	failure: message => ({
		type: GET_MYCHANNEL_FAILURE,
		payload: {
			message
		}
	})
}
export default fetchMyChannel
