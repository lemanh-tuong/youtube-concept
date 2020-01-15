import axios from "axios";
axios.defaults.baseURL = "https://www.googleapis.com/youtube/v3/";
const keyAPI = "AIzaSyCM8QsNyLtHKF5y_1zSYnBtjAo24-JMRIw";
//const keyAPI = "AIzaSyBRR1wLNKGDH8xPVTLVKs3Usnv9cS6AEAQ"
const ammountVideoPerWatchPage = 15;
async function getVideoWatchingById(videoId) {
	const url = `videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${keyAPI}`
	const { data } = await axios.get(url);
	return data.items
}
export { getVideoWatchingById }
