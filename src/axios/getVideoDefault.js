import axios from "axios";
axios.defaults.baseURL = "https://www.googleapis.com/youtube/v3/";
const keyAPI = "AIzaSyCM8QsNyLtHKF5y_1zSYnBtjAo24-JMRIw";
const ammountVideoPerSection = 12;
async function getVideoDefault() {
	const url = `activities?part=snippet%2CcontentDetails&channelId=UC_x5XG1OV2P6uZZ5FSM9Ttw&maxResults=${ammountVideoPerSection}&key=${keyAPI}`;
  const { data } = await axios.get(url);
  return data.items;
}
export { getVideoDefault }
