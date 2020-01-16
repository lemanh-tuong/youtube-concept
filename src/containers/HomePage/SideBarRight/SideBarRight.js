import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import VideoCard from '../../../components/VideoCard/VideoCard';
import TopChannel from '../../../components/TopChannel/TopChannel';
import style from './SideBarRight.module.scss';
const resultRequest = {
 "kind": "youtube#video",
 "etag": "\"OOFf3Zw2jDbxxHsjJ3l8u1U8dz4/rOG7opBd7PSV1ZPLOOwJrc7D1iI\"",
 "id": "QOOw2E_qAsE",
 "snippet": {
  "publishedAt": "2020-01-13T18:59:46.000Z",
  "channelId": "UCzTKskwIc_-a0cGvCXA848Q",
  "title": "I'm Coming Out.",
  "description": "I love you all so much…\n\n🔥 PREVIOUS VIDEO • FIANCE DOES MY MAKEUP IN DUTCH!!! → https://youtu.be/ScndpbSXyfU 🔥\n\nMake sure you subscribe to my channel and hit the notification bell, so you don’t miss any of my new videos → http://bit.ly/SubscribeNikkieTutorials\n\n••••••••••••••••••••••••••••••••••••••••\u00ad\u00ad\u00ad•••••••••••\n\n▷ LET’S BECOME FRIENDS!!\nTWITTER ‣ http://www.twitter.com/Nikkietutorials\nINSTAGRAM ‣ https://instagram.com/nikkietutorials/\nSNAPCHAT ‣ https://www.snapchat.com/add/nikkietutorials\n\n▷ OTHER VIDEOS YOU CAN CHECK OUT…….\n\n👑 THE POWER OF MAKEUP ► http://bit.ly/2scYIrE\n\n💻 Doing LADY GAGA'S Makeup! ► http://bit.ly/2M0moIy\n\n🎀 FULL FACE USING ONLY MY MOM'S MAKEUP CHALLENGE ► http://bit.ly/2BX76Nw\n\n🍑 POWER OF MAKEUP: KIM KARDASHIAN WEST ► http://bit.ly/2iz1RhT\n\n••••••••••••••••••••••••••••••••••••••••\u00ad\u00ad\u00ad•••••••••••\n\nDisclaimer ‣ This video is NOT sponsored. All thoughts mentioned are my own. No affiliate links are used. Honesty is key on my channel, thank you for supporting me!\n\nʕ•ᴥ•ʔ I love you.",
  "thumbnails": {
   "default": {
    "url": "https://i.ytimg.com/vi/QOOw2E_qAsE/default.jpg",
    "width": 120,
    "height": 90
   },
   "medium": {
    "url": "https://i.ytimg.com/vi/QOOw2E_qAsE/mqdefault.jpg",
    "width": 320,
    "height": 180
   },
   "high": {
    "url": "https://i.ytimg.com/vi/QOOw2E_qAsE/hqdefault.jpg",
    "width": 480,
    "height": 360
   },
   "standard": {
    "url": "https://i.ytimg.com/vi/QOOw2E_qAsE/sddefault.jpg",
    "width": 640,
    "height": 480
   }
  },
  "channelTitle": "NikkieTutorials",
  "tags": [
   "i'm coming out",
   "coming out",
   "nikkietutorials coming out",
   "coming",
   "out",
   "storytime",
   "the truth",
   "truth",
   "lgbt",
   "lgbtq",
   "nikkietutorials",
   "nikkie tutorials",
   "nikkitutorials",
   "nikki tutorials",
   "transgender",
   "coming out story",
   "proud",
   "free",
   "nikkie de jager",
   "nikkie transgender",
   "nikkie trans",
   "nikkie coming out"
  ],
  "categoryId": "26",
  "liveBroadcastContent": "none",
  "localized": {
   "title": "I'm Coming Out.",
   "description": "I love you all so much…\n\n🔥 PREVIOUS VIDEO • FIANCE DOES MY MAKEUP IN DUTCH!!! → https://youtu.be/ScndpbSXyfU 🔥\n\nMake sure you subscribe to my channel and hit the notification bell, so you don’t miss any of my new videos → http://bit.ly/SubscribeNikkieTutorials\n\n••••••••••••••••••••••••••••••••••••••••\u00ad\u00ad\u00ad•••••••••••\n\n▷ LET’S BECOME FRIENDS!!\nTWITTER ‣ http://www.twitter.com/Nikkietutorials\nINSTAGRAM ‣ https://instagram.com/nikkietutorials/\nSNAPCHAT ‣ https://www.snapchat.com/add/nikkietutorials\n\n▷ OTHER VIDEOS YOU CAN CHECK OUT…….\n\n👑 THE POWER OF MAKEUP ► http://bit.ly/2scYIrE\n\n💻 Doing LADY GAGA'S Makeup! ► http://bit.ly/2M0moIy\n\n🎀 FULL FACE USING ONLY MY MOM'S MAKEUP CHALLENGE ► http://bit.ly/2BX76Nw\n\n🍑 POWER OF MAKEUP: KIM KARDASHIAN WEST ► http://bit.ly/2iz1RhT\n\n••••••••••••••••••••••••••••••••••••••••\u00ad\u00ad\u00ad•••••••••••\n\nDisclaimer ‣ This video is NOT sponsored. All thoughts mentioned are my own. No affiliate links are used. Honesty is key on my channel, thank you for supporting me!\n\nʕ•ᴥ•ʔ I love you."
  },
  "defaultAudioLanguage": "en"
 },
 "contentDetails": {
  "duration": "PT17M14S",
  "dimension": "2d",
  "definition": "hd",
  "caption": "false",
  "licensedContent": true,
  "projection": "rectangular"
 },
 "statistics": {
  "viewCount": "23643363",
  "likeCount": "2300646",
  "dislikeCount": "80794",
  "favoriteCount": "0",
  "commentCount": "284195"
 }
}
const listTopChannel = [
	{
		name: "LEGO",
		contact: "6.2M"
	},
	{
		name: "LEGO",
		contact: "6.2M"
	},
	{
		name: "LEGO",
		contact: "6.2M"
	},
	{
		name: "LEGO",
		contact: "6.2M"
	},
	{
		name: "LEGO",
		contact: "6.2M"
	},
	{
		name: "LEGO",
		contact: "6.2M"
	},
]
class SideBarRight extends PureComponent {
	_renderVideoCard(data) {
		const { publishedAt, channelId, title, description, thumbnails, channelTitle } = resultRequest.snippet;
		const videoId = resultRequest.id;
		const statusRequest = "success";
		return <VideoCard
		channelTitle={channelTitle}
		channelId={channelId}
		videoTitle={title}
		imgSrc={thumbnails.standard.url}
		publishedAt={publishedAt}
		description={description}
		videoId={videoId}
		withDesc
		withAvatar
		sizeAvatar="big"
		statusRequest={statusRequest}
		/>
	}
	_renderListTopChannel() {
		return listTopChannel.map((channelDetails, index) => this._renderTopChannel(channelDetails, index))
	}
	_renderTopChannel(channelDetails, key) {
		const { name, contact } = channelDetails;
		return <div className={style.channel} key={key}><TopChannel channelName={name} channelSubscribe={contact} /></div>
	}
	render() {
		return (
			<div className={style.SideBarRight}>
				<div className={style.section}>
					<div className="buttonGroup">
						<NavLink className={style.buttonDirection} to="/" activeClassName={style.selected}>Live</NavLink>
						<NavLink className={style.buttonDirection} to="/more" activeClassName={style.selected}>Show More</NavLink>
					</div>
					<div className="VideoCard">
						{this._renderVideoCard()}
					</div>
				</div>
				<div className={style.section}>
					<div className={style.buttonGroup}>
						<NavLink className={style.buttonDirection} to="/" activeClassName={style.selected}>Top Channel</NavLink>
						<NavLink className={style.buttonDirection} to="/more" activeClassName={style.selected}>Show More</NavLink>
					</div>
					<div className="listChannel">
						<ul className="list">
							{this._renderListTopChannel()}
						</ul>
					</div>
				</div>
			</div>
		)
	}
}
SideBarRight.propTypes = {
	data: PropTypes.object,
	statusRequest: PropTypes.string,
}
const mapStateToProps = state => ({
	data: state.HomePageReducers.data.data,
	statusRequest: state.HomePageReducers.data.status
})
export default connect(mapStateToProps, null)(SideBarRight);
