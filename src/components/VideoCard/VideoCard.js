import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Avatar from '../Avatar/Avatar';
import style from './VideoCard.module.scss';
class VideoCard extends Component {
	_renderDesc(desc) {
		return (
			<div className={style.desc}>
				<span>{desc}</span>
			</div>
		)
	}
	_renderAvatar(statusRequest, channelId, sizeAvatar) {
		return (
			<div className={`${style.channelAvatar} ${style[sizeAvatar]}`}>
				<Link to={`/channel/${channelId}`}><Avatar size={sizeAvatar} statusRequest={statusRequest}/></Link>
			</div>
		)
	}
	_renderVideoCard() {
		const { channelTitle, channelId, videoTitle, imgSrc, publishedAt, description, videoId, statusRequest, withDesc, withAvatar, sizeAvatar, onEventClickWatch, onEventClickChannel } = this.props;
		const checkStatus = statusRequest === "loading" ? style.loading : null
		return (
			<div className={`${style.videoCard} ${checkStatus}`}>
				<div className={style.header}>
					<div className={style.img}>
						<Link to={`/watch?v=${videoId}`}>
							{ statusRequest === "success" && <img src={imgSrc} alt="Image" /> }
						</Link>
					</div>
					{ withAvatar && this._renderAvatar(statusRequest, channelId, sizeAvatar)}
				</div>
				<div className={style.body}>
					<div className={style.channelName}>
						<Link to={`/channel/${channelId}`}>{channelTitle}</Link>
					</div>
					<div className={style.videoName}>
						<Link to={`/watch?v=${videoId}`} className={style.link}>{videoTitle}</Link>
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
	_renderVideoCard2() {
		const { channelTitle, channelId, videoTitle, imgSrc, publishedAt, description, videoId, statusRequest, onEventClickWatch, onEventClickChannel } = this.props;
		const checkStatus = statusRequest === "loading" ? style.loadingRow : null
		return (
			<div className={`${style.videoCard2} ${checkStatus}`}>
				<div className={style.left}>
					<div className={style.img}>
							<Link to={`/watch?v=${videoId}`} onClick={statusRequest === "success" && onEventClickWatch(videoId)}>
								{ statusRequest === "success" && <img src={imgSrc} alt="Img" />}
							</Link>
					</div>
				</div>
				<div className={style.right}>
					<div className={style.videoName}>
						<Link className={style.link} to={`/watch?v=${videoId}`}>
							{videoTitle}
						</Link>
					</div>
					<div className={style.channelName}>
						<Link to={`/channel/${channelId}`}>{channelTitle}</Link>
					</div>
					<div className={style.contact}>
						<div className={style.contactItem}>
							<span className={style.contactName}>
								Views 28.1K
							</span>
						</div>
					</div>
				</div>
			</div>
		)
	}
	render() {
		const { displayRow } = this.props
		return (
			displayRow ? this._renderVideoCard2() : this._renderVideoCard()
		)
	}
}
VideoCard.propTypes = {
	channelTitle: PropTypes.string,
	channelId: PropTypes.string,
	videoTitle: PropTypes.string,
	imgSrc: PropTypes.string,
	publishedAt: PropTypes.string,
	description: PropTypes.string,
	videoId: PropTypes.string,
	sizeAvatar: PropTypes.string,
	statusRequest: PropTypes.string,
	withDesc: PropTypes.bool,
	withAvatar: PropTypes.bool,
	displayRow: PropTypes.bool,
	onEventClick: PropTypes.func,
}
VideoCard.defaultProps = {
	channelTitle: "channelTitle",
	channelId: "channelId",
	videoTitle: "videoTitle",
	imgSrc: '',
	publishedAt: 'publishedAt',
	description: 'description',
	videoId: 'videoId',
	sizeAvatar: "",
	statusRequest: "success",
	withAvatar: false,
	withDesc: false,
	displayRow: false,
}
export default VideoCard
