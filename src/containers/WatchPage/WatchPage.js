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
	_renderVideoCard(channelTitle, channelId, videoTitle, imgSrcs, publishedAt, description, videoId, sizeAvatar) {
		return <VideoCard 
		typeGrid="row"
		channelTitle={channelTitle}
		channelId={channelId}
		videoTitle={videoTitle}
		imgSrcs={imgSrcs}
		description={description}
		publishedAt={publishedAt}
		key={videoId}
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
		  const id = videoDetails.id;
		  const sizeAvatar = "medium"
			return this._renderVideoCard(channelTitle, channelId, videoTitle, imgSrcs, publishedAt, description, id, sizeAvatar)
		})
	}
	render() {
		return (
			<div className={style.WatchPage}>
				<div className={style.left}>
					<AppContext.Consumer>
						{({watchingVideo}) => {
							const {channelTitle, channelId, videoTitle, imgSrcs, publishedAt, description, videoId} = watchingVideo;
							return <VideoDetails 
									withTags 
									tagsList={tags} 
									videoName={videoTitle}
									videoId={videoId}
									channelTitle={channelTitle}
									channelId={channelId}
									viewCount="27M"
									publishedAt={publishedAt}
									imgSrc={imgSrcs.maxres.url}
									description={description}
									/>
						}}
					</AppContext.Consumer>
					<div className="WatchPage__left__body">
						<div className="form--comment">
							<AppContext.Consumer>
								{({onSubmitComment}) => <FormComment onEventSubmit={onSubmitComment} />}
							</AppContext.Consumer>
						</div>
						<SectionComment />
						<SectionComment />
						<SectionComment />
						<SectionComment />
					</div>
				</div>
				<div className={style.right}>
					<div className="WatchPage__right__content">
						<div className={style.top}>
							<div className={style.upnext}>Tiếp theo</div>
							<div className={style.button}>
								<AppContext.Consumer>
									{({autoContinuing, onClickToggleAutoContinuing}) => <ToggleButton active={autoContinuing} onEventClick={onClickToggleAutoContinuing}/>}
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