import axios from 'axios';

import fetchVideoSearch from '../../actions/actionFetchVideoSearch/actionFetchVideoSearch';
//const keyAPI = "AIzaSyBRR1wLNKGDH8xPVTLVKs3Usnv9cS6AEAQ";
//const keyAPI = "AIzaSyCM8QsNyLtHKF5y_1zSYnBtjAo24-JMRIw";
const keyAPI = "AIzaSyB8Qc6a3_gd_KPSx-7w5qKqA74i0t_HDn4";
let ammountVideoPerSearchPage = 24;


const getVideoSearch = (querySearch, ammount = 8) => async dispatch => {
	dispatch(fetchVideoSearch.request());
	try {
		const limited = ammountVideoPerSearchPage + ammount >= 50;
		ammountVideoPerSearchPage = limited ? 50 : ammountVideoPerSearchPage + ammount;
		const url = `search?part=snippet&maxResults=${ammountVideoPerSearchPage}&q=${querySearch}&key=${keyAPI}`
		const res = await axios.get(url);
		dispatch(fetchVideoSearch.success(res.data.items));
	}
	catch(err) {
		dispatch(fetchVideoSearch.failure(JSON.stringify(err)))
	}
}
export default getVideoSearch;
