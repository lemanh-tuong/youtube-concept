import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../../../AppProvider';
import VideoCard from '../../../components/VideoCard/VideoCard';
import TopChannel from '../../../components/TopChannel/TopChannel';
import style from './SideBarRight.module.scss';
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
	const { channelTitle, channelId, title: videoTitle, thumbnails: imgSrcs, publishedAt, description} = data[0].snippet;
	const key = data[0].id;
	const videoId = data[0].contentDetails.upload.videoId;
		return <VideoCard
		channelTitle={channelTitle}
		channelId={channelId}
		videoTitle={videoTitle}
		imgSrcs={imgSrcs}
		publishedAt={publishedAt}
		description={description}
		key={key}
		videoId={videoId}
		withDesc
		withAvatar
		sizeAvatar="big"
		/>
	}
	_renderListTopChannel() {
		return listTopChannel.map((channelDetails, index) => this._renderTopChannel(channelDetails, index))
	}
	_renderTopChannel(channelDetails, key) {
		const { name, contact } = channelDetails;
		return <div className={style.channel}><TopChannel channelName={name} channelSubscribe={contact} key={key}/></div>
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
						<AppContext.Consumer>
							{({data}) => data.length > 0 ? this._renderVideoCard(data) : <div> Loading </div>}
						</AppContext.Consumer>
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
export default SideBarRight
