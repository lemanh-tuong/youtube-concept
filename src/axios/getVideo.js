import axios from "axios";
axios.defaults.baseURL = "https://www.googleapis.com/youtube/v3/";
const keyAPI = "AIzaSyCM8QsNyLtHKF5y_1zSYnBtjAo24-JMRIw";
//const keyAPI = "AIzaSyBRR1wLNKGDH8xPVTLVKs3Usnv9cS6AEAQ"
const ammountVideoPerSection = 12;
const ammountVideoPerSearchPage = 24;
const ammountVideoPerWatchPage = 15;
async function getVideo() {
	const url = `activities?part=snippet%2CcontentDetails&channelId=UC_x5XG1OV2P6uZZ5FSM9Ttw&maxResults=${ammountVideoPerSection}&key=${keyAPI}`;
  const { data } = await axios.get(url);
  return data.items;
}

async function getVideoSearch(keywords, ammount) {
	const limited = ammountVideoPerSearchPage + ammount >= 50;
	const urlSearch = `search?part=snippet&maxResults=${limited ? 50 : ammountVideoPerSearchPage + ammount}&q=${keywords}&key=${keyAPI}`
	const { data } = await axios.get(urlSearch);
	return data.items
}
async function getVideoWatchingById(videoId) {
	const url = `videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${keyAPI}`
	const { data } = await axios.get(url);
	return data.items
}
async function getVideoRelatedById(videoId, ammount) {
	const limited = ammountVideoPerWatchPage + ammount >= 50;
	const url = `search?part=snippet&&maxResults=${limited ? 50 : ammountVideoPerWatchPage + ammount}&relatedToVideoId=${videoId}&type=video&key=${keyAPI}`
	const { data } = await axios.get(url);
	return data.items;
}
export {getVideo, getVideoSearch, getVideoWatchingById, getVideoRelatedById};
