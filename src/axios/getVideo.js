import axios from "axios";
const keyAPI = "AIzaSyCM8QsNyLtHKF5y_1zSYnBtjAo24-JMRIw";
const ammountVideoPerPage = 12;
const url = `https://www.googleapis.com/youtube/v3/activities?part=snippet%2CcontentDetails&channelId=UC_x5XG1OV2P6uZZ5FSM9Ttw&maxResults=${ammountVideoPerPage}&key=${keyAPI}`;
async function getVideo() {
  const { data } = await axios.get(url);
  return data.items;
}
export default getVideo;
