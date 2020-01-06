import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { AppContext } from '../../AppProvider';
import VideoCard from '../../components/VideoCard/VideoCard';
import style from './ListVideo.module.scss';
class ListVideo extends Component {
	_renderVideoCard(channelTitle, channelId, videoTitle, imgSrcs, publishedAt, description, videoId, sizeAvatar) {
		return <VideoCard 
		channelTitle={channelTitle}
		channelId={channelId}
		videoTitle={videoTitle}
		imgSrcs={imgSrcs}
		publishedAt={publishedAt}
		description={description}
		key={videoId}
		videoId={videoId}
		withAvatar
		sizeAvatar={sizeAvatar}
		/>
	}
	_renderList(listVideos) {
		return listVideos.map(videoDetails => {
			const channelTitle = videoDetails.snippet.channelTitle;
			const channelId = videoDetails.snippet.channelId;
		  const videoTitle = videoDetails.snippet.title;
		  const imgSrcs = videoDetails.snippet.thumbnails;
		  const publishedAt = videoDetails.snippet.publishedAt;
		  const description = videoDetails.snippet.description;
		  const id = videoDetails.id;
		  const sizeAvatar = "medium"
			return <div className={`col-sm-12 col-md-6 col-lg-3 ${style.colVideo}`}>
				{this._renderVideoCard(channelTitle, channelId, videoTitle, imgSrcs, publishedAt, description, id, sizeAvatar)}
			</div>
		})
	}
	render() {
		const { listVideos } = this.props;
		console.log(listVideos)
		return (
			<div className="ListVideo">
				<div className="row">
					{this._renderList(listVideos)}
				</div>
			</div>
		)
	}
	
} 
// render() {
	// 	const { path, url } = this.props
	// 	return (
	// 		<div className="listVideo">
	// 			<div className="row">
	// 				<AppContext.Consumer>
	// 					{({data, searchVideos}) => {
	// 						return (
	// 							<Switch>
	// 								<Route exact path="/" render={() => this._renderList(data)}/>
	// 								<Route path={`${path}/:searchParam`} render={() => this._renderList(searchVideos)} />
	// 							</Switch>
	// 						)
	// 					}}
	// 				</AppContext.Consumer>
	// 			</div>
	// 		</div>
	// 	)
	// }
export default ListVideo;