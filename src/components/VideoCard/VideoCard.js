import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AppContext } from '../../AppProvider';
import Avatar from '../Avatar/Avatar';
import style from './VideoCard.module.scss';
class VideoCard extends Component {
	_renderDesc(desc) {
		return (
			<div className={style.desc}>
				{desc}
			</div>
		)
	} 
	_renderAvatar(channelId, sizeAvatar) {
		return (
			<div className={`${style.channel} ${style[sizeAvatar]}`}>
				<Link to={`/channel/${channelId}`}><Avatar size={sizeAvatar} /></Link>
			</div>
		)
	}
	_renderVideoCard(props) {
		const { channelTitle, channelId, videoTitle, imgSrcs, publishedAt, description, videoId, withDesc, withAvatar, sizeAvatar } = props;
		const imgMaxRes = imgSrcs.maxres.url;
		return (
			<div className={style.videoCard}>
				<div className={style.header}>
					<div className="img">
						<AppContext.Consumer>
							{({onClickWatchVideo}) => {
								return (
									<Link to={`/watch`} onClick={onClickWatchVideo({channelTitle, channelId, videoTitle, imgSrcs, publishedAt, description, videoId})}>
										<img src={imgMaxRes} alt="Img" />
									</Link>
								)
							}}
						</AppContext.Consumer>
					</div>
					{ withAvatar && this._renderAvatar(channelId, sizeAvatar)}
				</div>
				<div className={style.body}>
					<div className={style.channelName}>
						<Link to={`/channel/${channelId}`}>{channelTitle}</Link>
					</div>
					<div className={style.videoName}>
						<Link to={`/video/${videoId}`} className={style.link}>{videoTitle}</Link>
					</div>
					{withDesc && this._renderDesc(description)}
				</div>
				<div className={style.footer}>
					<div className={style.contact}>
						<div className={style.contactItem}>
							<span className={style.contactName}>
								Views 28.1K
							</span>
						</div>
						 <div className={style.contactItem}>
							<span className={style.contactName}>
								1H Ago
							</span>
						</div>
					</div>
				</div>
			</div>
		)
	}
	_renderVideoCard2(props) {
		const { channelTitle, channelId, videoTitle, imgSrcs, publishedAt, description, videoId } = props;
		console.log(description)
		const imgMaxRes = imgSrcs.maxres.url;
		return (
			<div className={style.videoCard2}>
				<div className={style.left}>
					<div className="img">
						<AppContext.Consumer>
							{({onClickWatchVideo}) => {
								return (
									<Link to={`/watch`} onClick={onClickWatchVideo({channelTitle, channelId, videoTitle, imgSrcs, publishedAt, description, videoId})}>
										<img src={imgMaxRes} alt="Img" />
									</Link>
								)
							}}
						</AppContext.Consumer>
					</div>
				</div>
				<div className={style.right}>
					<div className={style.videoName}>
							<Link to={`/video/${videoId}`} className={style.link}>{videoTitle}</Link>
					</div>
					<div className={style.channelName}>
						<Link to={`/channel/${channelId}`}>{channelTitle}</Link>
					</div>
					<div className={style.contactItem}>
						<span className={style.contactName}>
							Views 28.1K
						</span>
					</div>
				</div>
			</div>
		)
	}
	render() {
		const { typeGrid } = this.props
		return (
			typeGrid === "row" ? this._renderVideoCard2(this.props) : this._renderVideoCard(this.props)
		)
	}
}
VideoCard.propTypes = {
	typeGrid: PropTypes.string,
	channelTitle: PropTypes.string,
	channelId: PropTypes.string,
	videoTitle: PropTypes.string,
	imgSrcs: PropTypes.object,
	publishedAt: PropTypes.string,
	description: PropTypes.string,
	videoId: PropTypes.string,
	withDesc: PropTypes.bool,
	withAvatar: PropTypes.bool,
	sizeAvatar: PropTypes.string
}
export default VideoCard