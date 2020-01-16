import axios from 'axios';
import fetchVideoWatching from '../../actions/actionFetchVideoWatching/actionFetchVideoWatching';
// const keyAPI = "AIzaSyCM8QsNyLtHKF5y_1zSYnBtjAo24-JMRIw";
// const keyAPI = "AIzaSyBRR1wLNKGDH8xPVTLVKs3Usnv9cS6AEAQ";
const keyAPI = "AIzaSyB8Qc6a3_gd_KPSx-7w5qKqA74i0t_HDn4";

const getVideoWatching = videoId => async dispatch => {
	dispatch(fetchVideoWatching.request());
	try {
		const url = `videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${keyAPI}`;
		const res = await axios.get(url);
		dispatch(fetchVideoWatching.success(res.data.items));
	}
	catch(err) {
		dispatch(fetchVideoWatching.failure(JSON.stringify(err)))
	}
}
export default getVideoWatching;
