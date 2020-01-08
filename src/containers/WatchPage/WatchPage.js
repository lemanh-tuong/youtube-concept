import React, { PureComponent } from 'react';
import { AppContext } from '../../AppProvider';
import VideoCard from '../../components/VideoCard/VideoCard';
import VideoDetails from '../../components/VideoDetails/VideoDetails';
import ToggleButton from '../../components/ButtonComponent/ToggleButton/ToggleButton';
import FormComment from '../../components/FormComment/FormComment';
import SectionComment from '../SectionComment/SectionComment';
import style from './WatchPage.module.scss';
const tags = ["a","b","c"];
class WatchPage extends PureComponent {
	componentDidMount() {
		window.scrollTo(0,0);
	}
	_renderVideoCard(channelTitle, channelId, videoTitle, imgSrcs, publishedAt, description, videoId, key, sizeAvatar) {
		return <VideoCard 
		typeGrid="row"
		channelTitle={channelTitle}
		channelId={channelId}
		videoTitle={videoTitle}
		imgSrcs={imgSrcs}
		description={description}
		publishedAt={publishedAt}
		key={key}
		videoId={videoId}
		withAvatar
		sizeAvatar={sizeAvatar}
		/>
	}
	_renderList(listVideo) {
		return listVideo.map(videoDetails => {
			const channelTitle = videoDetails.snippet.channelTitle;
			const channelId = videoDetails.snippet.channelId;
		  const videoTitle = videoDetails.snippet.title;
		  const imgSrcs = videoDetails.snippet.thumbnails;
		  const publishedAt = videoDetails.snippet.publishedAt;
		  const description = videoDetails.snippet.description;
		  const id = videoDetails.contentDetails.upload.videoId;
		  const key = videoDetails.id;
		  const sizeAvatar = "medium"
			return this._renderVideoCard(channelTitle, channelId, videoTitle, imgSrcs, publishedAt, description, id, key, sizeAvatar)
		})
	}
	_renderVideoDetails({channelTitle, channelId, videoTitle, imgSrcs, publishedAt, description, videoId, viewCount, likeCount, dislikeCount, commentCount}) {
		return <VideoDetails 
						withTags 
						tagsList={tags} 
						videoName={videoTitle}
						videoId={videoId}
						channelTitle={channelTitle}
						channelId={channelId}
						publishedAt={publishedAt}
						imgSrc={imgSrcs.high.url}
						description={description}
						viewCount={viewCount}
						likeCount={likeCount}
						dislikeCount={dislikeCount}
						commentCount={commentCount}
						/>
	}
	render() {
		console.log("A")
		return (
			<div className={style.WatchPage}>
				<div className={style.left}>
					<AppContext.Consumer>
						{({watchingVideo}) => {
							// const {channelTitle, channelId, videoTitle, imgSrcs, publishedAt, description, videoId, viewCount, likeCount, dislikeCount, commentCount} = watchingVideo;
							return watchingVideo.videoTitle ? this._renderVideoDetails(watchingVideo) : <div> Loading </div>
						}}
					</AppContext.Consumer>
					<div className="WatchPage__left__body">
						<div className="form--comment">
							<AppContext.Consumer>
								{({onSubmitComment}) => <FormComment onEventSubmit={onSubmitComment} />}
							</AppContext.Consumer>
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
						<div className="section-comment">
							<SectionComment />
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
							<AppContext.Consumer>
								{({data}) => this._renderList(data)}
							</AppContext.Consumer>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
export default WatchPage;