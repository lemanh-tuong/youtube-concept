import { GET_MYCHANNEL_REQUEST, GET_MYCHANNEL_SUCCESS, GET_MYCHANNEL_FAILURE } from '../../constants/actionTypes';

const initialState = {}
const MyChannelReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_MYCHANNEL_REQUEST:
			return {
				status: "loading"
			}
		case GET_MYCHANNEL_SUCCESS:
			return {
				state: "success",
				data: action.payload.data
			}
		case GET_MYCHANNEL_FAILURE:
			return {
				state: "error",
				message: action.payload.message
			}
		default:
			return state;
	}
}
export default MyChannelReducer;
