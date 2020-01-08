import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import TopChannel from '../../components/TopChannel/TopChannel';
import SubscribeButton from '../ButtonComponent/SubscribeButton/SubscribeButton';
import MoreInfoButton from '../ButtonComponent/MoreInfoButton/MoreInfoButton';
import { Link } from 'react-router-dom';
import style from './VideoDetails.module.scss';
class VideoDetails extends PureComponent {
	state = {
		showMore: false,
		subscribed: false
	}
	_handleToggleShowMore = (e) => {
		e.preventDefault();
		console.log("Click")
		this.setState({
			showMore: !this.state.showMore
		})
	}
	_handleSubscribe = () => {
		this.setState(state => {
			return {
				...state,
				subscribed: !state.subscribed
			}
		})
	}
	_renderTags(tagsList) {
		return tagsList.map(tagContent => this._renderTag(tagContent))
	}
	_renderTag(tagContent) {
		return <Link to={`/search/?q=${tagContent}`} className="tag">#{tagContent}</Link>
	}
	_renderTagsListComponent(tagsList) {
		return <div className="tags">{this._renderTags(tagsList)}</div>
	}
	render() {
		const { showMore, subscribed } = this.state;
		const { imgSrc, videoName, videoId, channelTitle, channelId, viewCount, likeCount, dislikeCount, commentCount, publishedAt, description, withTags, tagsList} = this.props;
		const text = `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
										 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
										 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
										  but also the leap into electronic typesetting,
										  remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
										   and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
		return (
			<div className="VideoDetails">
				<div className="header">
					<div className="VideoDetails__video">
						<div className="player">
							<img src={imgSrc} alt="player" />
						</div>
					</div>
				</div>
				<div className={style.body}>
					<div className="VideoDetails__content">
						{withTags && this._renderTagsListComponent(tagsList)}
						<div className={style.videoName}>{videoName}</div>
						<div className="VideoDetails__info">
							<div className={style.infoContent}>
								<div className={style.infoText}>
									<div className="count">
										<div className="view-count">
											{viewCount} Lượt xem
										</div>
									</div>
									<div className={style.dot}> 
										-
									</div>
									<div className="date">
										<div className="date-text">{publishedAt}</div>
									</div>
								</div>
								<div className="menu-container">
									<div className="menu">
										<div className={style.buttonsNormal}>
											<button className={style.buttonNormal}>
												<i class="fas fa-thumbs-up"></i>
												{likeCount}
											</button>
											<button className={style.buttonNormal}>
												<i class="fas fa-thumbs-down"></i>
												{dislikeCount}
											</button>
											<button className={style.buttonNormal}>
												<i class="fas fa-share"></i>
												Chia sẻ
											</button>
											<button className={style.buttonNormal}>
												<i class="fas fa-list"></i>
												Lưu
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className={style.footer}>
					<div className="footer__container">
						<div className={style.footerContent}>
							<div className={style.top}>
								<TopChannel channelName={channelTitle} channelSubscribe="6.2M" />
								<SubscribeButton subscribed={subscribed} onEventClick={this._handleSubscribe}/>
							</div>
							<div className="info2">
								<div className={style.info2Content}>
									<div className={`${style.description} ${showMore && style.show}`}>
										{description ? description : text}
									</div>
									<MoreInfoButton showMore={showMore} onEventClick={this._handleToggleShowMore}/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
VideoDetails.propTypes = {
	imgSrc: PropTypes.string,
	videoName: PropTypes.string,
	videoId: PropTypes.string,
	channelTitle: PropTypes.string,
	channelId: PropTypes.string,
	viewCount: PropTypes.number,
	likeCount: PropTypes.number,
	dislikeCount: PropTypes.number,
	commentCount: PropTypes.number,
	publishedAt: PropTypes.string,
	description: PropTypes.string,
	withTags: PropTypes.bool,
	tagsList: PropTypes.array,
}
export default VideoDetails;