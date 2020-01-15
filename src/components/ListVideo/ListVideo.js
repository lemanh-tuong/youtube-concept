import React, { Component } from 'react';
import PropTypes from 'prop-types';
import VideoCard from '../../components/VideoCard/VideoCard';
import ChannelCard from '../../components/ChannelCard/ChannelCard';
import style from './ListVideo.module.scss';
class ListVideo extends Component {
	_renderVideoCard( channelTitle, channelId, videoTitle, imgSrcs, publishedAt, description, videoId, key,sizeAvatar) {
		return <VideoCard
		channelTitle={channelTitle}
		channelId={channelId}
		videoTitle={videoTitle}
		imgSrcs={imgSrcs}
		publishedAt={publishedAt}
		description={description}
		key={key}
		videoId={videoId}
		withAvatar
		sizeAvatar={sizeAvatar}
		/>
	}
	_renderChannelCard(channelTitle, channelId, description, imgSrcs, key) {
		return <ChannelCard channelTitle={channelTitle} channelId={channelId} description={description} imgSrcs={imgSrcs} key={key} />
	}
	_renderSwitch(kind, channelTitle, channelId, videoTitle, imgSrcs, publishedAt, description, id, key, sizeAvatar) {
		switch (kind) {
			case "youtube#channel" :
				return this._renderChannelCard(channelTitle, channelId, description, imgSrcs, key);
			default :
				return this._renderVideoCard(channelTitle, channelId, videoTitle, imgSrcs, publishedAt, description, id, key, sizeAvatar)

		}
	}
	_renderList(listVideos, type) {
		return listVideos.map(videoDetails => {
			const {channelTitle, channelId, title: videoTitle, thumbnails: imgSrcs, publishedAt, description} = videoDetails.snippet;
		  const id = type === "search" ? videoDetails.id.videoId : videoDetails.contentDetails.upload.videoId;
		  const key = videoDetails.id;
		  const kind = videoDetails.id.kind;
		  const sizeAvatar = "medium"
			return <div className={`col-sm-12 col-md-6 col-lg-3 ${style.colVideo}`}>
				{this._renderSwitch( kind, channelTitle, channelId, videoTitle, imgSrcs, publishedAt, description, id, key, sizeAvatar)}
			</div>
		})
	}
	render() {
		const { listVideos, type } = this.props;
		return (
			<div className="ListVideo">
				<div className="row">
					{this._renderList(listVideos, type)}
				</div>
			</div>
		)
	}
}
ListVideo.propTypes = {
	listVideos: PropTypes.array,
	type: PropTypes.string,
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
