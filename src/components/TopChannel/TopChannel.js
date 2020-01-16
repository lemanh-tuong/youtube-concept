import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from '../Avatar/Avatar';
import style from './TopChannel.module.scss';
class TopChannel extends Component {
	_renderMoreInfoButton() {
		return (
			<div className={style.moreInfoBtn}>
				<i class="fas fa-ellipsis-v"></i>
			</div>
		)
	}
	_renderSuccess() {
		const { channelName, channelAmmountSubscriber, withMoreInfo, statusRequest } = this.props
		return (
			<div className={style.topChannel}>
				<div className={style.channelAvatar}>
					<Avatar size="medium" statusRequest={statusRequest}/>
				</div>
				<div className={style.channelInfo}>
					<div className={style.channelName}>
						{channelName} <i className={`${style.tick} fas fa-check-circle`}></i>
					</div>
					<div className={style.channelContact}>
						<span>{channelAmmountSubscriber} 123 Subscribers</span>
					</div>
				</div>
				{withMoreInfo && this._renderMoreInfoButton()}
			</div>
		)
	}
	_renderLoading() {
		const { channelName, channelAmmountSubscriber, withMoreInfo, statusRequest } = this.props
		return (
			<div className={`${style.topChannel} ${style.loading}`}>
				<div className={style.channelAvatar}>
					<Avatar size="medium" statusRequest={statusRequest} />
				</div>
				<div className={style.channelInfo}>
					<div className={style.channelName}>

					</div>
					<div className={style.channelContact}>
						<span></span>
					</div>
				</div>
			</div>
		)
	}
	_renderContent() {
		const { statusRequest } = this.props;
		switch (statusRequest) {
			case "success":
				return this._renderSuccess();
			case "loading":
				return this._renderLoading();
			default:
				return null;
		}
	}
	render() {
		return this._renderContent();
	}
}
TopChannel.propTypes = {
	channelName: PropTypes.string,
	channelContact: PropTypes.string,
	statusRequest: PropTypes.string,
	withMoreInfo: PropTypes.bool,
}
TopChannel.defaultProps = {
	channelName: '',
	channelContact: '',
	statusRequest: "success",
	withMoreInfo: false,
}
export default TopChannel;
