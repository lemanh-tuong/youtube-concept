import axios from "axios";
const keyAPI = "AIzaSyCM8QsNyLtHKF5y_1zSYnBtjAo24-JMRIw";
const ammountVideoPerSection = 12;
const ammountVideoPerSearchPage = 24;
async function getVideo() {
	const url = `https://www.googleapis.com/youtube/v3/activities?part=snippet%2CcontentDetails&channelId=UC_x5XG1OV2P6uZZ5FSM9Ttw&maxResults=${ammountVideoPerSection}&key=${keyAPI}`;
  const { data } = await axios.get(url);
  return data.items;
}

async function getVideoSearch(keywords) {
	const urlSearch = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${ammountVideoPerSearchPage}&q=${keywords}&key=${keyAPI}`
	const { data } = await axios.get(urlSearch);
	return data.items
}
async function getVideoById(videoId) {
	const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${keyAPI}`
	const { data } = await axios.get(url);
	return data.items
}
export {getVideo, getVideoSearch, getVideoById};
