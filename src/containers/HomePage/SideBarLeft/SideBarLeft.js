import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import getVideoDefault from '../../../thunks/thunkGetVideoDefault/thunkGetVideoDefault';
import ErrorPage from '../../ErrorPage/ErrorPage'
import Slide from '../../../components/Slide/Slide';
import VideoCard from '../../../components/VideoCard/VideoCard';
import ListVideo from '../../../components/ListVideo/ListVideo';
import style from './SideBarLeft.module.scss';


class SideBarLeft extends PureComponent {
	componentDidMount() {
		const { getVideoDefault } = this.props
		getVideoDefault(0)
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
	// List Video
	_renderListSuccess = (listVideos, statusRequest) => {
		return listVideos.map(videoDetails => {
			const { channelTitle, channelId, title: videoTitle, thumbnails, publishedAt, description } = videoDetails.snippet;
		  const videoId = videoDetails.contentDetails.upload.videoId;
		  const key = videoDetails.id;
		  const kind = videoDetails.id.kind;
		  const sizeAvatar = "medium";
		  const imgSrc = thumbnails.maxres.url;
		  const withDesc = false;
		  const withAvatar = true;
			return <div className={`col-sm-6 col-md-4 col-lg-3 ${style.colVideo}`} key={key}>
				{this._renderVideoCard( channelTitle, channelId, videoTitle, videoId, imgSrc, publishedAt, description, statusRequest, sizeAvatar, withAvatar, withDesc )}
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
	_renderContentList = () => {
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

	// Represent Video
	_renderRepresentVideoSuccess() {
		const { data, statusRequest } = this.props;
		const { channelTitle, channelId, title: videoTitle, thumbnails, publishedAt, description } = data[0].snippet;
	  const videoId = data[0].contentDetails.upload.videoId;
	  const key = data[0].id;
	  const kind = data[0].id.kind;
	  const sizeAvatar = "medium";
	  const imgSrc = thumbnails.maxres.url;
	  const withDesc = true;
	  const withAvatar = true;
		return this._renderVideoCard( channelTitle, channelId, videoTitle, videoId, imgSrc, publishedAt, description, statusRequest, sizeAvatar, withAvatar, withDesc )
	}
	_renderRepresentVideoLoading() {
		return this._renderVideoCard('channelTitle', 'channelId','videoTitle','videoId', 'imgSrc', 'publishedAt', 'description', this.props.statusRequest, 'sizeAvatar', false, true);
	}
	_renderRepresentVideoContent() {
		const { statusRequest } = this.props;
		switch (statusRequest) {
			case "success":
				return this._renderRepresentVideoSuccess();
			case "loading":
				return this._renderRepresentVideoLoading();
			default:
				return null;
		}
	}
	_renderContent = () => {
		const { data, statusRequest } = this.props;
		return (
			<div className={style.SideBarLeft}>
				<div className={style.header}>
					<div className="row">
						<div className="col-sm-6">
							<div className={style.introduce}>
								<div className="header__title">
									<div className="mb-3">
										<div className={style.titleMd}>
											Weekly Feature
										</div>
									</div>
									<div className="mb-3">
										<div className={style.titleBig}>
											Hello, Summer Vacation!
										</div>
									</div>
									<div className="mb-0">
										<div className={style.titleSm}>
											School is just around the corner, so finish off summer break with a bang.
											 A last-minute family vacation will give the kids stories
											  to share when they return to school and memories to last a lifetime
										</div>
									</div>
								</div>
							</div>
							<div className="header__slide">
								<Slide listVideos={data} statusRequest={statusRequest} />
							</div>
						</div>
						<div className="col-sm-6">
							<div className="header__representVideo">
								<div className="header__representVideo__content">
									{this._renderRepresentVideoContent()}
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="body">
					<div className={style.section}>
						<div className={style.buttonGroup}>
							<NavLink className={style.buttonDirection} to="/" activeClassName={style.selected}>Recommended</NavLink>
							<NavLink className={style.buttonDirection} to="/more" activeClassName={style.selected}>Show More</NavLink>
						</div>
						<div className="listVideos">
							<div className="row">
							 	{this._renderContentList()}
						 	</div>
						 </div>
					</div>
				</div>
			</div>
		)
	}
	render() {
		return this.props.statusRequest === "error" ? null : this._renderContent();
	}
}
SideBarLeft.propTypes = {
	listVideos: PropTypes.array,
}
const mapStateToProps = state => ({
	data: state.HomePageReducers.data.data,
	statusRequest: state.HomePageReducers.data.status
})
const mapDispatchToProps = {
	getVideoDefault
}
export default connect(mapStateToProps, mapDispatchToProps)(SideBarLeft);
