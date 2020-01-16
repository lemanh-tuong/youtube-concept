import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import getMyChannel from '../../thunks/thunkGetMyChannel/thunkGetMyChannel';
import { AppContext } from '../../AppProvider/AppProvider';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import  ToggleButton from '../../components/ButtonComponent/ToggleButton/ToggleButton';
import Channel from '../../components/Channel/Channel';
import Logo from '../../components/Logo/Logo';
import Overlay from '../../components/Overlay/Overlay';
import style from './SideBar.module.scss';

const resultRequestMyChannel  = {
 "kind": "youtube#channelListResponse",
 "etag": "\"OOFf3Zw2jDbxxHsjJ3l8u1U8dz4/AsXFRVMQUM45Ni_xc7r6J0g6j4I\"",
 "pageInfo": {
  "totalResults": 1,
  "resultsPerPage": 1
 },
 "items": [
  {
   "kind": "youtube#channel",
   "etag": "\"OOFf3Zw2jDbxxHsjJ3l8u1U8dz4/ORpwJuGpeZdR_WnxYwYznLcr9Ak\"",
   "id": "UC9Xbax72QnvTgBQifbaxbWQ",
   "snippet": {
    "title": "Tưởng Lê Mạnh",
    "description": "",
    "publishedAt": "2020-01-06T05:35:52.000Z",
    "thumbnails": {
     "default": {
      "url": "https://yt3.ggpht.com/a/AGF-l79Tza_q_3S7Mw6tDr-DwCkZvH6bd2h_tTW8PA=s88-c-k-c0xffffffff-no-rj-mo",
      "width": 88,
      "height": 88
     },
     "medium": {
      "url": "https://yt3.ggpht.com/a/AGF-l79Tza_q_3S7Mw6tDr-DwCkZvH6bd2h_tTW8PA=s240-c-k-c0xffffffff-no-rj-mo",
      "width": 240,
      "height": 240
     },
     "high": {
      "url": "https://yt3.ggpht.com/a/AGF-l79Tza_q_3S7Mw6tDr-DwCkZvH6bd2h_tTW8PA=s800-c-k-c0xffffffff-no-rj-mo",
      "width": 800,
      "height": 800
     }
    },
    "localized": {
     "title": "Tưởng Lê Mạnh",
     "description": ""
    }
   },
   "contentDetails": {
    "relatedPlaylists": {
     "likes": "LL9Xbax72QnvTgBQifbaxbWQ",
     "favorites": "FL9Xbax72QnvTgBQifbaxbWQ",
     "uploads": "UU9Xbax72QnvTgBQifbaxbWQ",
     "watchHistory": "HL",
     "watchLater": "WL"
    }
   },
   "statistics": {
    "viewCount": "0",
    "commentCount": "0",
    "subscriberCount": "0",
    "hiddenSubscriberCount": false,
    "videoCount": "0"
   }
  }
 ]
}

const a = [
	{
		link: '/video',
		content: 'Videos',
	},
	{
		link: '/movie',
		content: 'Movies and Shows',
	},
	{
		link: '/Premium',
		content: 'Premium Contents'
	},
	{
		link: '/live',
		content: 'Live',
	}
]
const b = [
	{
		link: '/subcribtions',
		content: 'Subcribtions',
		notification: '29 news'
	},
	{
		link: '/movie',
		content: 'Movies and Shows',
	},
	{
		link: '/Premium',
		content: 'Premium Contents'
	},
	{
		link: '/live',
		content: 'Live',
	}
]
const c = [
	{
		link: '/Premium',
		content: 'Premium Contents'
	},
	{
		link: '/live',
		content: 'Live',
	}
]
class SideBar extends Component {
	componentDidMount() {
	// const keyAPI = "AIzaSyCM8QsNyLtHKF5y_1zSYnBtjAo24-JMRIw";
	// const url =  `channels?part=snippet%2CcontentDetails%2Cstatistics&mine=true&key=${keyAPI}`;
	// 	this.props.getMyChannel(url);
	}
	render() {
		const { title, thumbnails } = resultRequestMyChannel.items[0].snippet;
		const imgSrc = thumbnails.high.url;
		const { viewCount, commentCount, videoCount } = resultRequestMyChannel.items[0].statistics;
		const { statusRequest, dataMyChannel, openMenu, onClickToggleMenu } = this.props
		const status = "success";

		return (
			<AppContext.Consumer>
				{({refSideBar}) => {
					return (
						<div className={`${style.sideBar} ${openMenu ? style.open : ''}`}>
							<div className={style.content} ref={refSideBar}>
								<div className={style.header}>
									<div className={style.brand}>
										<Link to="/">
											<Logo />
										</Link>
									</div>
									<div className={style.channel}>
										<Channel statusRequest={status} channelName={title} imgSrc={imgSrc} videoCount={videoCount} viewCount={videoCount} statusUser="busy" />
									</div>
								</div>
								<div className={style.body}>
									<ButtonGroup listBtn={a}/>
									<ButtonGroup listBtn={b}/>
									<ButtonGroup listBtn={c}/>
									<AppContext.Consumer>
										{({settings, onClickToggleDarkMode}) => {
											return (
												<div className={style.toggleButton}>
													<div className="mb-1">
														<ToggleButton active={settings.darkMode} onEventClick={onClickToggleDarkMode} />
													</div>
													<p>Light {settings.darkMode ? "ON" : "OFF"}</p>
												</div>
											)
										}}
									</AppContext.Consumer>
									<div className={style.settingsButton}>
										<Link to="/settings" onClick={onClickToggleMenu}>
											<i className="fas fa-cog"></i>
										</Link>
									</div>
								</div>
							</div>
							{openMenu && <Overlay onClick={onClickToggleMenu}/>}
						</div>
					)
				}}
			</AppContext.Consumer>

		)
	}
}
// 155 {openMenu && <Overlay onClick={onClickToggleMenu}/>}
const mapStateToProps = state => ({
	status: state.MyChannelReducer.status,
	data: state.MyChannelReducer.data,
})
const mapDispatchToProps = {
	getMyChannel
}
SideBar.propTypes = {
	status: PropTypes.string,
	dataMyChannel: PropTypes.object,
}
export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
