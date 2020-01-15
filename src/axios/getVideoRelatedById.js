import axios from "axios";
axios.defaults.baseURL = "https://www.googleapis.com/youtube/v3/";
const keyAPI = "AIzaSyCM8QsNyLtHKF5y_1zSYnBtjAo24-JMRIw";
//const keyAPI = "AIzaSyBRR1wLNKGDH8xPVTLVKs3Usnv9cS6AEAQ"
const ammountVideoPerWatchPage = 15;
async function getVideoRelatedById(videoId, ammount) {
	const limited = ammountVideoPerWatchPage + ammount >= 50;
	const url = `search?part=snippet&&maxResults=${limited ? 50 : ammountVideoPerWatchPage + ammount}&relatedToVideoId=${videoId}&type=video&key=${keyAPI}`
	const { data } = await axios.get(url);
	return data.items;
}
export default { getVideoRelatedById }
