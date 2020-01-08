import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';
import style from './SideBarLeft.module.scss';
import Slide from '../../../components/Slide/Slide';
import { AppContext } from '../../../AppProvider';
import VideoCard from '../../../components/VideoCard/VideoCard';
import ListVideo from '../../../components/ListVideo/ListVideo';
class SideBarLeft extends PureComponent {
	_renderVideoCard(data) {
		const channelTitle = data[0].snippet.channelTitle;
		const channelId = data[0].snippet.channelId;
	  const videoTitle = data[0].snippet.title;
	  const imgSrcs = data[0].snippet.thumbnails;
	  const publishedAt = data[0].snippet.publishedAt;
	  const description = data[0].snippet.description;
	  const videoId = data[0].contentDetails.upload.videoId;
		return <VideoCard
		channelTitle={channelTitle}
		channelId={channelId}
		videoTitle={videoTitle}
		imgSrcs={imgSrcs}
		publishedAt={publishedAt}
		description={description}
		key={videoId}
		videoId={videoId}
		withDesc
		withAvatar
		sizeAvatar="big"
		/>
	}
	render() {
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
								<AppContext.Consumer>
									{({data}) => <Slide listVideos={data}/>}
								</AppContext.Consumer>
							</div>
						</div>
						<div className="col-sm-6">
							<div className="header__presentVideo">
								<div className="header__presentVideo__content">
									<AppContext.Consumer>
									{({data}) => data.length > 0 ? this._renderVideoCard(data) : <div> Loading </div>}
									</AppContext.Consumer>
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
						<AppContext.Consumer>
							{({data}) => {
								return data ? <ListVideo listVideos={data} /> : <div>Loading</div>
							}}
						</AppContext.Consumer>
					</div>
				</div>
			</div>
		)
	}
}
export default SideBarLeft
