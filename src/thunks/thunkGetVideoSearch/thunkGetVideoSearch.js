import axios from 'axios';

import fetchVideoSearch from '../../actions/actionFetchVideoSearch/actionFetchVideoSearch';
const keyAPI = "AIzaSyBRR1wLNKGDH8xPVTLVKs3Usnv9cS6AEAQ";
//const keyAPI = "AIzaSyCM8QsNyLtHKF5y_1zSYnBtjAo24-JMRIw";

const ammountVideoPerSearchPage = 24;


const getVideoSearch = (querySearch, ammount = 5) => async dispatch => {
	dispatch(fetchVideoSearch.request());
	try {
		const limited = ammountVideoPerSearchPage + ammount >= 50;
		const url = `search?part=snippet&maxResults=${limited ? 50 : ammountVideoPerSearchPage + ammount}&q=${querySearch}&key=${keyAPI}`
		const res = await axios.get(url);
		dispatch(fetchVideoSearch.success(res.data.items));
	}
	catch(err) {
		dispatch(fetchVideoSearch.failure(JSON.stringify(err)))
	}
}
export default getVideoSearch;
