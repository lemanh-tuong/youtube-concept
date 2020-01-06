import React, { Component } from 'react';
import VideoCard from '../VideoCard/VideoCard'
import { AppContext } from '../../AppProvider';
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
			if(state.currentSlide == 0) {
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
	_renderVideoCard(channelTitle, channelId, videoTitle, imgSrcs, publishedAt, description, videoId) {
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
		  const id = videoDetails.id;
			return this._renderVideoCard(channelTitle, channelId, videoTitle, imgSrcs, publishedAt, description, id)

		})
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
						<AppContext.Consumer>
							{({data}) => this._renderList(data)}
						</AppContext.Consumer>
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
export default Slide