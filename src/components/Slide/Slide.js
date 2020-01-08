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
	_renderVideoCard(channelTitle, channelId, videoTitle, imgSrcs, publishedAt, description, videoId, key) {
		return (
			<div className={style.slide}>
				<VideoCard
					channelTitle={channelTitle}
					channelId={channelId}
					videoTitle={videoTitle}
					imgSrcs={imgSrcs}
					publishedAt={publishedAt}
					description={description}
					key={videoId}
					videoId={videoId}
				/>
			</div>
		)
	}
	_renderList(listVideo) {
		return listVideo.map(videoDetails => {
			const channelTitle = videoDetails.snippet.channelTitle;
			const channelId = videoDetails.snippet.channelId;
		  const videoTitle = videoDetails.snippet.title;
		  const imgSrcs = videoDetails.snippet.thumbnails;
		  const publishedAt = videoDetails.snippet.publishedAt;
		  const description = videoDetails.snippet.description;
		  const key = videoDetails.id;
		  const id = videoDetails.contentDetails.upload.videoId;
			return this._renderVideoCard(channelTitle, channelId, videoTitle, imgSrcs, publishedAt, description, id, key)

		})
	}
	render() {
		const { listVideos } = this.props;
		const { currentSlide } = this.state
		const margin = {
			transform: `translateX(calc(-${50 * currentSlide}% - ${10 * currentSlide}px))`
		}
		return (
			<div className={style.carousel}>
				<div className={style.slideShow}>
					<div className={`${style.listImg} ${currentSlide}`} style={margin}>
						{this._renderList(listVideos)}
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
}
export default Slide
