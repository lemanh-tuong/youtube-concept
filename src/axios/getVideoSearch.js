import axios from "axios";
axios.defaults.baseURL = "https://www.googleapis.com/youtube/v3/";
const keyAPI = "AIzaSyCM8QsNyLtHKF5y_1zSYnBtjAo24-JMRIw";
//const keyAPI = "AIzaSyBRR1wLNKGDH8xPVTLVKs3Usnv9cS6AEAQ"
const ammountVideoPerSearchPage = 24;
async function getVideoSearch(keywords, ammount) {
	const limited = ammountVideoPerSearchPage + ammount >= 50;
	const urlSearch = `search?part=snippet&maxResults=${limited ? 50 : ammountVideoPerSearchPage + ammount}&q=${keywords}&key=${keyAPI}`
	const { data } = await axios.get(urlSearch);
	return data.items
}
export { getVideoSearch };
