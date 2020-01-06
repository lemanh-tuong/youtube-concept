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
	render() {
		const { channelName, channelSubscribe, withMoreInfo } = this.props
		return (
			<div className={style.topChannel}>
				<div className={style.channelAvatar}>
					<Avatar size="medium"/>
				</div>
				<div className={style.channelInfo}>
					<div className={style.channelName}>
						{channelName} <i className={`${style.tick} fas fa-check-circle`}></i>
					</div>
					<div className={style.channelContact}>
						<span>{channelSubscribe} Subscribers</span>
					</div>
				</div>
				{withMoreInfo && this._renderMoreInfoButton()}
			</div>
		)
	}
}
TopChannel.propTypes = {
	channelName: PropTypes.string,
	channelContact: PropTypes.string
}
export default TopChannel;