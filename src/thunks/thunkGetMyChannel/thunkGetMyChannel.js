import axios from 'axios';

import fetchMyChannel from '../../actions/actionFetchMyChannel/actionFetchMyChannel';

const getMyChannel = url => async dispatch => {
	dispatch(fetchMyChannel.request());
	try {
		const res = await axios.get(url);
		dispatch(fetchMyChannel.success(res.data.items));
	}
	catch(err) {
		dispatch(fetchMyChannel.failure(JSON.stringify(err)))
	}
}
export default getMyChannel;
