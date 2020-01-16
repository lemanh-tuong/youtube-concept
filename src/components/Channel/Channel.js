import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from '../Avatar/Avatar';
import style from './Channel.module.scss';
class Channel extends Component {
	_renderChannelContent() {
		const { statusUser, statusRequest, imgSrc, channelName, channelLocation } = this.props;
		const checkStatusRequest = statusRequest === "loading" ? style.loading : null
		return (
			<div className={`${style.channel} ${checkStatusRequest}`}>
				<div className={style.header}>
					<Avatar statusRequest={statusRequest} imgSrc={imgSrc} statusUser={statusUser} size="big"/>
				</div>
				<div className={style.body}>
					<div className={style.name}>
						{ statusRequest === "success" ? channelName : "channelName"}
					</div>
					<div className={style.location}>
						{channelLocation}
						{ statusRequest === "success" ? "Montreal, QC" : "channelLocation"}
					</div>
				</div>
				<div className={style.footer}>
					<div className={style.contact}>
						<div className={style.item}>
							<div className={style.ammount}>{statusRequest === "success" ? 278 : 0}</div>
							<div className={style.nameContact}>Videos</div>
						</div>
						<div className={style.item}>
							<div className={style.ammount}>{statusRequest === "success" ? 278 : 0}</div>
							<div className={style.nameContact}>Subcribers</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
	render() {
		return this._renderChannelContent();
	}
}
Channel.propTypes = {
	statusUser: PropTypes.string,
	statusRequest: PropTypes.string,
	imgSrc: PropTypes.string,
	channelName: PropTypes.string,
	viewCount: PropTypes.string,
	videoCount: PropTypes.string,
	channelLocation: PropTypes.string,
}
Channel.defaultProps = {
	statusUser: '',
	statusRequest: "success",
	imgSrc: '',
	channelName: '',
	viewCount: '0',
	videoCount: '0',

}
export default Channel;
