import React, { Component } from 'react';
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
		const { withMoreInfo } = this.props
		return (
			<div className={style.topChannel}>
				<div className={style.channelAvatar}>
					<Avatar size="medium"/>
				</div>
				<div className={style.channelInfo}>
					<div className={style.channelName}>
						LEGO <i className={`${style.tick} fas fa-check-circle`}></i>
					</div>
					<div className={style.channelContact}>
						<span>6.2M Subscribers</span>
					</div>
				</div>
				{withMoreInfo && this._renderMoreInfoButton()}
			</div>
		)
	}
}
export default TopChannel;