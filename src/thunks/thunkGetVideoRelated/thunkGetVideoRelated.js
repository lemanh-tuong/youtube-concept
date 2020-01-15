import axios from 'axios';
import fetchVideoRelated from '../../actions/actionFetchVideoRelated/actionFetchVideoRelated';
let ammountVideoPerSection = 12;
//const keyAPI = "AIzaSyCM8QsNyLtHKF5y_1zSYnBtjAo24-JMRIw";
const keyAPI = "AIzaSyBRR1wLNKGDH8xPVTLVKs3Usnv9cS6AEAQ"
const getVideoRelated = (videoId, ammount = 5) => async dispatch => {
	dispatch(fetchVideoRelated.request());
	try {
		const limited = ammountVideoPerSection + ammount >= 50;
		ammountVideoPerSection = limited ? 50 : ammountVideoPerSection + ammount
		const url = `search?part=snippet&&maxResults=${ammountVideoPerSection}&relatedToVideoId=${videoId}&type=video&key=${keyAPI}`
		const res = await axios.get(url);
		dispatch(fetchVideoRelated.success(res.data.items));
	}
	catch(err) {
		dispatch(fetchVideoRelated.failure(JSON.stringify(err)))
	}
}
export default getVideoRelated;
