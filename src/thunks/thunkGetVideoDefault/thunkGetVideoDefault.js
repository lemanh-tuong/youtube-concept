import axios from 'axios';
import fetchVideoDefault from '../../actions/actionFetchVideoDefault/actionFetchVideoDefault';
//const keyAPI = "AIzaSyCM8QsNyLtHKF5y_1zSYnBtjAo24-JMRIw";
const keyAPI = "AIzaSyBRR1wLNKGDH8xPVTLVKs3Usnv9cS6AEAQ"
const ammountVideoPerSection = 12;
const getVideoDefault = (ammount = 5) => async dispatch => {
	dispatch(fetchVideoDefault.request());
	try {
		const checkLimited = ammount + ammountVideoPerSection >= 50
		const url = `activities?part=snippet%2CcontentDetails&channelId=UC_x5XG1OV2P6uZZ5FSM9Ttw&maxResults=${checkLimited ? 50 : ammount + ammountVideoPerSection}&key=${keyAPI}`;
		const res = await axios.get(url);
		dispatch(fetchVideoDefault.success(res.data.items));
	}
	catch(err) {
		dispatch(fetchVideoDefault.failure(JSON.stringify(err)))
	}
}
export default getVideoDefault;
