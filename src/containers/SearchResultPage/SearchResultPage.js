import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getVideoSearch from '../../thunks/thunkGetVideoSearch/thunkGetVideoSearch';
import { AppContext } from '../../AppProvider/AppProvider';
import Scroll from '../../components/Scroll/Scroll';
import VideoCard from '../../components/VideoCard/VideoCard';
import ChannelCard from '../../components/ChannelCard/ChannelCard';
import style from './SearchResultPage.module.scss';
import getQuery from '../../handleQuery/handleQuery';
class SearchResultPage extends Component {
	componentDidMount() {
		window.scrollTo(0,0);
  	const querySearch = getQuery(window.location.search, "q");
  	const { getVideoSearch } = this.props;
  	getVideoSearch(querySearch[0], 0)
  }
	_renderVideoCard (channelTitle, channelId, videoTitle , videoId, imgSrc, publishedAt, description, statusRequest = "loading", sizeAvatar = "big", withAvatar = false, withDesc = false) {
		return <VideoCard
		channelTitle={channelTitle}
		channelId={channelId}
		videoTitle={videoTitle}
		videoId={videoId}
		imgSrc={imgSrc}
		publishedAt={publishedAt}
		description={description}
		statusRequest={statusRequest}
		withDesc={withDesc}
		withAvatar={withAvatar}
		sizeAvatar={sizeAvatar}
		/>
	}
	_renderChannelCard(channelTitle, channelId, description, imgSrc) {
		return <ChannelCard channelTitle={channelTitle} channelId={channelId} description={description} imgSrc={imgSrc} />
	}
	// List Video
	_renderListSuccess = (listVideos, statusRequest) => {
		return listVideos.map(videoDetails => {
			const { channelTitle, channelId, title: videoTitle, thumbnails, publishedAt, description } = videoDetails.snippet;
		  const key = videoDetails.etag;
		  const kind = videoDetails.id.kind;
		  const sizeAvatar = "medium";
		  const imgSrc = thumbnails.high.url;
		  const withDesc = false;
		  const withAvatar = true;
		  const videoId = kind.includes("#channel") ? videoDetails.id.channelId : videoDetails.id.videoId;
			return <div className={`col-sm-6 col-md-4 col-lg-3 ${style.colVideo}`} key={key}>
				{kind.includes("#channel") ? this._renderChannelCard(channelTitle, channelId, description, imgSrc) : this._renderVideoCard( channelTitle, channelId, videoTitle, videoId, imgSrc, publishedAt, description, statusRequest, sizeAvatar, withAvatar, withDesc )}
			</div>
		})
	}
	_renderListLoading = () => {
		const arr = [1,2,3,4,5,6,7,8,9,10,11,12];
		return arr.map(id => {
			return (
				<div className={`col-sm-6 col-md-4 col-lg-3 ${style.colVideo}`} key={id}>
					{this._renderVideoCard()}
				</div>
			)
		})
	}
	_renderListContent = () => {
		const { data, statusRequest } = this.props;
		switch (statusRequest) {
			case "success":
				return this._renderListSuccess(data, statusRequest);
			case "loading":
				return this._renderListLoading();
			default:
				return null
		}
	}
	render() {
		const { data, statusRequest } = this.props;
		const { getVideoSearch } = this.props;
		const querySearch = getQuery(window.location.search, "q");
		return (
			<Scroll
			// next={getVideoSearch}
			// query={querySearch[0]}
			// hasMore={true}
			// statusRequest={statusRequest}
			// nowLength={data ? data.length : 0}
			// maxLength={50}
			>
				<div className={style.SearchResultPage}>
					{this._renderListContent()}
		    </div>
	    </Scroll>
		)
	}
}
const mapStateToProps = state => ({
	data: state.SearchPageReducers.data.data,
	statusRequest: state.SearchPageReducers.data.status
})
const mapDispatchToProps = {
	getVideoSearch
}
SearchResultPage.propTypes = {
	data: PropTypes.array,
	statusRequest: PropTypes.string,
	getVideoSearch: PropTypes.func,
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchResultPage);
