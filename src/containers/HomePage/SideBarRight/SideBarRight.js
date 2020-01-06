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
		const channelTitle = data[0].snippet.channelTitle;
		const channelId = data[0].snippet.channelId;
	  const videoTitle = data[0].snippet.title;
	  const imgSrcs = data[0].snippet.thumbnails;
	  const publishedAt = data[0].snippet.publishedAt;
	  const description = data[0].snippet.description;
	  const videoId = data[0].id;
		return <VideoCard 
		channelTitle={channelTitle}
		channelId={channelId}
		videoTitle={videoTitle}
		imgSrcs={imgSrcs}
		publishedAt={publishedAt}
		description={description}
		key={videoId}
		videoId={videoId}
		withDesc
		withAvatar
		sizeAvatar="big"
		/>
	}
	_renderListTopChannel() {
		return listTopChannel.map(channelDetails => this._renderTopChannel(channelDetails))
	}
	_renderTopChannel(channelDetails) {
		const { name, contact } = channelDetails;
		return <div className={style.channel}><TopChannel /></div>
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