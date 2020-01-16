import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import getVideoWatching from '../../thunks/thunkGetVideoWatching/thunkGetVideoWatching';
import getVideoRelated from '../../thunks/thunkGetVideoRelated/thunkGetVideoRelated';
import getQuery from '../../handleQuery/handleQuery'
import { AppContext } from '../../AppProvider/AppProvider';
import VideoCard from '../../components/VideoCard/VideoCard';
import VideoDetails from '../../components/VideoDetails/VideoDetails';
import ToggleButton from '../../components/ButtonComponent/ToggleButton/ToggleButton';
import FormComment from '../../components/FormComment/FormComment';
import ErrorPage from '../ErrorPage/ErrorPage';
import SectionComment from '../SectionComment/SectionComment';
import Scroll from '../../components/Scroll/Scroll';
import style from './WatchPage.module.scss';

class WatchPage extends PureComponent {
	componentDidMount() {
		window.scrollTo(0,0);
		console.log("Mouted");
		const queryWatch = getQuery(window.location.search, "v");
		const { getVideoWatching, getVideoRelated } = this.props;
		getVideoWatching(queryWatch[0]);
		getVideoRelated(queryWatch[0], 0);
	}

  // Event Click
  _handleWatchVideo = (videoId) => {
  	const { getVideoWatching, getVideoRelated } = this.props;
  	return () => {
  		window.scrollTo(0,0);
  		getVideoWatching(videoId);
  		getVideoRelated(videoId, 0);
  	}
  }

  // Render
	_renderVideoCard(channelTitle, channelId, videoTitle, imgSrc, publishedAt, description, videoId, key, sizeAvatar, statusRequest = "loading", onEventClick) {
		return <VideoCard
		displayRow
		channelTitle={channelTitle}
		channelId={channelId}
		videoTitle={videoTitle}
		imgSrc={imgSrc}
		description={description}
		publishedAt={publishedAt}
		key={key}
		videoId={videoId}
		withAvatar
		sizeAvatar={sizeAvatar}
		statusRequest={statusRequest}
		onEventClickWatch={onEventClick}
		/>
	}

	//Related Video
	_renderListRelatedVideo = () => {
		const { dataVideoRelated, statusRequestVideoRelated } = this.props
		return dataVideoRelated.map(videoDetails => {
			const { channelTitle, channelId, title: videoTitle, thumbnails, publishedAt, description } = videoDetails.snippet;
			const imgSrc = thumbnails.high.url
		  const videoId = videoDetails.id.videoId;
		  const key = videoDetails.etag;
		  const sizeAvatar = "medium";
			return this._renderVideoCard(channelTitle, channelId, videoTitle, imgSrc, publishedAt, description, videoId, key, sizeAvatar, "success", this._handleWatchVideo)
		})
	}
	// _renderListRelatedVideoLoading = () => {
	// 	const { dataVideoRelated } = this.props
	// 	return dataVideoRelated.map(id => {
	// 		return this._renderVideoCard()
	// 	})
	// }
	_renderListRelatedVideoLoading = () => {
		const arr = [1,2,3,4,5];
		return arr.map(id => this._renderVideoCard());
	}

	// Video Details
	_renderVideoDetailsSuccess = () => {
		const { statusRequestVideoWatching } = this.props
		const { publishedAt, channelId, title, description, thumbnails, channelTitle, tags } = this.props.dataVideoWatching.snippet;
		const { viewCount, likeCount, dislikeCount, favoriteCount, commentCount } = this.props.dataVideoWatching.statistics;
		const imgSrc = thumbnails.high.url
		return <VideoDetails
						publishedAt={publishedAt}
						channelId={channelId}
						videoName={title}
						description={description}
						imgSrc={imgSrc}
						channelTitle={channelTitle}
						withTags
						tagsList={tags}
						viewCount={viewCount}
						likeCount={likeCount}
						dislikeCount={dislikeCount}
						favoriteCount={favoriteCount}
						commentCount={commentCount}
						statusRequest={statusRequestVideoWatching}
						/>
	}
	_renderVideoDetailsLoading = () => {
		return <VideoDetails statusRequest="loading" />
	}
	_renderVideoDetailsContent = () => {
		const { statusRequestVideoWatching } = this.props;
		switch (statusRequestVideoWatching) {
			case "loading":
				return this._renderVideoDetailsLoading();
			case "success":
				return this._renderVideoDetailsSuccess();
			default:
				return null;
		}
	}


	_renderContent = () => {
		const { statusRequestVideoWatching, statusRequestVideoRelated } = this.props;
		if(statusRequestVideoRelated === "failure" || statusRequestVideoWatching === "failure") {
			return <ErrorPage />
		}
		else if ( statusRequestVideoRelated !== "" && statusRequestVideoWatching !== "") {
			return this._renderContentNotFailure();
		}
		else return null;
	}
	_renderContentNotFailure = () => {
		const { statusRequestVideoWatching, dataVideoWatching, statusRequestVideoRelated, dataVideoRelated } = this.props;
		const { getVideoWatching, getVideoRelated } = this.props;
		const queryWatch = getQuery(window.location.search, "v");
		return (
			<Scroll
			next={getVideoRelated}
			query={queryWatch[0]}
			hasMore={true}
			statusRequest={statusRequestVideoRelated}
			nowLength={dataVideoRelated ? dataVideoRelated.length : 0}
			maxLength={50}
			>
				<div className={style.WatchPage}>
					<div className={style.left}>
						<div className="WatchPage__left__header">
							{this._renderVideoDetailsContent()}
						</div>
						<div className="WatchPage__left__body">
							<div className="form--comment">
								<AppContext.Consumer>
									{({onSubmitComment}) => <FormComment onEventSubmit={onSubmitComment} />}
								</AppContext.Consumer>
								<div className="section-comment">
									<SectionComment />
								</div>
								<div className="section-comment">
									<SectionComment />
								</div>
								<div className="section-comment">
									<SectionComment />
								</div>
								<div className="section-comment">
									<SectionComment />
								</div>
							</div>
						</div>
					</div>
					<div className={style.right}>
						<div className="WatchPage__right__content">
							<div className={style.top}>
								<div className={style.upnext}>Tiếp theo</div>
								<div className={style.button}>
									<AppContext.Consumer>
										{({autoContinuing, onClickToggleAutoContinuing}) => {
											return (
												<div className={style.autoContinuingButton}>
													<span>Tự Động Phát</span>
													<ToggleButton active={autoContinuing} onEventClick={onClickToggleAutoContinuing}/>
												</div>
											)
										}}
									</AppContext.Consumer>
								</div>
							</div>
							<div className="WatchPage__right__list-video">
								{this._renderListRelatedVideo()}
								{ statusRequestVideoRelated === "loading" && this._renderListRelatedVideoLoading()}
							</div>
						</div>
					</div>
				</div>
			</Scroll>
		)
	}
	render() {
		return this._renderContent();
	}
}
const mapStateToProps = state => {
	return {
		dataVideoWatching: state.WatchPageReducers.dataVideoWatching.data,
		statusRequestVideoWatching: state.WatchPageReducers.dataVideoWatching.status,
		dataVideoRelated: state.WatchPageReducers.dataVideoRelated.data,
		statusRequestVideoRelated: state.WatchPageReducers.dataVideoRelated.status
	}
}
const mapDispatchToProps = {
	getVideoWatching,
	getVideoRelated
}
export default connect(mapStateToProps, mapDispatchToProps)(WatchPage);
