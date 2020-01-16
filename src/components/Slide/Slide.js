import React, { Component } from 'react';
import PropTypes from 'prop-types';
import VideoCard from '../VideoCard/VideoCard'
import style from './Slide.module.scss';
class Slide extends Component {
	state = {
		currentSlide: 0,
		maxSlide: 5,
		perSlideShow: 2
	}
	componentDidMount() {
		this.intervalSlide = setInterval(this._nextSlide, 2000);
	}
	componentWillUnmount() {
		clearInterval(this.intervalSlide);
	}
	_nextSlide = () => {
		this.setState(state => {
			if(state.currentSlide > state.maxSlide - state.perSlideShow - 1) {
				return {
					...state,
					currentSlide: 0
				}
			}
			else {
				return {
					...state,
					currentSlide: state.currentSlide + 1
				}
			}
		})
	}
	_prevSlide = () => {
		this.setState(state => {
			if(state.currentSlide === 0) {
				return {
					...state,
					currentSlide: state.maxSlide - state.perSlideShow
				}
			}
			else {
				return {
					...state,
					currentSlide: state.currentSlide - 1
				}
			}
		})
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
	_renderListSuccess = () => {
		const { listVideos, statusRequest } = this.props;
		return listVideos.map(videoDetails => {
			const { channelTitle, channelId, title: videoTitle, thumbnails, publishedAt, description } = videoDetails.snippet;
		  const videoId = videoDetails.contentDetails.upload.videoId;
		  const key = videoDetails.id;
		  // const kind = videoDetails.id.kind;
		  const sizeAvatar = "medium";
		  const imgSrc = thumbnails.maxres.url;
		  const withDesc = false;
		  const withAvatar = false;
			return <div className={style.slide} key={key}>
				{this._renderVideoCard( channelTitle, channelId, videoTitle, videoId, imgSrc, publishedAt, description, statusRequest, sizeAvatar, withAvatar, withDesc )}
			</div>
		})
	}
	_renderListLoading = () => {
		const arr = [1,2,3,4,5,6,7,8,9,10,11,12];
		return arr.map(id => {
			return (
				<div className={style.slide} key={id}>
					{this._renderVideoCard()}
				</div>
			)
		})
	}
	_renderContentList = () => {
		const { statusRequest } = this.props;
		switch (statusRequest) {
			case "success":
				return this._renderListSuccess();
			case "loading":
				return this._renderListLoading();
			default:
				return null
		}
	}
	render() {
		const { currentSlide } = this.state
		const margin = {
			transform: `translateX(calc(-${50 * currentSlide}% - ${10 * currentSlide}px))`
		}
		return (
			<div className={style.carousel}>
				<div className={style.slideShow}>
					<div className={`${style.listImg} ${currentSlide}`} style={margin}>
						{this._renderContentList()}
					</div>
				</div>
				<div className={style.prevBtn}>
					<button className={style.directionBtn} onClick={this._prevSlide}>
						<i className="fas fa-chevron-circle-left"></i>
					</button>
				</div>
				<div className={style.nextBtn}>
					<button className={style.directionBtn} onClick={this._nextSlide}>
						<i className="fas fa-chevron-circle-right"></i>
					</button>
				</div>
			</div>
		)
	}
}
Slide.propTypes = {
	listVideos: PropTypes.array,
	statusRequest: PropTypes.string,
}
export default Slide
